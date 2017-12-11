import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from '@core/state';
import { Deck } from '@core/model/deck';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kh-show-decks-page',
  templateUrl: './show-decks-page.component.html',
  styleUrls: ['./show-decks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDecksPageComponent implements OnInit {

  decks: Array<Deck>;

  constructor(private store: Store<fromReducer.CoreState>,
              private changeDetectorRef: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute,
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
    this.router.navigate([deck.uuid], {relativeTo: this.activatedRoute});
  }
}
