import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,


    FlexLayoutModule
  ],
  exports: [
    AuthComponent,
  ]
})
export class AuthModule { }
