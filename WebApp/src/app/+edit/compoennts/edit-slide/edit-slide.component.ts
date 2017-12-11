import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Slide } from '@core/model/slide';

@Component({
  selector: 'edit-slide',
  templateUrl: './edit-slide.component.html',
  styleUrls: ['./edit-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSlideComponent implements OnInit {

  @Input() slide: Slide;
  @Output() dataChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  save(value: HTMLElement) {
    this.dataChanged.emit(value.innerText);
  }
}
