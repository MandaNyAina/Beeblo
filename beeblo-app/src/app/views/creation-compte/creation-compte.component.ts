import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pays } from 'src/app/interface/pays';
import { PaysService } from 'src/app/services/pays/pays.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.scss']
})
export class CreationCompteComponent implements OnInit {
  listOfPays: Pays[];
  constructor(
    private _paysSvc: PaysService
  ) { }

  ngOnInit() {
    this.listOfPays = this._paysSvc.getAllPays();
  }

  onSubmitForm(form: NgForm) {

  }

}
