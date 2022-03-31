import { Injectable }     from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PromiseCache } from 'app/shared/promiseCache.decorator';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { User } from 'app/shared/models/user.model';

@Injectable()
export class LoginService {
  constructor (
    private http: HttpClient,
    private router: Router,
    private promiseCacheService: PromiseCacheService
  ) {
  }

  login (user: string, pass: string): Promise<boolean> {
    // Remove cache.
    this.promiseCacheService.remove('isAuthed');
    // Login details
    let body = {
        user: user,
        pass: pass
    };
    return this.http.post<boolean>('/api/admin', body).toPromise();
  }

  @PromiseCache('isAuthed')
  isAuthed (redirect:boolean = true): Promise<boolean> {
    return this.http.get<boolean>('/api/admin')
        .toPromise()
        .then(isAuthed => {
          if (redirect && this.router.url.startsWith('/admin') != null && !isAuthed) {
            this.router.navigateByUrl('/admin');
          }
          return isAuthed;
        });
  }

  async getAdmin(): Promise<User> {
    let res = await this.http.get<User>('/api/admin/current')
      .toPromise();
    return new User().from(res);
  }

  logout (): Promise<boolean> {
    return this.http.delete('/api/admin')
        .toPromise()
        .then(res => {
          // Remove cache.
          this.promiseCacheService.remove('isAuthed');
          // Navigate
          this.router.navigateByUrl('/admin');
          return null;
        });
  }
}
