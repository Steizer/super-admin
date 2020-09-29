import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = new Array<User>();
  currentUser: User;

  constructor() {
    this.users.push(new User(0, 'john@ib.fr'));
    this.users.push(new User(1, 'luke@ib.fr'));
    this.users.push(new User(1, 'erza@ib.fr'));
  }

  ngOnInit(): void {
  }

}
