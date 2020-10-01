import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../common/landing/landing.component';
import { ErrorComponent } from '../common/error/error.component';
import { MenuComponent } from '../common/menu/menu.component';
import { UsersComponent } from '../modules/user/users/users.component';
import { AuthComponent } from '../modules/auth/auth/auth.component';
import { AuthService } from '../modules/auth/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { UsersResolver } from '../modules/user/resolvers/users.resolver';
import { pid } from 'process';
import { UserDetailsComponent } from '../modules/user/user-details/user-details.component';
import { UserResolver } from '../modules/user/resolvers/user.resolver';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'users',
    canActivate: [
      AuthGuard
    ],
    children: [
      {

        path: ':id',
        resolve: {
          user: UserResolver,
        },
        component: UserDetailsComponent
      }],
    resolve: {
      users: UsersResolver
    },
    component: UsersComponent
  },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
