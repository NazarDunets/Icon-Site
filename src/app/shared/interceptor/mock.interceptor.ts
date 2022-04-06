import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isMock = window.location.href.match(/localhost/) !== null
      && req.url.match(/^\/api/) != null;
    if (isMock) {
      console.log({
        url: req.url,
        urlWithParams: req.urlWithParams,
        body: req.body
      });
      const method = req.method.toLowerCase();
      const mockReq = req.clone({
        url: req.url + `/mock.${method}.json`,
        method: 'GET',
        params: new HttpParams()
      });
      return next.handle(mockReq);
    }
    return next.handle(req);
  }
}