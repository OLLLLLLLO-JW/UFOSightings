import { Component,  EventEmitter, Output} from '@angular/core';
import { LoginMenuService } from '../services/login-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor( private loginMenuService: LoginMenuService, private router: Router) {
    this.loginOptions = this.loginMenuService.menuOptions;
  }
  
  @Output() listItemClicked = new EventEmitter<string>();

  loginOptions: string[] = [];
  isHovered: boolean = false;
  showMenu(): void {
    this.isHovered = true;
  }
  hideMenu(): void {
    this.isHovered = false;
  }

  performMenuAction(action: string){
    console.log("inside Perform Menu Action");
    switch (action){
      case "Login":
        this.launchLoginModal();
        this.listItemClicked.emit(action);
        break;
      case "Home":
        this.goHome();
        this.listItemClicked.emit(action);
        break;
      default:
        break;
    }
  }

// Launch Login Modal
  launchLoginModal() {
      console.log("Inside Launching login modal");
    this.router.navigate(['/login']);
  }
  // Navigate to Home page
  goHome(){

  }
  
}
