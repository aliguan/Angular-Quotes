import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quoteitem.component.html',
  styleUrls: ['./quoteitem.component.css']
})
export class QuoteitemComponent implements OnInit {
  @Input() quote: any;
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('ITEM COMPONENT', this.quote);
  }

  onQuoteDelete() {
    this.onDelete.emit(this.quote.id);
  }

}
