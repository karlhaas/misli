import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideRegistryService } from '@core/registry/slide-registry.service';
import { SlideTypeBaseComponent } from '@core/slide-types/slide-type-base.component';
import { HtmlSlideShowComponent } from '@core/slide-types/html-slide/html-slide-show.component';
import { HTML_SLIDE_REGISTRY_ENTRY } from '@core/slide-types/html-slide/html-slide-show-registry-entry';
import { HtmlSlideEditComponent } from '@core/slide-types/html-slide/html-slide-edit.component';
import { SharedModule } from '@shared/shared.module';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    SlideTypeBaseComponent,
    HtmlSlideShowComponent,
    HtmlSlideEditComponent
  ],
  entryComponents: [
    HtmlSlideShowComponent,
    HtmlSlideEditComponent
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SlideRegistryService
      ]
    };
  }

  constructor(slideRegistryService: SlideRegistryService) {
    slideRegistryService.register(HTML_SLIDE_REGISTRY_ENTRY);
  }
}
