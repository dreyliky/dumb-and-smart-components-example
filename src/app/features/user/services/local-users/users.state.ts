import { Injectable } from '@angular/core';
import { ArrayState } from 'ngx-base-state';
import { User } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ServerUsersState extends ArrayState<User> {
    constructor() {
        super([]);
    }

    public getItemId(user: User): string {
        return user.id;
    }
}
