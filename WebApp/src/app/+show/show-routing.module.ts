import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresenterComponent } from './presenter/presenter.component';

const routes: Routes = [
  {
    path: '',
    component: PresenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
