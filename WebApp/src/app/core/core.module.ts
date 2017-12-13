import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideRegistryService } from '@core/registry/slide-registry.service';
import { SharedModule } from '@shared/shared.module';
import { MatInputModule } from '@angular/material';
import { SlideTypeBaseComponent } from '@core/registry/slide-type-base.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    SlideTypeBaseComponent
  ],
  entryComponents: [
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
}
