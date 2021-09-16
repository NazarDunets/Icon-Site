import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from 'app/shared/models/user.model';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { PromiseCache, CacheParam } from 'app/shared/promiseCache.decorator';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private promiseCacheService: PromiseCacheService
  ) { }

  @PromiseCache()
  async getUser( @CacheParam userId: string): Promise<User> {
    let user = await this.http.get<User>('/api/user/' + userId)
      .map(i => new User().from(i))
      .toPromise();
    return user;
  }

  @PromiseCache()
  async getUsers(): Promise<User[]> {
    let res = await this.http.get<User[]>('/api/user')
      .toPromise();
    return res.map(i => new User().from(i));
  }

  async getAdminProfile(): Promise<User> {
    return await this.http.get<User>('/api/admin/profile')
      .map(i => new User().from(i))
      .toPromise();
  }

  async updateAdminProfile(user: User): Promise<User> {
    return await this.http.post<User>('/api/admin/profile', user)
      .map(i => new User().from(i))
      .toPromise();
  }

  async updateAdminProfileAvatar(data: string): Promise<User> {
    return await this.http.post<User>('/api/admin/profile/avatar', {
        base64: data.replace('data:image/png;base64,', '')
      })
      .map(i => new User().from(i))
      .toPromise();
  }

  async getAdminUsers(packageId: string): Promise<User[]> {
    return await this.http.get<User[]>('/api/admin/user', {
        params: {
          'packageId': packageId
        }
      })
      .map(users => {
        const userMap = users
          .map(i => new User().from(i))
          .sort((a, b) => {
            const githubA = a.github.toUpperCase();
            const githubB = b.github.toUpperCase();
            if (githubA < githubB) {
              return -1;
            }
            if (githubA > githubB) {
              return 1;
            }
            return 0;
          });
        return userMap;
      })
      .toPromise();
  }

}