import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap, toArray } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from './users.service.abstract';

@Injectable({
  providedIn: 'root'
})
export class Usersv2Service extends AbstractUserService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getUsers(): User[] | Observable<Array<User>> {
    return this
      .http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        switchMap((data: any) => data),
        map((olduser: any) => {
          const u = new User(olduser.id, olduser.email);
          u.organisation = olduser.company.name;
          return u;
        }),
        tap(val => console.log(val)),
        toArray()
      )
  }

  addUser(user: User) {
    console.log('add ' + user.email);

  }


}
