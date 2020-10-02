import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ApiService } from './api.service';
import { AbstractUserService } from './users.service.abstract';

@Injectable()
export class UsersService extends AbstractUserService {

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) {
    super();
    console.log('UsersService');
    this.users.next([
      new User(0, 'john@ib.fr'),
      new User(1, 'luke@ib.fr'),
      new User(2, 'erza@ib.fr')
    ]);
  }

  getUsers(): Observable<Array<User>> {
    return from([]);
  }

  refresh() {
    throw new Error('Method not implemented.');
  }

  addUser(user: User): Observable<Array<User>> {
    // this.users.push(user);
    return;
  }
}
