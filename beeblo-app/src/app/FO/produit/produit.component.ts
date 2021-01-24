import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  items: MenuItem[];
  idProduit?: any;
  produit?: any;
  currency?: String;
  responsiveOptions?: Array<Object>;

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
        window.scroll(0,0);
      }
    });
  }

  ngOnInit() {
    this.idProduit = this.activeRoute.params['_value'].id;
    this.items = [
      {label:'Acceuil', url: '/homepage'},
      {label:'Notre collection', url: '/collection'},
      {label:`Produit ${this.idProduit}`}
    ];
    this.currency = "€";
    this.getProduit();
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  getProduit() {
    let teste = {
      image: `default-${this.idProduit}.png`,
      images: ['default-2.png', 'default-3.png', 'default-2.png', 'default-2.png', 'default-2.png', 'default-2.png'],
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      prix: 110,
      couleur: ['red', 'black', 'violet'],
      taille: ['S', 'M', 'L', 'XL'],
      description: '',
      numero_serie: '',
      similaire: [
        { id: 1, title: 'Titre 1', image: "default-2.png" },
        { id: 2, title: 'Titre 2', image: "default-2.png" },
        { id: 3, title: 'Titre 3', image: "default-3.png" },
        { id: 1, title: 'Titre 4', image: "default-2.png" },
        { id: 2, title: 'Titre 6', image: "default-2.png" },
        { id: 3, title: 'Titre 7', image: "default-3.png" }
      ]
    }

    this.produit = teste;
  }

  openProduit(id) {
    this.route.navigate(['/produit',id])
  }

}
