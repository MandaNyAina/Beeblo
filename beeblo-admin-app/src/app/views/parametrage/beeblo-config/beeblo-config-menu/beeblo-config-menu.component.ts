import { Component, OnInit } from '@angular/core';
import { Header } from '../../../../interface/header';
import { MenuFront } from '../../../../interface/menuFront';
import { MenuFrontService } from '../../../../services/menu-front/menu-front.service';
import { MessagesService } from '../../../../services/message/message.service';

@Component({
  selector: 'app-beeblo-config-menu',
  templateUrl: './beeblo-config-menu.component.html',
  styleUrls: ['./beeblo-config-menu.component.scss']
})
export class BeebloConfigMenuComponent implements OnInit {
  menu: Array<MenuFront>;
  loading: boolean = false;
  header: Array<Header>;

  constructor(
    private _menuFront: MenuFrontService,
    private message: MessagesService
  ) {
  }

  ngOnInit() {
    this.getAllMenu();
    this.header = [
      {
        key: "nom_menu",
        name: "Nom menu",
        width: 100
      },
      {
        key: "lien_menu",
        name: "Lien",
        width: 100
      },
      {
        key: "in_sidebar",
        name: "Dans le sidebar",
        width: 100
      },
      {
        key: "id_status",
        name: "Statut",
        width: 100
      }
    ];
  }

  getAllMenu() {
    this.loading = true;
    this._menuFront.getAllMenu().subscribe(res => {
      this.loading = false;
      this.menu = res;
    }, (err) => {
      this.message.error("Erreur", err.error)
    })
  }

}
