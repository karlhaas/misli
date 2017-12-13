import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output,
  SimpleChanges
} from '@angular/core';
import { Slide } from '@core/model/slide';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'kh-slide-type-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideTypeBaseComponent implements OnDestroy, OnChanges {

  @Input() slide: Slide;
  @Output() slideDataChanged = new EventEmitter<any>();

  protected whenDestroyed = new Subject();

  constructor() { }

  ngOnDestroy() {
    this.whenDestroyed.next(null);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    return;
  }
}
