import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class CustomSearchComponent implements OnInit {

  @Input()
  ph: string = 'Search...';
  valor: string = '';

  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  @Output() myEvent2: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickListener(id: number, tag: string) {
    this.valor = tag;
    this.myEvent2.emit(tag)
  }

}
