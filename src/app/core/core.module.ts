import {NgModule} from '@angular/core';
import {PostsService} from './services/posts.service';
import {UsersService} from './services/users.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';

@NgModule({
  declarations: [],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    PostsService,
    UsersService
  ]
})
export class CoreModule {
}
