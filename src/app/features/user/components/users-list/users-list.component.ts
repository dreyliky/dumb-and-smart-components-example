import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { User } from '../../interfaces';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
    @Input()
    public users: User[];

    @Input()
    public actionButtons: TemplateRef<unknown>;
}
