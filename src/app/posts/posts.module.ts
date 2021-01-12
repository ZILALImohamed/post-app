import {NgModule} from '@angular/core';
import {ListPostsComponent} from './list/list-posts.component';
import {SharedModule} from '../shared/shared.module';
import {PostsRoutingModule} from './posts-routing.module';
import {ListPostsResolver} from './list/list-posts.resolver';
import {PostsService} from './posts.service';
import {EditPostComponent} from './edit/edit-post.component';
import {PostResolver} from './edit/post.resolver';
import {PostsComponent} from './posts.component';

@NgModule({
  declarations: [PostsComponent, ListPostsComponent, EditPostComponent],
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  providers: [
    ListPostsResolver,
    PostResolver,
    PostsService
  ]
})
export class PostsModule {
  constructor() {
    console.log('PostsModule');
  }
}
