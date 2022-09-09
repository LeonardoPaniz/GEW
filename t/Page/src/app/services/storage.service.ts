import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url)
  }

  addUsers(user: User) {
    return this.http.post(this.url, user)
  }

  editUsers(id: string, user: User) {
    return this.http.put(this.url+'/'+id,user)
  }
  
  getUsersById(id: string) {
    return this.http.get(this.url+'/'+id)
  }
}

export interface User{
  id?: string;
  nome?: string;
  email?: string;
  senha?: string;
  cpf?: string;
  telefone?: string;
  nivel?: string;
  ativo?: string;
}

