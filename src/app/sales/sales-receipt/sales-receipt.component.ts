import { Component, OnInit } from '@angular/core';
import { SalesData } from 'src/app/services/sales-data.service';
import { SalesReceipt } from 'src/app/services/sales-receipt.service';

@Component({
  selector: 'app-sales-receipt',
  templateUrl: './sales-receipt.component.html',
  styleUrls: ['./sales-receipt.component.scss']
})
export class SalesReceiptComponent implements OnInit {

  message: any;
  receipt: any;
  subtotal = 0;

  constructor(public salesData: SalesData, public salesReceipt: SalesReceipt ) { }

  ngOnInit() {

    this.salesData.currentMessage.subscribe(message => this.message = message);

    this.salesReceipt.currentMessage.subscribe(receiptData => this.receipt = receiptData)

    this.onConfirm();

  }

  onConfirm() {
    //this.obj = this.obj;
    //this.obj.order.PaymentMethod = this.payment_method.filter(item => this.obj.order.PaymentMethodID == item.id)[0].PaymentMethod;
    //this.obj.order.CustomerName = this.customers.filter(item => this.obj.order.CustomerID == item.id)[0].FullName;

    this.subtotal = 0;
    this.receipt.forEach(item => {
      this.subtotal += item.Quantity * item.Price;

    });
  }

}
