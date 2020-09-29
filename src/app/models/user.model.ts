import { stringify } from 'querystring';

export class User {
    constructor(
        public id: number,
        public email: string
    ) {
    }
    organisation: string;
    password: string;
    isAdmin: boolean;

    toggleAdmin() {
        this.isAdmin = !this.isAdmin;
    }
}
