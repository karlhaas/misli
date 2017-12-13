import { NgModule } from '@angular/core';

import { EditRoutingModule } from './edit-routing.module';
import { SharedModule } from '@shared/shared.module';
import { EditDecksComponent } from './pages/edit-decks/edit-decks.component';
import { EditDeckPageComponent } from './pages/edit-deck/edit-deck-page.component';
import { EditDeckComponent } from './compoennts/edit-deck/edit-deck.component';
import { EditSlideComponent } from './compoennts/edit-slide/edit-slide.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    EditRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    EditDecksComponent,
    EditDeckPageComponent,
    EditDeckComponent,
    EditSlideComponent,
  ]
})
export class EditModule {
}
