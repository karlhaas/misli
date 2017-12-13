import { Type } from '@angular/core';
import { SlideData } from '@core/model/slide';

export class SlideRegistryEntry {
  constructor(public readonly type: string,
              public readonly editComponent: Type<any>,
              public readonly showComponent: Type<any>,
              public readonly createFunction: () => SlideData) {
  }
}
