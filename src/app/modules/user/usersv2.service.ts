import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from './users.service.abstract';

@Injectable({
  providedIn: 'root'
})
export class Usersv2Service extends AbstractUserService {

  constructor() {
    super();
  }

  getUsers(): User[] {
    return [];
  }
  addUser(user: User) {
    console.log('add ' + user.email);

  }


}
