import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditDecksComponent } from './pages/edit-decks/edit-decks.component';
import { EditDeckPageComponent } from './pages/edit-deck/edit-deck-page.component';
import { EditSlidePageComponent } from './pages/edit-slide-page/edit-slide-page.component';

const routes: Routes = [
  {
    path: '',
    component: EditDecksComponent
  },
  {
    path: ':uuid',
    component: EditDeckPageComponent,
    children: [{
      path: ':slideUuid',
      component: EditSlidePageComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {
}
