import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    LoginModule,
    SignInModule,
    HomeModule,
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
