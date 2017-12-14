import { Component, OnInit } from '@angular/core';
import { SlideTypeBaseComponent } from '@core/registry/slide-type-base.component';

@Component({
  moduleId: module.id,
  selector: 'kh-ifrmae-slide-show',
  template: `
    <iframe src="http://orf.at"></iframe>
  `,
  styles: [':host, iframe { width: 100%; height: 100%;}'],
})
export class IframeSlideComponent extends SlideTypeBaseComponent {
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
