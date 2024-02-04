import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from './layout/login/login.component';
import { AuthGuard } from './authservice/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '',redirectTo: '/admin',pathMatch: 'full'},
            // {path: 'login',component: LoginComponent},
            {
                path: 'admin', component: AppLayoutComponent,
                children: [
                    // ,canActivate: [AuthGuard]
                    { path: '', loadChildren: () => import('./modules/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'inclusive', loadChildren: () => import('./modules/components/inclusive-education/inclusive-education.module').then(m => m.InclusiveEducationModule) },
                    { path: 'rural', loadChildren: () => import('./modules/components/dataEntry/RuralEyeHealth/rural-eye-health.module').then(m => m.RuralEyeHealthModule) },
                ]
            },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
