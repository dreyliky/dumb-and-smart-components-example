import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppRouteEnum } from '@core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    public get serverUsersPath(): string {
        return `/${AppRouteEnum.ServerUsers}`;
    }

    public get localUsersPath(): string {
        return `/${AppRouteEnum.LocalUsers}`;
    }
}
