import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() heigth: number;
  @Input() value: string;

  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onChangeText(): void {
    this.onChange.emit({value: this.value});
  }
}
