import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ufosightings';
  shouldShowLoginModal: boolean = false;

  constructor(private router: Router){}

  ngOnInit(){
    this.navigateToHomeURL();
  }

  navigateToHomeURL(){
    this.router.navigate(['/home']);
  }

  menuOptionCLicked(option: string) {
    switch (option){
      case "Login":
        this.shouldShowLoginModal = true;
        break;
      case "Home":
        this.shouldShowLoginModal = false;
        break;
      default:
        this.shouldShowLoginModal = false;
        break;
    }
  }
}
