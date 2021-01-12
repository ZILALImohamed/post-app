import {NgModule} from '@angular/core';
import {ListPostsComponent} from './list/list-posts.component';
import {SharedModule} from '../shared/shared.module';
import {PostsRoutingModule} from './posts-routing.module';
import {ListPostsResolver} from './list/list-posts.resolver';
import {EditPostComponent} from './edit/edit-post.component';
import {PostResolver} from './edit/post.resolver';
import {PostsComponent} from './posts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersResolver} from '../users/users.resolver';
import { PostFormComponent } from './form/post-form.component';
import { NewPostComponent } from './new/new-post.component';

@NgModule({
  declarations: [PostsComponent, ListPostsComponent, EditPostComponent, PostFormComponent, NewPostComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule
  ],
  providers: [
    ListPostsResolver,
    PostResolver,
    UsersResolver
  ]
})
export class PostsModule {
  constructor() {
    console.log('PostsModule');
  }
}
