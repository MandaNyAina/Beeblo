import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  @Input() label: string;
  @Input() position: string;
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() {
    this.label = this.label ? this.label : 'Envoyer';
    this.position = this.position ? this.position : 'left';
  }

}
