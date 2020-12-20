import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  listItems?: Array<any>;
  responsiveOptions?: Array<Object>;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.getAllItems();
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

  getAllItems() {
    let teste = [
      { id: 1, title: 'Titre 1', image: "default-2.png" },
      { id: 2, title: 'Titre 2', image: "default-2.png" },
      { id: 3, title: 'Titre 3', image: "default-3.png" },
      { id: 1, title: 'Titre 4', image: "default-2.png" },
      { id: 2, title: 'Titre 6', image: "default-2.png" },
      { id: 3, title: 'Titre 7', image: "default-3.png" }
    ]

    this.listItems = teste;
  }

  openProduit(id) {
    this.route.navigate(['/produit',id])
  }

}
