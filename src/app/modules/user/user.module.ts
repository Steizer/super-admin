import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { ApiService } from './api.service';
import { AbstractUserService } from './users.service.abstract';
import { AppConfig } from 'src/app/app.config';
import { Usersv2Service } from './usersv2.service';



@NgModule({
  declarations: [
    UserComponent,
    UsersComponent
  ],
  providers: [
    ApiService,
    {
      provide: AbstractUserService,
      deps: [
        AppConfig,
        ApiService
      ],
      useFactory: (
        config: AppConfig,
        apiService: ApiService
      ) => {
        if (config.mode === 1) {
          return new UsersService(apiService)
        } else {
          return new Usersv2Service()
        }
      }

    },
  ]
  ,
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UserModule { }
