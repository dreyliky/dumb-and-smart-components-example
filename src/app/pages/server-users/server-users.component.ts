import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User, ServerUsersService } from '@features/user';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-server-users',
    templateUrl: './server-users.component.html',
    styleUrls: ['./server-users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerUsersComponent implements OnInit {
    public users$: Observable<User[]>;

    constructor(
        private readonly userService: ServerUsersService
    ) {}

    public ngOnInit(): void {
        this.users$ = this.userService.getAll();
    }
}
