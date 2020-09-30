import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { ApiService } from './api.service';
import { AbstractUserService } from './users.service.abstract';
import { AppConfig } from 'src/app/app.config';
import { Usersv2Service } from './usersv2.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormByTemplateComponent } from './forms/user-form-by-template/user-form-by-template.component';
import { UserFormByCodeComponent } from './forms/user-form-by-code/user-form-by-code.component';
import { UserPipe } from './user.pipe';
import { FilterByEmailPipe } from './filter-by-email.pipe';



@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserFormByTemplateComponent,
    UserFormByCodeComponent,
    UserPipe,
    FilterByEmailPipe
  ],
  providers: [
    ApiService,
    {
      provide: AbstractUserService,
      deps: [
        HttpClient,
        AppConfig,
        ApiService,
      ],
      useFactory: (
        http: HttpClient,
        config: AppConfig,
        apiService: ApiService,
      ) => {
        if (config.mode === 1) {
          return new UsersService(apiService, http)
        } else {
          return new Usersv2Service(http)
        }
      }

    },
  ]
  ,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    UsersComponent
  ]
})
export class UserModule { }
