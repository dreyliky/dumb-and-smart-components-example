import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';
import { LocalUsersComponent } from './local-users.component';
import { LocalUsersRoutingModule } from './local-users.routing';
import { ActualListComponent } from './actual-list';
import { DeletedListComponent } from './deleted-list';
import { CreationWindowComponent } from './creation-window';
import { CreationButtonComponent } from './creation-button';

@NgModule({
    declarations: [
        LocalUsersComponent,
        ActualListComponent,
        DeletedListComponent,
        CreationWindowComponent,
        CreationButtonComponent
    ],
    imports: [
        SharedModule,
        FeaturesModule,
        LocalUsersRoutingModule
    ]
})
export class LocalUsersModule {}
