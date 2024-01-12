import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url="http://localhost:8080"
  constructor(private httpClient:HttpClient) { }

  public createCustomer(customer:any)
  {
    return this.httpClient.post(`${this.url}/customer/create`,customer)
  }
  public getCustomers()
  {
    return this.httpClient.get(`${this.url}/customer/`)
  }
}
