import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log({
      url: req.url,
      urlWithParams: req.urlWithParams,
      body: req.body
    });
    const mockReq = req.clone({
      url: `http://localhost:9080${req.url}`,
      method: req.method,
      params: new HttpParams()
    });
    return next.handle(mockReq);
  }
}