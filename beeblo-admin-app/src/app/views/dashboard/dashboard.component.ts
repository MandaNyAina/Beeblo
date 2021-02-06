import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { MessagesService } from '../../services/message/message.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  reporting_resume: any = { nouveau_client: 0, nombre_acheteur: 0 };
  reporting_graph: any = { nombre_acheteur: 0, nombre_produit: 0, nombre_commande: 0, nombre_livraison: 0 };
  reporting_date: Array<any>;

  constructor(
    private _dashboard: DashboardService,
    private message: MessagesService
  ) {}

  ngOnInit(): void {
    this._dashboard.getData().subscribe(res => {
      this.reporting_graph = res.reporting_graph;
      this.reporting_resume = res.reporting_resume;
      this.reporting_date = res.reporting_date.sort();
    }, err => {
      this.message.error("Erreur", err);
    })
  }
}
