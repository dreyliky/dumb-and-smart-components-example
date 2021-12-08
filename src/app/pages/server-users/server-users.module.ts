import { NgModule } from '@angular/core';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';
import { ServerUsersComponent } from './server-users.component';
import { ServerUsersRoutingModule } from './server-users.routing';

@NgModule({
    declarations: [
        ServerUsersComponent
    ],
    imports: [
        SharedModule,
        FeaturesModule,
        ServerUsersRoutingModule
    ]
})
export class ServerUsersModule {}
