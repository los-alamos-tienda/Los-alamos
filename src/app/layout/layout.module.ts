import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavDirective } from './navbar/sidenav.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidenavDirective, MenuPrincipalComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent]
})
export class LayoutModule {}
