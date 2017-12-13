import { SlideRegistryEntry } from '@core/registry/slide-registry-entry';
import { HtmlSlideEditComponent } from './html-slide-edit.component';
import { HtmlSlideShowComponent } from './html-slide-show.component';

export const HTML_SLIDE_REGISTRY_ENTRY = new SlideRegistryEntry(
  'simple-text',
  HtmlSlideEditComponent,
  HtmlSlideShowComponent,
  () => ''
);
