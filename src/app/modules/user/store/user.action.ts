import { User } from 'src/app/models/user.model';

export class AddUser {
    static readonly type = '[User] add';
    constructor(public payload: User) {
    }
}

export class GetUsers {
    static readonly type = '[Users] get';
}

export class DeleteUser {

}

