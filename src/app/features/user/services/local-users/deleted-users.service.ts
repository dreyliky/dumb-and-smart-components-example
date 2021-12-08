import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces';
import { DeletedServerUsersState } from './deleted-users.state';
import { ServerUsersState } from './users.state';

@Injectable({
    providedIn: 'root'
})
export class DeletedLocalUsersService {
    public get data$(): Observable<User[]> {
        return this.deletedUsersState.data$;
    }

    constructor(
        private readonly usersState: ServerUsersState,
        private readonly deletedUsersState: DeletedServerUsersState
    ) {}

    public restore(user: User): void {
        this.deletedUsersState.removeItem(user);
        this.usersState.pushItem(user);
    }

    public drop(user: User): void {
        this.deletedUsersState.removeItem(user);
    }
}
