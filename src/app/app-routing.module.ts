import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'login', component: LoginModalComponent},
  { path: 'home', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
