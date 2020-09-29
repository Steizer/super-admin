import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

export abstract class AbstractUserService {
    abstract getUsers(): Array<User> | Observable<Array<User>>;
    abstract addUser(user: User);
}