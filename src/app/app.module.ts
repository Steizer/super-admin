import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { UsersService } from './modules/user/users.service';
import { AppConfig, CONFIG1, CONFIG2 } from './app.config';
import { LandingComponent } from './common/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AppConfig,
      useValue: CONFIG2
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
