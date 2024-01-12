import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {


  submitForm(formData: any): void {
    // You can perform further actions with the form data
    // For simplicity, we'll just log the data to the console in this example
    console.log('Form Data:', formData);
  }
}
