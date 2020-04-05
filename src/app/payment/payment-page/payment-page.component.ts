import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { dashboard_urls } from 'src/app/components/dashboard_urls';
import swal from 'sweetalert2';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {


  mydata = { ReferenceID: 0, TransactionCategoryID: 0, BillerCode: null, MetreNo: 0, PhoneNo: 0, TVBouquetCode: 0, TransactionAmount: 0, CableTVNo: 0, MeterAccessToken: 0, VendStatus: 0, UserPhone: null };

  ref = null
  transactionCategory = null
  billerCode = null
  meterNo = null
  amount = null
  cableTvNo = null
  userPhone = null
  meterAccessToken = null
  vendStatus = 0;
  isTableVisible = false
  phone = null

  private paymentresponse: any

  obj = { billerCode: null, referenceId: 0, accessToken: null, meterNo: null, tvBouquetCode: null, cableTvNo: null, amount: null, phone: null, email: null, vendStatus: 0, userPhone: null, trasactionCategory: null, chargeFromID: 0 };

  email = "info@magictopup.com";
  bouquetCode: any;

  constructor(public http: HttpService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let ref = this.route.snapshot.params["reference"];
    swal.showLoading();
    console.log("This is the Id " + ref);
    this.http.get(dashboard_urls.transactions.gettransaction + '/' + ref)
      .subscribe(success => {
        this.isTableVisible = true
        this.mydata = success.data;

        if (!this.mydata)
          this.router.navigate(['']);

        this.ref = this.mydata.ReferenceID
        this.transactionCategory = this.mydata.TransactionCategoryID
        this.meterNo = this.mydata.MetreNo
        this.userPhone = this.mydata.UserPhone
        this.cableTvNo = this.mydata.CableTVNo
        this.bouquetCode = this.mydata.TVBouquetCode
        this.meterAccessToken = this.mydata.MeterAccessToken
        this.billerCode = this.mydata.BillerCode
        this.phone = this.mydata.PhoneNo
        this.vendStatus = this.mydata.VendStatus
        this.amount = this.mydata.TransactionAmount
        console.log(this.mydata);
        swal.close();
      }, err => {
        console.log(err);
        this.router.navigate(['']);
      });
  }


  confirmPayment(response: object): void {

    this.paymentresponse = response

    console.log(this.paymentresponse.data.data);

    if (this.paymentresponse.data.data.status == "successful") {

      console.log("payment confirmed");

      this.obj.billerCode = this.billerCode
      this.obj.referenceId = this.ref
      this.obj.accessToken = this.meterAccessToken
      this.obj.meterNo = this.meterNo
      this.obj.amount = this.amount
      this.obj.tvBouquetCode = this.bouquetCode
      this.obj.cableTvNo = this.cableTvNo;
      this.obj.vendStatus = this.vendStatus
      this.obj.userPhone = this.userPhone
      this.obj.phone = this.phone == null ? "08028623101" : this.phone
      this.obj.email = "info@magictopup.com"
      this.obj.trasactionCategory = this.transactionCategory

      console.log(this.obj);

      this.http.post(dashboard_urls.transactions.updatepayment, this.obj)
        .subscribe(success => {
          this.mydata = success.data;
          swal("Success", success.message, "success");
        }, err => {
          console.log(err);
          // swal({ title: "Error", text: "Something went wrong", type: "error", allowOutsideClick: false }).then((value) => {

          // });
          swal("Error", err.error.message, "error");
        })
    }


    // console.log(this.transObj)
  }

  cancelledPayment(): void {
    console.log('close');
  }

  generateReference(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }


}
