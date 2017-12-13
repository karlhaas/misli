import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SlideTypeBaseComponent } from '@core/registry/slide-type-base.component';

@Component({
  selector: 'kh-html-slide-edit',
  templateUrl: './html-slide-edit.component.html',
  styleUrls: ['./html-slide-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlSlideEditComponent extends SlideTypeBaseComponent implements OnInit, OnChanges {

  value = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.value.valueChanges
      .subscribe(value => {
        this.slideDataChanged.emit(value);
      });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    super.ngOnChanges(simpleChanges);
    if (simpleChanges['slide']) {
      this.value.setValue(this.slide.data);
    }
  }

}
