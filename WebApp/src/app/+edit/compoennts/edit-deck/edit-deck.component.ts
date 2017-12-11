import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Deck } from '@core/model/deck';

@Component({
  selector: 'kh-edit-deck',
  templateUrl: './edit-deck.component.html',
  styleUrls: ['./edit-deck.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDeckComponent implements OnInit {

  @Input() deck: Deck;
  @Output() slideAdded = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  trackByUuid(deck: Deck) {
    return deck.uuid;
  }

  addSlide(index: number) {
    this.slideAdded.emit(index);
  }
}
