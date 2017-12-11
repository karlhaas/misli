import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditDecksComponent } from './pages/edit-decks/edit-decks.component';
import { EditDeckComponent } from './pages/edit-deck/edit-deck.component';

const routes: Routes = [
  {
    path: '',
    component: EditDecksComponent
  },
  {
    path: ':uuid',
    component: EditDeckComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {
}
