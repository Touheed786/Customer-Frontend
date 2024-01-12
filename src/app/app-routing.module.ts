import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustlistComponent } from './custlist/custlist.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path:'getCustomer',
    component:CustlistComponent,
    pathMatch:"full"
  },
  {
    path:'create',
    component:CustomerComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
