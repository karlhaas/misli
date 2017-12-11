import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDecksPageComponent } from './pages/show-decks/show-decks-page.component';
import { ShowDeckPageComponent } from './pages/show-deck/show-deck-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShowDecksPageComponent
  },
  {
    path: ':uuid',
    component: ShowDeckPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
