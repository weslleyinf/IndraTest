import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      agencia: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),

      conta: new FormControl('', [
        Validators.required,
        Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formData: any){
    if (this.loginForm.valid){
      return alert('Conta acessada com sucesso!');
    }

    alert('Formulario incorreto!');
  }

}
