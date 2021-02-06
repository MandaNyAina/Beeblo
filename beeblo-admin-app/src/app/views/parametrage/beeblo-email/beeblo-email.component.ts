import { Component, OnInit } from '@angular/core';
import { SiteMail } from '../../../interface/siteMail';
import { MessagesService } from '../../../services/message/message.service';
import { ParametrageService } from '../../../services/parametrage/parametrage.service';

@Component({
  selector: 'app-beeblo-email',
  templateUrl: './beeblo-email.component.html',
  styleUrls: ['./beeblo-email.component.scss']
})
export class BeebloEmailComponent implements OnInit {
  smtp_host: string = "";
  smtp_email: string = "";
  smtp_password: string = "";
  smtp_port: string = "";

  constructor(
    private parametrage: ParametrageService,
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.getMail();
  }

  save() {
    let formData: SiteMail = {
      "smtp_host": this.smtp_host,
      "smtp_port": this.smtp_port,
      "smtp_email": this.smtp_email,
      "smtp_password": this.smtp_password
    }

    this.parametrage.setMail(formData).subscribe(res => {
      this.message.success("Success", "Mis a jour reussi")
    }, err => {
      this.message.error("Erreur", err.error);
    })
  }

  getMail() {
    this.parametrage.getMail().subscribe(res => {
      Object.keys(res).forEach((key) => {
        this[key] = res[key];
      });
    }, err => {
      this.message.error("Erreur", err.error);
    })
  }

}
