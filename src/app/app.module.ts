import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { UsersService } from './modules/user/users.service';
import { AppConfig, CONFIG1, CONFIG2 } from './app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule
  ],
  providers: [
    {
      provide: AppConfig,
      useValue: CONFIG1
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
