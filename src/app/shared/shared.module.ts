import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
