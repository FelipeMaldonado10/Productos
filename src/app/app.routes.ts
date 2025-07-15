import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DescriptionComponent } from './product-detail/description/description.component';
import { ReviewsComponent } from './product-detail/reviews/reviews.component';
import { productGuard } from './guards/product.guard';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent, canActivate: [authGuard] },
    { path: 'contact', component: ContactComponent },
    { path: 'product/:id', 
        component: ProductDetailComponent,
        canActivate: [productGuard],
        children: [ //Ruta con hijos
            {path: 'description', component: DescriptionComponent},
            {path: 'reviews', component: ReviewsComponent},
            {path: '', redirectTo: 'description', pathMatch: 'full'}
        ]
    },
];
