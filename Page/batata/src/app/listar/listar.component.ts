import { Component, OnInit } from '@angular/core';
import { StorageService, User } from 'src/app/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {
  lista: User[]

  dados: string[] = ['id', 'nome', 'email', 'senha', 'cpf', 'telefone', 'nivel', 'ativo'];

  constructor(private storageService: StorageService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.lista = []
  }

  ngOnInit(): void {
    this.listar();

    // this.editar("");
  }
  
  listar() {
    this.storageService.getUsers().subscribe(
      (res: any) => {
        this.lista = <any>res;
      },
      (err: any) => console.log(err))}

      
  // editar(id: any) {
  //     this.storageService.getUsersById(id).subscribe(
  //       (res: any) => {
  //         console.log('editando o id: ', id)},
  //       (err: any) => console.log(err)
  //     )
  //   }
  }

