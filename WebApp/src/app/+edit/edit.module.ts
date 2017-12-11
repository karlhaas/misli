import { NgModule } from '@angular/core';

import { EditRoutingModule } from './edit-routing.module';
import { SharedModule } from '@shared/shared.module';
import { EditDecksComponent } from './pages/edit-decks/edit-decks.component';
import { EditDeckComponent } from './pages/edit-deck/edit-deck.component';

@NgModule({
  imports: [
    SharedModule,
    EditRoutingModule
  ],
  declarations: [EditDecksComponent, EditDeckComponent]
})
export class EditModule { }
