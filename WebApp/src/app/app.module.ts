import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { coreMetaReducers, coreReducers } from '@core/state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './+not-found/not-found.component';
import { META_REDUCERS, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

export function getInitialState() {
  return {...JSON.parse(localStorage.getItem('MY_DATA'))};
}

export function getMetaReducers() {
  return coreMetaReducers;
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    // StoreRouterConnectingModule,
    StoreModule.forRoot(coreReducers, {initialState: getInitialState}),
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [{
      provide: META_REDUCERS,
      useFactory: getMetaReducers
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
