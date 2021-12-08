import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, toArray } from 'rxjs/operators';
import { UserAdapter } from '../../adapters';
import { User } from '../../interfaces';
import { ServerUsersApiService } from './users-api.service';

@Injectable({
    providedIn: 'root'
})
export class ServerUsersService {
    constructor(
        private readonly usersApiService: ServerUsersApiService,
        private readonly userAdapter: UserAdapter
    ) {}

    public getAll(): Observable<User[]> {
        return this.usersApiService.getAll()
            .pipe(
                mergeMap((usersResponseInfo) => usersResponseInfo),
                map((userResponseInfo) => this.userAdapter.adaptFromUserResponseInfo(userResponseInfo)),
                toArray()
            );
    }
}
