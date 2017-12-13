import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SlideRegistryService } from '@core/registry/slide-registry.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid';
import { SlideRegistryEntry } from '@core/registry/slide-registry-entry';
import { CoreState } from '@core/state';
import { AddSlideAction } from '@core/state/deck/deck.actions';
import { Deck } from '@core/model/deck';

@Component({
  selector: 'kh-add-slide-button',
  templateUrl: './add-slide-button.component.html',
  styleUrls: ['./add-slide-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSlideButtonComponent implements OnInit {

  @Input() index = 0;
  @Input() deck: Deck;
  allSlideRegistryEntries$: Observable<Array<SlideRegistryEntry>>;

  constructor(private store: Store<CoreState>,
              private slideRegistryService: SlideRegistryService) {

  }

  ngOnInit() {
    this.allSlideRegistryEntries$ = this.slideRegistryService.all$;
  }

  addSlide(entry: SlideRegistryEntry) {
    this.store.dispatch(new AddSlideAction({uuid: uuid.v4(), data: {}, type: entry.type}, this.deck.uuid, this.index));
  }

}
