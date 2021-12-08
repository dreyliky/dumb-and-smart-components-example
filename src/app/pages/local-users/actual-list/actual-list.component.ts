import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocalUsersService, User } from '@features/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-actual-users-list',
    templateUrl: './actual-list.component.html',
    styleUrls: ['./actual-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActualListComponent implements OnInit {
    public users$: Observable<User[]>;

    constructor(
        private readonly usersService: LocalUsersService
    ) {}

    public ngOnInit(): void {
        this.users$ = this.usersService.data$;
    }

    public onUserDeleteButtonClick(user: User): void {
        this.usersService.delete(user);
    }
}
