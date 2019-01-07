import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
    {
        path: 'members',
        component: MembersComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
