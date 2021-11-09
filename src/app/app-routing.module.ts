import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard }  from './Auth/canActivateAuthGuard';
import { LoginComponent }   from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MainPostComponent } from './main-post/main-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'dashboard', component: MainPostComponent}
  ] },
  {path: 'reset', component: ChangePasswordComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
