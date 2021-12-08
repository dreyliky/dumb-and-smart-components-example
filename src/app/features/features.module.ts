import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import {
    UsersListComponent,
    UserAvatarComponent,
    UserCreationFormComponent
} from './user';

@NgModule({
    declarations: [
        UserAvatarComponent,
        UsersListComponent,
        UserCreationFormComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        UserAvatarComponent,
        UsersListComponent,
        UserCreationFormComponent
    ]
})
export class FeaturesModule {}
