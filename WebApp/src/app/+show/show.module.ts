import { NgModule } from '@angular/core';

import { ShowRoutingModule } from './show-routing.module';
import { PresenterComponent } from './presenter/presenter.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ShowRoutingModule
  ],
  declarations: [PresenterComponent]
})
export class ShowModule { }
