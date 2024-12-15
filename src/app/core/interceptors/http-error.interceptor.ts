import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-type': 'application/json; charset=UTF-8'
    };

    const request = req.clone({setHeaders: headersConfig});


    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Message: ${error.error.message}`;
          } else {
            errorMessage = `Message: ${error.message}`;
          }
          const navigationExtras: NavigationExtras = {
            replaceUrl: true,
            state: {
              errorMessage
            }
          };
          this.router.navigate(['/posts'], navigationExtras);
          return EMPTY;
        })
      );
  }
}
