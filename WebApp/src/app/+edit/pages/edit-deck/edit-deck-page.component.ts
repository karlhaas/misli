import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Deck } from '@core/model/deck';
import { CoreState, getDeckByUuid } from '@core/state';
import * as uuid from 'uuid';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AddSlideAction } from '@core/state/deck/deck.actions';

@Component({
  selector: 'edit-deck-page',
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

  addSlide(index: number) {
    this.store.dispatch(new AddSlideAction({uuid: uuid.v4(), data: {}, type: 'simple-text'}, this.deck.uuid, index));
  }
}
