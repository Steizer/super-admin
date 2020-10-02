import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../users.service';
import { AbstractUserService } from '../users.service.abstract';
import { AddUser, GetUsers } from './user.action';

export class UsersStateModel {
    users: User[];
    isLoaded: boolean;
}

@State<UsersStateModel>({
    name: 'users',
    defaults: {
        users: [],
        isLoaded: false
    }
})
@Injectable()
export class UserState {
    constructor(
        private useService: AbstractUserService
    ) {
    }

    @Selector()
    static getUsers(state: UsersStateModel) {
        return state.users;
    }

    @Selector()
    static getIsLoaded(state: UsersStateModel) {
        return state.isLoaded;
    }

    @Action(AddUser)
    addUser({ getState, patchState }: StateContext<UsersStateModel>, { payload }: AddUser) {
        return this
            .useService
            .addUser(payload)
            .pipe(
                tap((result) => {
                    // const state = getState();
                    patchState({
                        users: result
                    })
                })
            )
    }

    @Action(GetUsers)
    getAllUsers({ getState, patchState }: StateContext<UsersStateModel>) {
        return this
            .useService
            .getUsers()
            .pipe(
                tap(users => {
                    console.log(users);

                    patchState({
                        users: users,
                        isLoaded: true
                    })
                })
            )
    }


}