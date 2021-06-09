import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent}from "src/app/Components/navbar/navbar.component";
import{LoginComponent} from "src/app/Components/login/login.component";

const routes: Routes = [

  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
