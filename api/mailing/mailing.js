const nodemailer = require('nodemailer');
const Database = require('../database/database_manager');
const { decrypt } = require('../modules/custom_function');
const database = new Database;
const fs = require("fs");
const hs = require('handlebars');

class Mailing {

  constructor() {
    database.select("beeblo", "smtp_host, smtp_email, smtp_password, smtp_port", "1 LIMIT 1")
    .then(res => {
      if (res.length == 0) {
        throw("Beeblo information website not configured");
      } else {
        let smtp = res[0];
        this.smtp_email = res[0].smtp_email;
        this.transporter = nodemailer.createTransport({
          pool: true,
          host: smtp.smtp_host,
          port: smtp.smtp_port,
          secure: true,
          auth: {
            user: smtp.smtp_email,
            pass:  decrypt(smtp.smtp_password)
          }
        });
        this.transporter.verify((err) => {
          if (err) throw("Error on serveur mail");
        })
      }
    }).catch(err => console.log(err));
  }

  send(subject, to, html) {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail({
        from: this.smtp_email,
        to, subject, html
      }).then(() => resolve("Send")).catch(err => reject(`Mail sender error : ${err}`));
    })
  }

  contactAdmin(email_sender, objet, message) {
    return new Promise(async (resolve, reject) => {
      let read_template = await fs.readFile("template/admin_contact.html", "utf8");
      let template = hs.compile(read_template);
      let template_html = template({ email_sender, message });
      this.send(objet, this.smtp_email, template_html);
    })
  }

}

module.exports = Mailing;
