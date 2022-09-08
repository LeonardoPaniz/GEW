import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { HomeComponent } from './paginas/home/home.component';


const routes: Routes = [

  {path: 'editar/:id', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'listagem', component: ListagemComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }