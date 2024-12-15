import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {environment} from 'src/environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Post} from '../models/post.model';
import {User} from '../models/user.model';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  private handleError(error: any): Observable<never> {
    console.error(error);
    return EMPTY;
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.backendUrl}/users`)
      .pipe(catchError(this.handleError));
  }
}
