import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Slide } from '@core/model/slide';
import { Store } from '@ngrx/store';
import * as fromReducer from '@core/state';
import { DeleteSlideAction, UpdateSlideDataAction } from '@core/state/deck/deck.actions';
import { Deck } from '@core/model/deck';


@Component({
  selector: 'kh-edit-slide',
  templateUrl: './edit-slide.component.html',
  styleUrls: ['./edit-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSlideComponent {

  @Input() deck: Deck;
  @Input() slide: Slide;

  constructor(private store: Store<fromReducer.CoreState>) {
  }

  delete() {
    this.store.dispatch(new DeleteSlideAction(this.slide.uuid));
  }

  slideDataChanged(data: any) {
    this.store.dispatch(new UpdateSlideDataAction(this.slide.uuid, data));
  }
}
