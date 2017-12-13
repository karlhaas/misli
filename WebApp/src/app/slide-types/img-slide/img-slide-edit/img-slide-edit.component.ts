import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SlideTypeBaseComponent } from '@core/registry/slide-type-base.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'kh-img-slide-edit',
  templateUrl: './img-slide-edit.component.html',
  styleUrls: ['./img-slide-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgSlideEditComponent extends SlideTypeBaseComponent implements OnChanges, OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
    this.formGroup = this.formBuilder.group({
      src: '',
      width: ''
    });
  }

  ngOnInit() {
    this.formGroup.valueChanges
      .subscribe(value => {
        this.slideDataChanged.emit(value);
      });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    super.ngOnChanges(simpleChanges);
    if (simpleChanges['slide']) {
      this.formGroup.setValue(this.slide.data);
    }
  }

}
