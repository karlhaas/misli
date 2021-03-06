import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './+not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotFoundComponent
  },
  {
    path: 'show',
    loadChildren: 'app/+show/show.module#ShowModule'
  },
  {
    path: 'edit',
    loadChildren: 'app/+edit/edit.module#EditModule'
  },
  {
    path: '404',
    pathMatch: 'full',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
