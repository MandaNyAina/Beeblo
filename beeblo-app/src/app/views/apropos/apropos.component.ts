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
      aproposContent1: `<p><b>Notre Vision:</b> Des collections qui réinventent leurs racines culturelles pour retrouver une mode porteuse de sens.
      Beeblo se bat contre la standardisation, pour une mode plus créative et ancrée dans un univers. Des vêtements qui ont de l'identité, des références, et qui donnent un style plutôt que de représenter un style.
      </p><p>
      <b>Notre Mission</b>: Révéler la richesse de personnalité de ceux pour qui les détails comptent.
      Beeblo s'applique à faire émerger les aspérités et les exigences de la communauté Beeblo, pour qu'ils soient vus et reconnus comme les "yeux de la mode", ceux qui traquent et détectent les petits détails qui font toute la différence.
      </p><p>
      </p>`,
      aproposContent2: `
      <p><b>Notre Promesse:</b> Assurer que chaque pièce de mode dégage cette "créativité tranquille"
      Beeblo veut rendre accessible le côté créatif de la mode.
      "Toi aussi tu peux avoir ce petit truc en plus dans ta tenue,
      sans passer pour un farfelu".</p><p> C'est une créativité qui, à l'image de Beeblo est
      paisible, calme, assurée et charismatique.</p>
      <p class='p-text-center'>Beeblo, pour les abeilles insolites de la mode</p>`
    }

    this.aproposContent1 = teste.aproposContent1;
    this.aproposContent2 = teste.aproposContent2;
  }

}
