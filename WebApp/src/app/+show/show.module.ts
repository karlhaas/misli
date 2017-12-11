import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowSlideComponent } from './show-slide/show-slide.component';

@NgModule({
  imports: [
    CommonModule,
    ShowRoutingModule
  ],
  declarations: [ShowSlideComponent]
})
export class ShowModule { }
