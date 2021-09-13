import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit 
{
  cliente:Cliente = new Cliente();
  titulo:string = "Registro de Cliente";

  constructor(private clienteService:ClienteService, private router:Router, private activarRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.Cargar();
  }

  Guardar():void{
    console.log(this.cliente);
    this.clienteService.crearCli(this.cliente).subscribe(
      res=>this.router.navigate(['/clientes'])
    )
  }

  Cargar():void{
    this.activarRouter.params.subscribe(
      c=>{
        let cod= c['codigo'];
        if(cod)
        {
          this.clienteService.listaCli(cod).subscribe(
            cli=>this.cliente=cli
          )
        }
      }
    )
  }

  Modificar():void
  {
    this.clienteService.modificarCli(this.cliente).subscribe(
      res=>this.router.navigate(['/clientes'])
    )
  }

}
