import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent}from "src/app/Components/navbar/navbar.component";
import{LoginComponent} from "src/app/Components/login/login.component";
import { GraphComponent } from './Components/graph/graph.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [

  { path: 'navbar', component: NavbarComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
