import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DeletedLocalUsersService, User } from '@features/user';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-deleted-users-list',
    templateUrl: './deleted-list.component.html',
    styleUrls: ['./deleted-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletedListComponent implements OnInit {
    public users$: Observable<User[]>;

    constructor(
        private readonly usersService: DeletedLocalUsersService
    ) {}

    public ngOnInit(): void {
        this.users$ = this.usersService.data$;
    }

    public onUserRestoreButtonClick(user: User): void {
        this.usersService.restore(user);
    }

    public onUserDropButtonClick(user: User): void {
        this.usersService.drop(user);
    }
}
