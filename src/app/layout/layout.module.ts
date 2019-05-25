import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavDirective } from './navbar/sidenav.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CaruselComponent} from './carusel/carusel.component';
import { CuadroInformacionComponent } from './cuadro-informacion/cuadro-informacion.component';
import { from } from 'rxjs';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidenavDirective, CaruselComponent,
     CuadroInformacionComponent, MenuPrincipalComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, CaruselComponent]
})
export class LayoutModule {}