import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';


@Injectable()
export class PostResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    return this.postsService.getPostById(route.params.postId);
  }
}
