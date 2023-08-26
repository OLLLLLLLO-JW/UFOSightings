import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginMenuService {

  constructor() { }
  menuOptions: string[] = ["Login", "Home"];

}
