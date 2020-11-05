import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
})
export class SignInModule { }
