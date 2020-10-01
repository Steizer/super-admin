import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../users.service.abstract';

@Injectable({ providedIn: 'root' })

export class UsersResolver implements Resolve<User[]> {

    constructor(private userService: AbstractUserService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> | Promise<User[]> | User[] {
        return this.userService.getUsers();
    }

}