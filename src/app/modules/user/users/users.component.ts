import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  users: Array<User> | Observable<Array<User>>;
  usersbyResolver: Array<User>;



  constructor(
    public usersService: AbstractUserService,
    public route: ActivatedRoute,
    public router: Router


  ) {

  }

  ngOnInit(): void {
    // (this.usersService.getUsers() as Observable<User[]>).subscribe(val => this.users = val);
    this.usersService.refresh();
    this.usersbyResolver = this.route.snapshot.data['users'];

    // this.users = this.usersService.users;
  }


  public showDetails(user: User) {
    this.router.navigate(['/users', user.id]);

  }

}
