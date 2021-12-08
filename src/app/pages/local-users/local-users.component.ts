import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-local-users',
    templateUrl: './local-users.component.html',
    styleUrls: ['./local-users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalUsersComponent {}
