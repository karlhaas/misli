import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectDeckComponent } from './components/select-deck/select-deck.component';
import { ShowSlideComponent } from '@shared/components/show-slide/show-slide.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    SelectDeckComponent,
    ShowSlideComponent,
  ],
  declarations: [
    SelectDeckComponent,
    ShowSlideComponent,
  ]
})
export class SharedModule {
}
