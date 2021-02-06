import { Component, OnInit } from '@angular/core';
import { SiteReseau } from '../../../interface/siteReseau';
import { MessagesService } from '../../../services/message/message.service';
import { ParametrageService } from '../../../services/parametrage/parametrage.service';

@Component({
  selector: 'app-beeblo-reseau',
  templateUrl: './beeblo-reseau.component.html',
  styleUrls: ['./beeblo-reseau.component.scss']
})
export class BeebloReseauComponent implements OnInit {
  link_facebook: string = "";
  link_tumblr: string = "";
  link_tweet: string = "";
  link_pinterest: string = "";
  link_instagram: string = "";

  constructor(
    private parametrage: ParametrageService,
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.getReseau();
  }

  save() {
    let formData: SiteReseau = {
      "link_facebook": this.link_facebook,
      "link_tumblr": this.link_tumblr,
      "link_tweet": this.link_tweet,
      "link_pinterest": this.link_pinterest,
      "link_instagram": this.link_instagram,
    }

    this.parametrage.setReseau(formData).subscribe(res => {
      this.message.success("Success", "Mis a jour reussi")
    }, err => {
      this.message.error("Erreur", err.error);
    })
  }

  getReseau() {
    this.parametrage.getReseau().subscribe(res => {
      Object.keys(res).forEach((key) => {
        this[key] = res[key];
      });
    }, err => {
      this.message.error("Erreur", err.error);
    })
  }

}
