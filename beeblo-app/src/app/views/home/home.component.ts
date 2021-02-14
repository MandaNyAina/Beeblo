import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  homeInfo1: string;
  homeInfo2: string;
  homeInfo3: string;
  constructor() { }

  ngOnInit() {
    this.getInfoSite();
  }

  getInfoSite() {
    let teste = {
      homeInfo1: `<p>
                    Car l'inspiration qui émane de Fontainebleau n'est pas figée, bien au contraire.
                    En mouvement perpétuel pour alimenter une créativité sans restriction,
                    elle offre le terreau idéal à ceux qui réfléchissent autrement.
                  </p>
                  <p>
                    C'est dans cette vision que sont conçues les collections Beeblo : réinventer la
                    compréhension de racines culturelles multiples
                    pour retrouver une mode porteuse de sens et qui donne du sens à ceux qui la portent.
                  </p>`,
      homeInfo2: `<p>
                    Sûre d'elle autant qu'inattendue, mais intransigeante sur la qualité de finition,
                    Beeblo prône ainsi une mode qui révèle la personnalité de ceux pour qui les détails
                    comptent. Car revêtir Beeblo revient à s'assumer pleinement aux yeux des autres.
                    Et c'est pourquoi la marque assure que chaque pièce de mode qu'elle propose dégage
                    cette "créativité tranquille" que l'on retrouve à Fontainebleau et qui se
                    ressent dans tous les codes de Beeblo.
                  </p>`,
      homeInfo3: `<p>
                    Laissez-vous inspirer par des vêtements et accessoires
                    qui dépassent les conceptions classiques établies par la mode conventionnelle.
                  </p>`
    }

    this.title = `C'est au cœur de Fontainebleau, dans un écrin de calme qui apaise
    l'âme autant qu'elle nourrit l'imagination, que Beeblo est née.
    A la croisée d'une ambiance reposante, presque intimiste, et d'un puissant héritage
    patrimonial, la marque invite à retrouver en soi la force et la confiance nécessaires
    pour affirmer ses propres choix.
    <p class='p-text-center'>Le calme du Roi</>`
    this.homeInfo1 = teste.homeInfo1;
    this.homeInfo2 = teste.homeInfo2;
    this.homeInfo3 = teste.homeInfo3;
  }

}
