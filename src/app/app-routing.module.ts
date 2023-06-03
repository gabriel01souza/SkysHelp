import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './view/employee/employee.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: EmployeeComponent,
    path: 'employees'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
