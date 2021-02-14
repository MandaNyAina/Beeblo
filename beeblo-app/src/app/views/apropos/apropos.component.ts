import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent implements OnInit {
  aproposContent1: string;
  aproposContent2: string;
  constructor() { }

  ngOnInit() {
    this.getSiteInfo();
  }

  getSiteInfo() {
    let teste = {
      aproposContent1: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem illo facere, nihil aperiam culpa eum quis consequatur explicabo optio
      veritatis nemo laudantium modi cum ipsa numquam tempora suscipit architecto!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quia non quae nam dolore reiciendis distinctio, recusandae esse animi blanditiis
      consequatur vitae voluptatibus nihil dolor qui accusamus eum amet nostrum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem illo facere, nihil aperiam culpa eum quis consequatur explicabo optio
      veritatis nemo laudantium modi cum ipsa numquam tempora suscipit architecto!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quia non quae nam dolore reiciendis distinctio, recusandae esse animi blanditiis
      consequatur vitae voluptatibus nihil dolor qui accusamus eum amet nostrum!</p>`,
      aproposContent2: `
      <p>Beeblo est un mesage d’universalité; la sobriété occidentale mélangée à une forte inspiration de l’art africain.
      </p>
      <p>Très fier de nos origines françaises et plus particulièrement bellifontaines, nous revendiquons une modernité urbaine proche de la nature. Nous sommes fiers de notre ville de rattachement, Fontainebleau, qui allie à la fois un développement économique ambitieux et responsable, un rayonnement mondial, et la préservation de l'environnement.
      </p>
      <p>Alors soyons responsables, soyons créatifs, soyons bellifontains, BeeBlo.</p>`
    }

    this.aproposContent1 = teste.aproposContent1;
    this.aproposContent2 = teste.aproposContent2;
  }

}
