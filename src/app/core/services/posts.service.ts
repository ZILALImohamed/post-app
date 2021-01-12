import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from 'src/environments/environment';
import {catchError} from 'rxjs/operators';
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

  updatePost(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`${environment.backendUrl}/posts/${post.id}`, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  createPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${environment.backendUrl}/posts`, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }
}
