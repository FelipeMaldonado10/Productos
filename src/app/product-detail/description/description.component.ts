import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit {
  productDescription = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.parent?.snapshot.paramMap.get('id');
    this.productDescription = `Descripción detallada para producto ${productId}`;
  }
}
