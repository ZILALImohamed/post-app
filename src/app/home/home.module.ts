import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor() {
    console.log('HomeModule');
  }
}
