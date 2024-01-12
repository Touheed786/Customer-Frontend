import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-custlist',
  templateUrl: './custlist.component.html',
  styleUrls: ['./custlist.component.scss']
})
export class CustlistComponent {
  AllCustomer:any
  ngOnInit(){
    this.getAllUser()

  }
constructor(private customerService:CustomerService){}

getAllUser()
{
  this.customerService.getCustomers().subscribe((data)=>{
    this.AllCustomer=data;
  })
}
}
