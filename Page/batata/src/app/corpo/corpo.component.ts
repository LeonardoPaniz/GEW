import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { StorageService ,User } from 'src/app/services/storage.service';


@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css'],
  providers: [ StorageService ],
})

export class CorpoComponent implements OnInit {
  cadastro : FormGroup
  submitted = false;
 

  constructor(private fb: FormBuilder, private storageService: StorageService) { 
    this.cadastro = this.fb.group({
      nome:['', Validators.required],  
      email:['', Validators.required],
      senha:['', Validators.required],
      telefone:['', Validators.required],
      cpf:['', Validators.required],
      nivel:['', Validators.required],
      ativo:['', Validators.required]
      });
  }


  ngOnInit(): void {
  }

  get cadastroFormControl(): any { return this.cadastro?.controls;}

post(){
  this.submitted = true;
  if (this.cadastro.valid) {
    alert('Cadastro realizado com sucesso!\n olhe os valores no console.')
    this.storageService.addUsers(this.cadastro.getRawValue()).subscribe();
    console.table(this.cadastro.getRawValue());
  }
  else {
    alert('falha no cadastro, verifique os dados!');
  }
}
}