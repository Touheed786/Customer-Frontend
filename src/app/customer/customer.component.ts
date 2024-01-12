import { Component } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  constructor(private custService:CustomerService){}
  ngOnInit(){}

  CustomerData:any = new Customer();
  occupationOptions: string[] = ['developer', 'chef', 'plumber','carpenter','other'];
  customerGroup: string[] = ['hikeon', 'chef', 'developer','NA'];


  submitForm() {
   
    this.custService.createCustomer(this.CustomerData).subscribe((data)=>{
      console.log(data)
    },(error)=>{
      console.log(error)
    })
    
  }
}
