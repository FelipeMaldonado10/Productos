import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    //obtener queryParams
    const modo = this.route.snapshot.queryParamMap.get('modo');
    console.log('Modo de visualización:', modo);//Detallado
  }
  // Metodo navegacion programatica volver a la página de inicio
  volverAlHome() {
    this.router.navigate(['/home']);
  }
}
