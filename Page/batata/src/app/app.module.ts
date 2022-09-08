import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LogoComponent } from './logo/logo.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RodapeComponent } from './rodape/rodape.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { EditarComponent } from './paginas/esquecer/editar.component';
import { ListarComponent } from './listar/listar.component';
import { BtnComponent } from './inutil/btn.component';
import { HomeComponent } from './paginas/home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CorpoComponent,
    RodapeComponent,
    ListagemComponent,
    EditarComponent,
    ListarComponent,
    BtnComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
