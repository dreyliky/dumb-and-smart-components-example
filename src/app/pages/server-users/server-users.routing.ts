import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerUsersComponent } from './server-users.component';

const routes: Routes = [
    {
        path: '',
        component: ServerUsersComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ServerUsersRoutingModule {}
