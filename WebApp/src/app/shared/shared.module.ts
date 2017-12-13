import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectDeckComponent } from './components/select-deck/select-deck.component';
import { SlideHostDirective } from '@shared/directives/slide-host.directive';
import { ShowSlideRegistryComponent } from '@shared/components/show-slide-registry/show-slide-registry.component';
import { EditSlideRegistryComponent } from '@shared/components/edit-slide-registry/edit-slide-registry.component';
import { AddSlideButtonComponent } from './components/add-slide-button/add-slide-button.component';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [
    SelectDeckComponent,
    ShowSlideRegistryComponent,
    EditSlideRegistryComponent,
    SlideHostDirective,
    AddSlideButtonComponent
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    SelectDeckComponent,
    ShowSlideRegistryComponent,
    EditSlideRegistryComponent,
    SlideHostDirective,
    AddSlideButtonComponent
  ]
})
export class SharedModule {
}
