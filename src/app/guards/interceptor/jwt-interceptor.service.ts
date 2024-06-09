import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {


  constructor(private localStorageService: LocalStorageService) { 
    console.log('error called');
  }

  /**
   * add token in request url
   * @param req 
   * @param token 
   * @returns request with token
   */
  addToken(req: HttpRequest<any>, token: string) {
    return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
  }

  /**
   * Over ride intercept method
   * @param req 
   * @param next 
   * @returns request url with token
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getToken();
    req = this.addToken(req, token);
    return next.handle(req);
  }
}
