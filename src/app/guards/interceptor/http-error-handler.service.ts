import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService implements HttpInterceptor {

  constructor() {
    console.log('error interceptor called');
  }

  /**
   * Over ride intercept method
   * @param req 
   * @param next 
   * @returns 
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            return this.handlerFor401(req, next);

          case 403:
            return this.handlerFor403(req, next, error);

          case 404:
            return this.handlerFor404(req, next, error);
          
        }
        // notify user here
        return throwError(error);
      })
    )
  }

  /**
   * Handle 401 error
   * @param req 
   * @param next 
   * @returns 
   */
  handlerFor401(req: HttpRequest<any>, next: HttpHandler) {
    return of({})
  }

  /**
   * Handle 403 error
   * @param req 
   * @param next 
   * @param error 
   * @returns 
   */
  handlerFor403(req: HttpRequest<any>, next: HttpHandler, error: HttpErrorResponse) {
    return of({})
  }

  /**
   * Handle 404 error
   * @param req 
   * @param next 
   * @param error 
   * @returns 
   */
  handlerFor404(req: HttpRequest<any>, next: HttpHandler, error: HttpErrorResponse) {
    console.log('404');
    return of({})
  }
}
