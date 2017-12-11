import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Slide } from '@core/model/slide';

@Component({
  selector: 'kh-show-slide',
  templateUrl: './show-slide.component.html',
  styleUrls: ['./show-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowSlideComponent implements OnInit {

  @Input() slide: Slide;
  @Input() border = false;

  constructor() { }

  ngOnInit() {
  }

}
