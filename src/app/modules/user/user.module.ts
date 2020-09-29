import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    UserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UserModule { }
