import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum } from '@core';
import { MainLayoutComponent } from '@layouts';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: AppRouteEnum.ServerUsers,
                loadChildren: () => import('./pages/server-users/server-users.module').then((m) => m.ServerUsersModule)
            },
            {
                path: AppRouteEnum.LocalUsers,
                loadChildren: () => import('./pages/local-users/local-users.module').then((m) => m.LocalUsersModule)
            },
            {
                path: '**',
                redirectTo: AppRouteEnum.ServerUsers,
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
