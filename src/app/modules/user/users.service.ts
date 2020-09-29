import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ApiService } from './api.service';
import { AbstractUserService } from './users.service.abstract';

@Injectable()
export class UsersService extends AbstractUserService {
  private users = new Array<User>();

  constructor(private api: ApiService) {
    super();
    this.users.push(new User(0, 'john@ib.fr'));
    this.users.push(new User(1, 'luke@ib.fr'));
    this.users.push(new User(2, 'erza@ib.fr'));
  }

  getUsers(): Array<User> {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
