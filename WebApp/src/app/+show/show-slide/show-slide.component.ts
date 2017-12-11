import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'show-slide',
  templateUrl: './show-slide.component.html',
  styleUrls: ['./show-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
