import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit 
{
  titulo:string= "Lista de Clientes";

  clientes: Cliente[] = [];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listaAllCli().subscribe(
      c =>this.clientes=c
    );
  }

  Eliminar(cliente:Cliente):void
  {
    this.clienteService.eliminaCli(cliente.codigo).subscribe(
      res=>this.clienteService.listaAllCli().subscribe(
        respuesta=>this.clientes=respuesta
      )
    )
  }


}
