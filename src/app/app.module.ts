import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './clientes/form-cliente.component';


const routes:Routes=[
  { path:'', redirectTo:'/clientes', pathMatch:'full'},
  { path:'clientes', component:ClientesComponent},
  { path:'clientes/form', component:FormClienteComponent},
  { path:'clientes/form/:codigo', component:FormClienteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
