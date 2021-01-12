import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPostsComponent} from './list/list-posts.component';
import {ListPostsResolver} from './list/list-posts.resolver';
import {EditPostComponent} from './edit/edit-post.component';
import {PostResolver} from './edit/post.resolver';
import {UsersResolver} from '../users/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListPostsComponent,
    resolve: {
      posts: ListPostsResolver
    }
  }, {
    path: 'edit/:postId',
    component: EditPostComponent,
    resolve: {
      post: PostResolver,
      users: UsersResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
  constructor() {
    console.log('PostsRoutingModule');
  }
}
