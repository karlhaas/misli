import { Component, OnInit, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';
import { Deck } from '@core/model/deck';
import { Store } from '@ngrx/store';
import * as fromCore from '@core/state';
import { Slide } from '@core/model/slide';

@Component({
  selector: 'presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresenterComponent implements OnInit {

  deck: Deck;
  index = 0;
  currentSlide: Slide;

  constructor(private store: Store<fromCore.CoreState>,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.store.select(fromCore.getAllDecks)
      .subscribe(decks => {
        this.deck = decks[0];
        this.currentSlide = this.deck.slides[this.index];
        this.changeDetectorRef.markForCheck();
      });
  }

  @HostListener('document:click', ['$event'])
  nextSlide() {
    if (this.index < this.deck.slides.length - 1) {
      this.index ++;
      this.currentSlide = this.deck.slides[this.index];
    }
  }

  previousSlide() {
    if (this.index > 0) {
      this.index --;
      this.currentSlide = this.deck.slides[this.index];
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    switch (event.code) {
      case 'PageUp':
      case 'ArrowLeft':
      case 'ArrowUp':
        return this.previousSlide();
      case 'PageDown':
      case 'ArrowRight':
      case 'ArrowDown':
        return this.nextSlide();
    }
  }

  @HostListener('document:wheel', ['$event'])
  handleWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      return this.nextSlide();
    } else if (event.deltaY < 0) {
      return this.previousSlide();
    }
  }
}
