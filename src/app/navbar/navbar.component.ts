import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  closeNavbar() {
    //Busca el elemento colapsable por su id
    const navbar = document.getElementById('navbarNav');
    //Usa el Api de Bootstrap para colapsar el menú
    //@ts-ignore
    const collapse= new window.bootstrap.Collapse(navbar, {toggle: false});
    collapse.hide();
  }
}
