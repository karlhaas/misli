import { NgModule } from '@angular/core';

import { EditRoutingModule } from './edit-routing.module';
import { SharedModule } from '@shared/shared.module';
import { EditDecksComponent } from './pages/edit-decks/edit-decks.component';
import { EditDeckPageComponent } from './pages/edit-deck/edit-deck-page.component';
import { EditDeckComponent } from './compoennts/edit-deck/edit-deck.component';
import { EditSlideComponent } from './compoennts/edit-slide/edit-slide.component';
import { EditSlidePageComponent } from './pages/edit-slide-page/edit-slide-page.component';

@NgModule({
  imports: [
    SharedModule,
    EditRoutingModule
  ],
  declarations: [
    EditDecksComponent,
    EditDeckPageComponent,
    EditDeckComponent,
    EditSlideComponent,
    EditSlidePageComponent
  ]
})
export class EditModule {
}
