const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser= require('body-parser')
require('./models/User');
require('./services/passport');
const cors = require('cors');

// Enable CORS for all routes

mongoose.connect(keys.mongoURI);
mongoose.set('strictQuery', true)

const app = express();

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

require('./routes/authRoutes')(app);

if( process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));

  const path= require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client', 'build','index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port);
