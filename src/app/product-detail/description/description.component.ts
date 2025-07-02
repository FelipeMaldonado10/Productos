import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit {
  productDescription = '';
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    const productId = this.route.parent?.snapshot.paramMap.get('id');
    // Aquí normalmente cargarías datos desde un servicio
    this.productDescription = `Descripción detallada para producto ${productId}`;
  }
}