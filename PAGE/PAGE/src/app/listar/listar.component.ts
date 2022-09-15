import { Component, OnInit } from '@angular/core';
import { StorageService, User } from 'src/app/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcluirComponent } from '../excluir/excluir.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingComponent } from '../loading/loading.component';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [StorageService],
})


export class ListarComponent implements OnInit {
  lista: User[] = [];

  atualizar: User[] = [];

  dados: string[] = ['id', 'nome', 'email', 'senha', 'cpf', 'telefone', 'nivel', 'ativo', 'delete'];

  constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {
    this.lista = [];

  }

  ngOnInit(): void {
    this.listar();
  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ExcluirComponent, {
      data: ['delete', id]
    })

    console.log("click delete");

  };

  listar() {
    const dialogRef = this.dialog.open(LoadingComponent);
    this.storageService.getUsers().subscribe(
      (res: any) => {
        this.lista = <any>res;
        this.atualizar = this.lista;
        if (res) {
          setTimeout(() => {
            dialogRef.close();
          }, 700)
        }
      },
      (err: any) => console.log(err))
  }
}