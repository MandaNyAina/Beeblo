const app = require('express')(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      db = require('./config/database');

require('dotenv').config()

// check database
db.getConnection((err) => {
  if (err) console.log(`Error on database connexion : ${err}`);
})

// middleware
app.use(cors());
app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));

// run server
app.listen(process.env.PORT, () => {
  console.log(`Success to connect in server on port ${process.env.PORT}`);
})
