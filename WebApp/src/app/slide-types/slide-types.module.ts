import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideRegistryService } from '@core/registry/slide-registry.service';

import { SharedModule } from '@shared/shared.module';
import { MatInputModule } from '@angular/material';
import { HtmlSlideShowComponent } from './html-slide/html-slide-show.component';
import { HtmlSlideEditComponent } from './html-slide/html-slide-edit.component';
import { HTML_SLIDE_REGISTRY_ENTRY } from './html-slide/html-slide-show-registry-entry';
import { ImgSlideShowComponent } from './img-slide/img-slide-show/img-slide-show.component';
import { ImgSlideEditComponent } from './img-slide/img-slide-edit/img-slide-edit.component';
import { IMG_SLIDE_REGISTRY_ENTRY } from './img-slide/img-slide-show-registry-entry';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    HtmlSlideShowComponent,
    HtmlSlideEditComponent,
    ImgSlideShowComponent,
    ImgSlideEditComponent
  ],
  entryComponents: [
    HtmlSlideShowComponent,
    HtmlSlideEditComponent,
    ImgSlideShowComponent,
    ImgSlideEditComponent
  ]
})
export class SlideTypesModule {
  constructor(slideRegistryService: SlideRegistryService) {
    slideRegistryService.register(HTML_SLIDE_REGISTRY_ENTRY);
    slideRegistryService.register(IMG_SLIDE_REGISTRY_ENTRY);
  }
}
