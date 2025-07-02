import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';
import { SaludoPipe } from '../pipes/saludo.pipe';
import { FondoDirective } from '../directives/fondo.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, SaludoPipe,FondoDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  today= new Date();
  nombre='Willman';
  horas= new Date().getHours();
  products = [
  { 
    id: 1, 
    name: 'Producto A', 
    price: 99.99,
    description: 'Descripción detallada del producto A' 
  },
  // ... más productos
  {
    id:2, 
    name: 'Producto B', 
    price: 199.99,
    description: 'Descripción detallada del producto B' 
  },
  {
    id:3, 
    name: 'Producto C', 
    price: 299.99,
    description: 'Descripción detallada del producto C'
  },
  {
    id:4, 
    name: 'Producto D', 
    price: 399.99,
    description: 'Descripción detallada del producto D'
  }
];
}

