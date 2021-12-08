import { Injectable } from '@angular/core';
import { User, UserResponseInfo } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class UserAdapter {
    public adaptFromUserResponseInfo(data: UserResponseInfo): User {
        return {
            id: '',
            name: `${data.name.first} ${data.name.last}`,
            age: data.dob.age
        };
    }
}
