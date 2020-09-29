import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../users.service';
import { AbstractUserService } from '../users.service.abstract';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  currentUser: User = undefined;

  constructor(
    public usersService: AbstractUserService
  ) {

  }

  ngOnInit(): void {
  }

}
