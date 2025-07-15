import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';
import { SaludoPipe } from '../pipes/saludo.pipe';
import { FondoDirective } from '../directives/fondo.directive';
import { HttpClient } from '@angular/common/http';
import { ProductService, Product } from '../servicios/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';  
import { ProductCommunicationService } from '../servicios/product-communication.service';
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [ProductFormComponent,CommonModule, RouterLink, SaludoPipe,FondoDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  today= new Date();
  nombre='Willman';
  horas= new Date().getHours();
  products: Product[] = [];
  mensaje: string = '';
  tipoMensaje: 'success' | 'error' = 'success';
  productoAEliminar: Product | null = null;
  constructor(
    private productService: ProductService,
    private productCommService: ProductCommunicationService,
    public authService: AuthService,
  ) {}
  
  
  loadProducts() {
  this.productService.getProducts().subscribe(data => {
    this.products = data;
  });
  }
  ngOnInit() {
    this.loadProducts();
    this.productCommService.productAdded$.subscribe(() => {
      this.loadProducts();
    });
    this.productCommService.productEdited$.subscribe(() => {
      this.loadProducts();
      this.selectedProduct = null;
    });
  }

  confirmarEliminacion(product: Product) {
    this.productoAEliminar = product;
    console.log('Producto a eliminar:', this.productoAEliminar);
  }

  cancelarEliminacion() {
    this.productoAEliminar = null;
  }


  eliminarConfirmado() {
    if (!this.productoAEliminar) return;

    this.productService.deleteProduct(this.productoAEliminar._id).subscribe({
      next: () => {
        this.products = this.products.filter(p => p._id !== this.productoAEliminar!._id);
        this.mensaje = 'Producto eliminado exitosamente';
        this.tipoMensaje = 'success';
        this.limpiarMensaje();
        this.productoAEliminar = null;
      },
      error: () => {
        this.mensaje = 'Error al eliminar el producto';
        this.tipoMensaje = 'error';
        this.limpiarMensaje();
        this.productoAEliminar = null;
      }
    });
  }


  limpiarMensaje() {
    setTimeout(() => {
      this.mensaje = '';
    }, 2500);
  }

  
  selectedProduct: Product | null = null;

  editProduct(product: Product) {
    this.selectedProduct = { ...product };
  }
}


