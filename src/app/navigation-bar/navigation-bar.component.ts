import { Component } from '@angular/core';
import { LoginMenuService } from '../login-menu.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  constructor( private loginMenuService: LoginMenuService) {

    this.loginOptions = this.loginMenuService.menuOptions;
    
  }

  loginOptions: string[] = [];
  isHovered: boolean = false;
  showMenu(): void {
    this.isHovered = true;
  }
  hideMenu(): void {
    this.isHovered = false;
  }
  
  
}
