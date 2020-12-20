const app = require('express')(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      db = require('./config/database'),
      Mailing = require('./mailing/mailing');

require('dotenv').config()
const prefix = process.env.PREFIX;

// check database
db.getConnection((err, d) => {
  if (err) console.log(`Error on database connexion : ${err}`);
})

// check server mail
try {
  let mailing = new Mailing();
} catch (error) {
  console.log(error);
}

// middleware
app.use(cors());
app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));

// route declare
const acheteur = require('./route/acheteur.route'),
      admin = require('./route/admin.route'),
      login = require('./route/login.route');

app.use(`${prefix}/acheteur`, acheteur);
app.use(`${prefix}/admin`, admin);
app.use(`${prefix}/login`, login);

// run server
app.listen(process.env.PORT, () => {
  console.log(`Success to connect in server on port ${process.env.PORT}`);
})