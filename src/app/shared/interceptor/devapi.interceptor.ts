import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('DEBUG', {
      url: req.url,
      method: req.method,
      body: req.body
    });
    const devapiReq = req.clone({
      url: `http://localhost:9080${req.url}`,
      withCredentials: true
    });
    return next.handle(devapiReq);
  }
}