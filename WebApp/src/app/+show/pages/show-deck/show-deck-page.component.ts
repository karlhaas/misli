import { Component, OnInit, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';
import { Deck } from '@core/model/deck';
import { Store } from '@ngrx/store';
import * as fromCore from '@core/state';
import { Slide } from '@core/model/slide';
import { ActivatedRoute, Router } from '@angular/router';
import { getDeckByUuid, getNextSlideByUuid, getPreviousSlideByUuid } from '@core/state';

@Component({
  selector: 'kh-show-deck',
  templateUrl: './show-deck-page.component.html',
  styleUrls: ['./show-deck-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDeckPageComponent implements OnInit {

  deck: Deck;

  constructor(private store: Store<fromCore.CoreState>,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['uuid'])
      .switchMap(uuidParam => this.store.select(getDeckByUuid(uuidParam)))
      .subscribe(deck => {
        this.deck = deck;
        this.changeDetectorRef.markForCheck();
      });
  }

  nextSlide() {
    const currentSlideUuid = this.getCurrentSlideUuid();
    if (!currentSlideUuid) {
      return;
    }
    this.store.select(getNextSlideByUuid(currentSlideUuid))
      .first()
      .subscribe(slide => {
        if (slide) {
          this.router.navigate([slide.uuid], {relativeTo: this.activatedRoute});
        }
      });
  }

  previousSlide() {
    const currentSlideUuid = this.getCurrentSlideUuid();
    if (!currentSlideUuid) {
      return;
    }
    this.store.select(getPreviousSlideByUuid(currentSlideUuid))
      .first()
      .subscribe(slide => {
        if (slide) {
          this.router.navigate([slide.uuid], {relativeTo: this.activatedRoute});
        }
      });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    console.log(event);
    switch (event.code) {
      case 'PageUp':
      case 'ArrowLeft':
      case 'ArrowUp':
        return this.previousSlide();
      case 'PageDown':
      case 'ArrowRight':
      case 'ArrowDown':
        return this.nextSlide();
      case 'KeyE':
        this.router.navigate(['edit', this.deck.uuid]);
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

  private getCurrentSlideUuid() {
    const children = this.activatedRoute.snapshot.children;
    if (!children.length) {
      return null;
    }
    return children[0].params['slideUuid'];
  }
}
