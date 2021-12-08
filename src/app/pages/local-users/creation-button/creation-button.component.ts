import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { LocalUsersService, User } from '@features/user';
import { DynamicWindowConfig, DynamicWindowRef, DynamicWindowService } from 'ngx-os';
import { filter } from 'rxjs/operators';
import { CreationWindowComponent } from '../creation-window';

@Component({
    selector: 'app-user-creation-button',
    templateUrl: './creation-button.component.html',
    styleUrls: ['./creation-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreationButtonComponent implements OnDestroy {
    private windowRef: DynamicWindowRef;

    private readonly windowConfig: DynamicWindowConfig = {
        width: 500,
        height: 300,
        title: 'Create new local user',
        isAllowHide: false
    };

    constructor(
        private readonly usersService: LocalUsersService,
        private readonly windowService: DynamicWindowService
    ) {}

    public ngOnDestroy(): void {
        this.windowRef?.close();
    }

    public onClick(): void {
        this.windowRef = this.windowService.open(
            CreationWindowComponent,
            this.windowConfig
        );

        this.initDynamicWindowClosingObserver();
    }

    private initDynamicWindowClosingObserver(): void {
        this.windowRef.afterClosed$
            .pipe(filter(Boolean))
            .subscribe((user: User) => {
                this.windowRef = null;

                this.usersService.create(user);
            });
    }
}
