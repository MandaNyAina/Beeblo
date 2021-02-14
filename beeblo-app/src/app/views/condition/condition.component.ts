import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {
  conditionElement1: string;
  conditionElement2: string;
  conditionElement3: string;

  page_name: string = "NOS CONDITIONS D’UTILISATIONS";
  filtered: string = "condition_vente";
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    switch (this.router.url) {
      case "/mention-legale":
        this.filtered = "mention";
        this.page_name = "MENTION LEGALES";
        break;

      case "/terme-condition":
        this.filtered = "terme_condition";
        this.page_name = "TERME ET CONDITIONS DE VENTE";
        break;

    }
    this.getSiteInfo();
  }

  getSiteInfo() {
    let teste = {
      conditionElement1 : `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum enim et similique explicabo dignissimos magnam labore aliquam ullam? Rem ad ab distinctio voluptatibus
      quis temporibus obcaecati inventore, nam voluptatem iste.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit amet eveniet consequuntur quia, maxime, harum odit nesciunt at possimus
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, aspernatur saepe sint esse dignissimos omnis vitae eveniet maiores dolorum libero a,
      quaerat quos labore consequuntur dicta recusandae obcaecati quia nobis. illo cum accusamus cupiditate aspernatur mollitia ratione minima iure modi temporibus?</p>`,
      conditionElement2: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum enim et similique explicabo dignissimos magnam labore aliquam ullam? Rem ad ab distinctio voluptatibus
      quis temporibus obcaecati inventore, nam voluptatem iste.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit amet eveniet consequuntur quia, maxime, harum odit nesciunt at possimus
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, aspernatur saepe sint esse dignissimos omnis vitae eveniet maiores dolorum libero a,
      quaerat quos labore consequuntur dicta recusandae obcaecati quia nobis. illo cum accusamus cupiditate aspernatur mollitia ratione minima iure modi temporibus?</p>`,
      conditionElement3: `
      <p>Beeblo est un mesage d’universalité; la sobriété occidentale mélangée à une forte inspiration de l’art africain.
      </p>
      <p>Très fier de nos origines françaises et plus particulièrement bellifontaines, nous revendiquons une modernité urbaine proche de la nature. Nous sommes fiers de notre ville de rattachement, Fontainebleau, qui allie à la fois un développement économique ambitieux et responsable, un rayonnement mondial, et la préservation de l'environnement.
      </p>
      <p>Alors soyons responsables, soyons créatifs, soyons bellifontains, BeeBlo.</p>`
    }

    this.conditionElement1 = teste.conditionElement1;
    this.conditionElement2 = teste.conditionElement2;
    this.conditionElement3 = teste.conditionElement3;
  }

}
