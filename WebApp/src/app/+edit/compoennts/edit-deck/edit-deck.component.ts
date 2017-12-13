import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Deck } from '@core/model/deck';
import { Slide } from '@core/model/slide';

@Component({
  selector: 'kh-edit-deck',
  templateUrl: './edit-deck.component.html',
  styleUrls: ['./edit-deck.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDeckComponent implements OnInit {

  @Input() deck: Deck;

  constructor() {
  }

  ngOnInit() {
  }

  trackByUuid(slide: Slide) {
    return slide.uuid;
  }

}
