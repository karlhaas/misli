import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Deck } from '@core/model/deck';

@Component({
  selector: 'select-deck',
  templateUrl: './select-deck.component.html',
  styleUrls: ['./select-deck.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDeckComponent {

  @Input() decks: Array<Deck>;
  @Output() selected = new EventEmitter<Deck>();

  trackByUuid(deck: Deck) {
    return deck.uuid;
  }

  deckSelected(deck: Deck) {
    this.selected.emit(deck);
  }
}
