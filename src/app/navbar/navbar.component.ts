import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}
  closeNavbar() {
    //Busca el elemento colapsable por su id
    const navbar = document.getElementById('navbarNav');
    //Usa el Api de Bootstrap para colapsar el menú
    //@ts-ignore
    const collapse= new window.bootstrap.Collapse(navbar, {toggle: false});
    collapse.hide();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
