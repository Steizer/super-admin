import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AddUser, GetUsers } from '../store/user.action';
import { UserState } from '../store/user.state';
import { UsersService } from '../users.service';
import { AbstractUserService } from '../users.service.abstract';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  currentUser: User = undefined;
  usersbyResolver: Array<User>;

  @Select(UserState.getUsers)
  users$: Observable<User[]>;

  users: Array<User> | Observable<Array<User>>;


  constructor(
    public usersService: AbstractUserService,
    public route: ActivatedRoute,
    public router: Router,
    private store: Store


  ) {

  }

  ngOnInit(): void {
    // (this.usersService.getUsers() as Observable<User[]>).subscribe(val => this.users = val);
    this.usersService.refresh();
    this.usersbyResolver = this.route.snapshot.data['users'];
    this.store.dispatch(new GetUsers());
    // this.users = this.usersService.users;
  }


  public showDetails(user: User) {
    this.router.navigate(['/users', user.id]);

  }

  public addUser(user: User) {
    this.store.dispatch(new AddUser(user));
  }



}
