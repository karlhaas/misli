import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from '@core/state';
import { Deck } from '@core/model/deck';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'edit-decks',
  templateUrl: './edit-decks.component.html',
  styleUrls: ['./edit-decks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDecksComponent implements OnInit {

  decks: Array<Deck>;

  constructor(private store: Store<fromReducer.CoreState>,
              private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.store.select(fromReducer.getAllDecks)
      .subscribe(decks => {
        this.decks = decks;
        this.changeDetectorRef.markForCheck();
      });
  }

  selectDeck(deck: Deck) {
    this.router.navigate([deck.uuid], {relativeTo: this.route});
  }
}
