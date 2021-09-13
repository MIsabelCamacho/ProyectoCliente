import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService 
{
  private url:string="http://localhost:8080/api/clientes";

  constructor(private http:HttpClient) { }

  //obtener clientes
  listaAllCli():Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(this.url);
  }

  //Crear nuevo cliente
  crearCli(cliente:Cliente):Observable<Cliente>
  {
    return this.http.post<Cliente>(this.url, cliente);
  }

  //listar un cliente
  listaCli(cod:number):Observable<Cliente>
  {
    return this.http.get<Cliente>(this.url+'/'+cod);
  }

  //modificar
  modificarCli(cliente:Cliente):Observable<Cliente>
  {
    return this.http.put<Cliente>(this.url, cliente);
  }

  //eliminar
  eliminaCli(cod:number):Observable<Cliente>
  {
    return this.http.delete<Cliente>(this.url+'/'+cod);
  }

}
