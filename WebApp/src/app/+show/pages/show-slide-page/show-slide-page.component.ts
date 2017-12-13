import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getSlideByUuid } from '@core/state';
import { Store } from '@ngrx/store';
import * as fromCore from '@core/state';
import { Slide } from '@core/model/slide';

@Component({
  selector: 'kh-show-slide-page',
  templateUrl: './show-slide-page.component.html',
  styleUrls: ['./show-slide-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowSlidePageComponent implements OnInit {

  slide: Slide;

  constructor(private store: Store<fromCore.CoreState>,
              private activatedRoute: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['slideUuid'])
      .switchMap(uuidParam => this.store.select(getSlideByUuid(uuidParam)))
      .subscribe(slide => {
        this.slide = slide;
        this.changeDetectorRef.markForCheck();
      });
  }
}
