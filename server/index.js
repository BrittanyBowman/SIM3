const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller')
const passport = require('passport');

const localStrategy = require('passport-local').Strategy;

const {PORT, DB_CON} = process.env;
const app = express();
app.use(express.json());


massive(DB_CON).then(dbInstance => {
  app.set('db', dbInstance);  
}).catch(err => console.log(err, "DB Error"));

//endpoints
app.post('/api/register', controller.register);
app.post('/api/login', controller.login);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));