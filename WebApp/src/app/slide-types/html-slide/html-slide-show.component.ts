import { ChangeDetectionStrategy, Component, OnChanges } from '@angular/core';
import { SlideTypeBaseComponent } from '@core/registry/slide-type-base.component';

@Component({
  selector: 'kh-html-slide-show',
  templateUrl: './html-slide-show.component.html',
  styleUrls: ['./html-slide-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlSlideShowComponent extends SlideTypeBaseComponent implements OnChanges {

  constructor() {
    super();
  }

  ngOnChanges() {
    // whatever
  }
}
