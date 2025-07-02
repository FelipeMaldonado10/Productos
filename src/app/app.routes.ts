import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DescriptionComponent } from './product-detail/description/description.component';
import { ReviewsComponent } from './product-detail/reviews/reviews.component';
import { productGuard } from './guards/product.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {path: 'product/:id', 
        component: ProductDetailComponent,
        canActivate: [productGuard],
        children: [ //Ruta con hijos
            {path: 'description', component: DescriptionComponent},
            {path: 'reviews', component: ReviewsComponent},
            {path: '', redirectTo: 'description', pathMatch: 'full'}
        ]
    },
    {path: '**', redirectTo: ''} //Ruta comodín (404)
];
