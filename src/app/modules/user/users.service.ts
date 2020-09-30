import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ApiService } from './api.service';
import { AbstractUserService } from './users.service.abstract';

@Injectable()
export class UsersService extends AbstractUserService {

  // private users = new Array<User>();

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) {
    super();
    console.log('UsersService');

  }

  getUsers(): Array<User> {
    return [];
  }

  addUser(user: User) {
    // this.users.push(user);
  }

  refresh() {
    throw new Error('Method not implemented.');
  }
}
