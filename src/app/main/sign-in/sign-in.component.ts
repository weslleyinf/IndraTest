import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  createAcountForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.createAcountForm = this.formBuilder.group({
      nome: new FormControl('', [ Validators.required]),
      cpf: new FormControl('', [ Validators.required]),
      celular: new FormControl('', [ Validators.required]),
      email: new FormControl('', [ Validators.required]),
      data: new FormControl('', [ Validators.required]),
      senha: new FormControl('', [ Validators.required]),
      confirme: new FormControl('', [ Validators.required]),
      termos: new FormControl('', [ Validators.required]),
      notificacoes: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.createAcountForm.invalid){
      console.log('form erros: ', this.createAcountForm.errors);

      return alert('Formulario incorreto!');
    }

    alert('Conta criada com sucesso!');

    this.router.navigate(['']);
  }
}
