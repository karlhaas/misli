import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoreState, getSlideByUuid } from '@core/state';
import { Slide } from '@core/model/slide';
import { UpdateSlideDataAction } from '@core/state/deck/deck.actions';

@Component({
  selector: 'kh-edit-slide-page',
  templateUrl: './edit-slide-page.component.html',
  styleUrls: ['./edit-slide-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSlidePageComponent implements OnInit {

  slide: Slide;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<CoreState>,
              private changeDetectorRef: ChangeDetectorRef) {
  }


  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['slideUuid'])
      .switchMap(uuid => this.store.select(getSlideByUuid(uuid)))
      .subscribe(slide => {
        this.slide = slide;
        this.changeDetectorRef.markForCheck();
      });
  }

  dataChanged(slideData: any) {
    this.store.dispatch(new UpdateSlideDataAction(this.slide.uuid, slideData));
  }
}
