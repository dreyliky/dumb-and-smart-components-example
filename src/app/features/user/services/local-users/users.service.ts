import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces';
import { DeletedServerUsersState } from './deleted-users.state';
import { ServerUsersState } from './users.state';

@Injectable({
    providedIn: 'root'
})
export class LocalUsersService {
    public get data$(): Observable<User[]> {
        return this.usersState.data$;
    }

    constructor(
        private readonly usersState: ServerUsersState,
        private readonly deletedUsersState: DeletedServerUsersState
    ) {}

    public create(user: User): void {
        this.usersState.pushItem(user);
    }

    public delete(user: User): void {
        this.usersState.removeItem(user);
        this.deletedUsersState.pushItem(user);
    }
}
