import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Deck } from '@core/model/deck';
import { CoreState, getDeckByUuid } from '@core/state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kh-edit-deck-page',
  templateUrl: './edit-deck-page.component.html',
  styleUrls: ['./edit-deck-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDeckPageComponent implements OnInit {

  deck: Deck;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<CoreState>,
              private changeDetectorRef: ChangeDetectorRef) {
  }


  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['uuid'])
      .switchMap(uuidParam => this.store.select(getDeckByUuid(uuidParam)))
      .subscribe(deck => {
        this.deck = deck;
        this.changeDetectorRef.markForCheck();
      });
  }

  trackByUuid(deck: Deck) {
    return deck.uuid;
  }
}
