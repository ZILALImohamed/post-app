import { NgModule } from '@angular/core';
import {PostsService} from './services/posts.service';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [],
  providers: [
    PostsService,
    UsersService
  ]
})
export class CoreModule { }
