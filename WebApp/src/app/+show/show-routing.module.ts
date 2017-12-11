import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSlideComponent } from './show-slide/show-slide.component';

const routes: Routes = [
  {
    path: '',
    component: ShowSlideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
