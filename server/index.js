const express = require('express');
const massive = require('massive');
require('dotenv').config();

const {PORT, DB_CON} = process.env;
const app = express();


massive(DB_CON).then(dbInstance => {
  app.set('db', dbInstance);  
}).catch(err => console.log(err, "DB Error"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));