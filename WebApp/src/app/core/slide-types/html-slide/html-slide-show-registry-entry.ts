import { SlideRegistryEntry } from '@core/registry/slide-registry-entry';
import { HtmlSlideShowComponent } from '@core/slide-types/html-slide/html-slide-show.component';
import { HtmlSlideEditComponent } from '@core/slide-types/html-slide/html-slide-edit.component';

export const HTML_SLIDE_REGISTRY_ENTRY = new SlideRegistryEntry('simple-text', HtmlSlideEditComponent, HtmlSlideShowComponent);
