import { NgModule } from '@angular/core';
import { SlideRegistryService } from '@core/registry/slide-registry.service';
import { SlideRegistryEntry } from '@core/registry/slide-registry-entry';
import { SharedModule } from '@shared/shared.module';
import { IframeSlideComponent } from './iframe-slide.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    IframeSlideComponent
  ],
  entryComponents: [
    IframeSlideComponent
  ],
  exports: [
  ]
})
export class ExtensionModule {
  constructor(slideRegistryService: SlideRegistryService) {
    slideRegistryService.register(
      new SlideRegistryEntry('iframe', IframeSlideComponent, IframeSlideComponent, () => ({src: 'https://orf.at'}))
    );
  }
}
