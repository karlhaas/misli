import { NgModule } from '@angular/core';

import { ShowRoutingModule } from './show-routing.module';
import { ShowSlideComponent } from './show-slide/show-slide.component';
import { PresenterComponent } from './presenter/presenter.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ShowRoutingModule
  ],
  declarations: [ShowSlideComponent, PresenterComponent]
})
export class ShowModule { }
