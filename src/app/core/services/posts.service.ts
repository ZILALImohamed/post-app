import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from 'src/environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Post} from '../models/post.model';

@Injectable()
export class PostsService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  private handleError(error: any): Observable<never> {
    console.error(error);
    return throwError(error.error);
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.backendUrl}/posts`)
      .pipe(catchError(this.handleError));
  }

  getPostById(postId: number): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.backendUrl}/posts/${postId}`)
      .pipe(catchError(this.handleError));
  }
}
