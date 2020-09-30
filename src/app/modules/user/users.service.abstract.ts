import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

export abstract class AbstractUserService {
    users: Observable<User[]>;
    abstract getUsers(): Array<User> | Observable<Array<User>>;
    abstract addUser(user: User);
    abstract refresh();
}