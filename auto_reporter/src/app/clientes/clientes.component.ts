import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  tituloPagina = "Registro del Cliente";
  cliente = { nombre: "", password: "", telefono: "", email: ""};
  quiereContacto: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goInicio(): void {
    this.router.navigate(['/inicio']);
  }

  registra(): void {
    alert( "En construcción.");
    this.router.navigate( ["/autos"]);
  }
}