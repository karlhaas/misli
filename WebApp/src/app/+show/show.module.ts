import { NgModule } from '@angular/core';

import { ShowRoutingModule } from './show-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ShowDecksPageComponent } from './pages/show-decks/show-decks-page.component';
import { ShowDeckPageComponent } from './pages/show-deck/show-deck-page.component';
import { ShowSlidePageComponent } from './pages/show-slide-page/show-slide-page.component';

@NgModule({
  imports: [
    SharedModule,
    ShowRoutingModule
  ],
  declarations: [
    ShowDecksPageComponent,
    ShowDeckPageComponent,
    ShowSlidePageComponent
  ]
})
export class ShowModule { }
