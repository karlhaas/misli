import { SlideRegistryEntry } from '@core/registry/slide-registry-entry';
import { ImgSlideEditComponent } from './img-slide-edit/img-slide-edit.component';
import { ImgSlideShowComponent } from './img-slide-show/img-slide-show.component';

export const IMG_SLIDE_REGISTRY_ENTRY = new SlideRegistryEntry(
  'image',
  ImgSlideEditComponent,
  ImgSlideShowComponent,
  () => ({
    src: '',
    width: '100%'
  }));
