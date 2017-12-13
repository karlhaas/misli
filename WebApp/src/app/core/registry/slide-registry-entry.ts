import { Type } from '@angular/core';

export class SlideRegistryEntry {
  constructor(public readonly type: string,
              public readonly editComponent: Type<any>,
              public readonly showComponent: Type<any>) {
  }
}
