import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { UsersService } from './modules/user/users.service';
import { AppConfig, CONFIG1, CONFIG2 } from './app.config';
import { LandingComponent } from './common/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './common/error/error.component';
import { MenuComponent } from './common/menu/menu.component';
import { RoutingModule } from './routing/routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ErrorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,

    UserModule,
    AuthModule,
    BrowserAnimationsModule
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
