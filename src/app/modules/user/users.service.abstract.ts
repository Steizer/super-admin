import { User } from 'src/app/models/user.model';

export abstract class AbstractUserService {
    abstract getUsers(): Array<User>;
    abstract addUser(user: User);
}