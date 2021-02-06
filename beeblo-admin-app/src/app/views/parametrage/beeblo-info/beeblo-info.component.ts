import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SiteInfo } from '../../../interface/siteInfo';
import { MessagesService } from '../../../services/message/message.service';
import { ParametrageService } from '../../../services/parametrage/parametrage.service';

@Component({
  selector: 'app-beeblo-info',
  templateUrl: './beeblo-info.component.html',
  styleUrls: ['./beeblo-info.component.scss'],
})
export class BeebloInfoComponent implements OnInit {
  site_beeblo: string = "";
  raison_social_beeblo: string = "";
  contact_phone_beeblo: string = "";
  contact_email_beeblo: string = "";
  siege_beeblo: string = "";
  home_title: string = "";

  apropos_beeblo1: string = "";
  apropos_beeblo2: string = "";
  home_beeblo1: string = "";
  home_beeblo2: string = "";
  home_beeblo3: string = "";

  condition_utilisation_beeblo1: string = "";
  condition_utilisation_beeblo2: string = "";
  condition_utilisation_beeblo3: string = "";

  mention_legale_beeblo: string = "";

  condition_vente: string = "";
  constructor(
    private parametrage: ParametrageService,
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.getInfo();
  }

  onUpdateEditor(variable: string, e: any) {
    this[variable] = e.value;
  }

  save() {
    let formData: SiteInfo = {
      "site_beeblo": this.site_beeblo,
      "raison_social_beeblo": this.raison_social_beeblo,
      "contact_phone_beeblo": this.contact_phone_beeblo,
      "contact_email_beeblo": this.contact_email_beeblo,
      "siege_beeblo": this.siege_beeblo,
      "home_title": this.home_title,
      "apropos_beeblo1": this.apropos_beeblo1,
      "apropos_beeblo2": this.apropos_beeblo2,
      "home_beeblo1": this.home_beeblo1,
      "home_beeblo2": this.home_beeblo2,
      "home_beeblo3": this.home_beeblo3,
      "condition_utilisation_beeblo1": this.condition_utilisation_beeblo1,
      "condition_utilisation_beeblo2": this.condition_utilisation_beeblo2,
      "condition_utilisation_beeblo3": this.condition_utilisation_beeblo3,
      "mention_legale_beeblo": this.mention_legale_beeblo,
      "condition_vente": this.condition_vente
    }

    this.parametrage.setInfo(formData).subscribe(res => {
      this.message.success("Success", "Mis a jour reussi")
    }, err => {
      this.message.error("Erreur", err.error);
    })

  }

  getInfo() {
    this.parametrage.getInfo().subscribe(res => {
      Object.keys(res).forEach((key) => {
        this[key] = res[key];
      });
    }, err => {
      this.message.error("Erreur", err.error);
    })
  }

}
