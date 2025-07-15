import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../servicios/product.service'; // importa tu servicio y modelo


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // El nombre del parámetro es 'id', no '_id' según tu ruta
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe(prod => {
        this.product = prod;
      });
    }

    // obtener queryParams
    const modo = this.route.snapshot.queryParamMap.get('modo');
    console.log('Modo de visualización:', modo);
  }

  volverAlHome() {
    this.router.navigate(['/home']);
  }
}
