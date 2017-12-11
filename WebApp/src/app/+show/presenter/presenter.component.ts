import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Deck } from '../../core/model/deck';

@Component({
  selector: 'presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresenterComponent implements OnInit {

  deck: Deck = {
    slides: [{
      type: 'simple-text',
      data: 'Hallo, ich bin die erste Slide'
    }, {
      type: 'simple-text',
      data: 'Zweite slide'
    }]
  };

  index = 0;

  constructor() {
  }

  ngOnInit() {
  }

  get currentSlide() {
    return this.deck.slides[this.index];
  }

  @HostListener('document:click', ['$event'])
  nextSlide() {
    if (this.index < this.deck.slides.length - 1) {
      this.index ++;
    }
  }

  previousSlide() {
    if (this.index > 0) {
      this.index --;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    console.log(event);
    switch (event.code) {
      case 'PageUp':
      case 'ArrowLeft':
        return this.previousSlide();
      case 'PageDown':
      case 'ArrowRight':
        return this.nextSlide();
    }
  }
}
