import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
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
export class EditSlideComponent implements OnChanges, OnInit {

  @Input() deck: Deck;
  @Input() slide: Slide;
  value = new FormControl();

  constructor(private store: Store<fromReducer.CoreState>) {
  }

  ngOnInit() {
    this.value.valueChanges
      .subscribe(value => {
        this.store.dispatch(new UpdateSlideDataAction(this.slide.uuid, value));
      });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['slide']) {
      this.value.setValue(this.slide.data);
    }
  }

  delete() {
    this.store.dispatch(new DeleteSlideAction(this.slide.uuid));
  }
}
