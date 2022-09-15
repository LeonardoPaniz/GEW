import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService, User } from 'src/app/services/storage.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmeComponent } from '../confirme/confirme.component';
import { LoadingComponent } from '../loading/loading.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css'],
  providers: [StorageService],
})

export class CorpoComponent implements OnInit {
  cadastro!: FormGroup;
  submitted = false;

  hide = true
  disableSelect = new FormControl(false);

  private routeSub: Subscription;
  id: string;

  constructor(private fb: FormBuilder, private storageService: StorageService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    this.cadastroDados();

    this.routeSub = Subscription.EMPTY;
    this.id = "";

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID DO EDIT----->', this.id);
      this.getById(params['id'])
    });
  };

  ngOnInit(): void { };


  get cadastroFormControl(): any { return this.cadastro?.controls; }

  cadastroDados(res?: any) {
    this.cadastro = this.fb.group({
      nome: [!this.id ? '' : res.nome, Validators.required],
      email: [!this.id ? '' : res.email, Validators.required],
      senha: [!this.id ? '' : res.senha, Validators.required],
      telefone: [!this.id ? '' : res.telefone, Validators.required],
      cpf: [!this.id ? '' : res.cpf, Validators.required],
      nivel: [!this.id ? '' : res.nivel, Validators.required],
      ativo: [!this.id ? '' : res.ativo, Validators.required]
    });
  }

  getById(id: string) {
    const dialogRef = this.dialog.open(LoadingComponent)
    this.storageService.getUsersById(id).subscribe(res => {
      if (!res) {
        this.router.navigateByUrl('/**')
      } else {
        this.cadastroDados(res)
      }
      setTimeout(()=>{ 
        dialogRef.close();  
      }, 1000) }) 
    ;
  }

  sendForm() {
    if (!this.cadastro.valid) {
      this.disableSelect = new FormControl(false)
    }
  }


  submitForm() {
    if (this.cadastro.valid) {
      const dialogRef = this.dialog.open(LoadingComponent)
      if (!this.id) {   
        this.storageService.addUsers(this.cadastro.value).subscribe(()=>{   
          setTimeout(()=>{ 
            dialogRef.close();  
          }, 600)   
          
        });
      }
      else {
        this.storageService.editUsers(this.id, this.cadastro.value).subscribe(()=>{        
          setTimeout(()=>{ 
            dialogRef.close();  
          }, 1500)   
        });
      }
    }
    else {
      alert("𝙁𝙖𝙡𝙝𝙖 𝙣𝙤 𝙘𝙖𝙙𝙖𝙨𝙩𝙧𝙤, 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙤𝙨 𝙙𝙖𝙙𝙤𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙙𝙤𝙨!");
    }
  }


}