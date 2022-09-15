import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { HomeComponent } from './paginas/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoadingComponent } from './loading/loading.component';
import { ConfirmeComponent } from './confirme/confirme.component';


const routes: Routes = [

  {path: 'editar/:id', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'confirme', component: ConfirmeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }