import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserResponseInfo, UsersResponseInfo } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ServerUsersApiService {
    constructor(
        private readonly httpService: HttpClient
    ) {}

    public getAll(): Observable<UserResponseInfo[]> {
        return this.httpService.get<UsersResponseInfo>('https://randomuser.me/api/?inc=name,dob&results=10&nat=us')
            .pipe(
                map((response) => response.results)
            );
    }
}
