import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SlideTypeBaseComponent } from '@core/registry/slide-type-base.component';
import { ImgSlideData } from '../img-slide-data';

@Component({
  selector: 'kh-img-slide-show',
  templateUrl: './img-slide-show.component.html',
  styleUrls: ['./img-slide-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgSlideShowComponent extends SlideTypeBaseComponent {

  constructor() {
    super();
  }

  get data(): ImgSlideData {
    return this.slide.data as ImgSlideData;
  }
}
