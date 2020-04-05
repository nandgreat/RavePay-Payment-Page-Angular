import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { dashboard_urls } from 'src/app/components/dashboard_urls';
import swal from 'sweetalert2';
import { setupUrls } from '../setup_urls';

@Component({
  selector: 'app-cash-collected',
  templateUrl: './cash-collected.component.html',
  styleUrls: ['./cash-collected.component.scss']
})
export class CashCollectedComponent implements OnInit {

  isStaff;
  isStartingDay;
  operation = "Top up Balance";
  IsOpen = 0;
  user_name = "";
  data = [];
  isFormValid = false;
  inUseBanks = [];
  cash = 0.0;
  allBalance;
  errorMessage = "";


  obj = {
    order: { IsOpen: 0, CableTVAmount: 0.00, AEDCAmount: 0.00 },
    detail: [{ Balance: 0.0, BankID: null, IsOpen: 0 }]
  };

  transObj = {
    trans: { TransactionCategoryID: 10, TransactionAmount: 0, TransType: 0, Description: null}
  };

  constructor(public httpservice: HttpService, public _auth: AuthService, public router: Router) { }

  ngOnInit() {

    this.httpservice.get(dashboard_urls.isOpening.get)
    .subscribe(success => {
      console.log(success.data);
      this.isStaff = success.data.Role != 1 ? true : false;
      if (success.data.isDayStart == null || success.data.isDayStart == 0) {
        this.isStartingDay = true;
      } else if (success.data.isDayStart == 1) {
        this.isStartingDay = false;
        console.log(this.isStartingDay);
        this.operation = "What do you want to do Today?";
      }
      // this.isStartingDay = false;
      // this.isStartingDay = success.data.isDayStart != 1 ? true : false;
      this.IsOpen = this.isStartingDay ? 1 : 0;
      // console.log(this.isStartingDay);
      this.data = success.data;
      swal.close();
    }, err => {
      console.log(err);
    })

    this.getBalance()

    swal.showLoading();
    this.httpservice.get(setupUrls.banks.listInUse)
      .subscribe(success => {
        this.inUseBanks = success.data;
        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      })
  }

  processForm() {
    this.obj.order.IsOpen = 0;
    console.log(this.transObj)
    let url = setupUrls.staff.cashCollected;
    console.log(url);
    this.save(url);
  }

  save(url) {

    if (!this.isStartingDay) {
      swal.showLoading();
      console.log(this.transObj);
      this.httpservice.post(url, this.transObj)
        .subscribe(success => {
          this.data = success.data;
          this.resetTransaction();

          console.log("Before Success Dialog Starting day")

          swal({ title: "Success", text: success.message, type: "success", allowOutsideClick: false }).then((value) => {
            this.transObj.trans.TransactionAmount = null
            this.transObj.trans.Description = ""

          });
        }, err => {
          console.log(err);
          swal("Error", err.error.message, "error");
        })
    }
  }
  resetTransaction() {
    this.obj = {
      order: { IsOpen: 1, CableTVAmount: null, AEDCAmount: null },
      detail: [{ Balance: 0.0, BankID: null, IsOpen: 1 }]
    };
  }

  func(data) {
      if (data >= this.cash) {
        this.errorMessage = "Amount exceeds available Cash at hand";
        this.isFormValid = true;
      }else{
        this.errorMessage = "";
        this.isFormValid = false;
      }
  }

  getBalance() {
    swal.showLoading();
    this.httpservice.get(dashboard_urls.walletBalance.singleBalance)
      .subscribe(success => {
        this.allBalance = success.data;

        this.cash = this.allBalance != false ? this.allBalance.Cash : 0.00;

        console.log(this.allBalance);
        // if(!this.isStartingDay){
        // swal.close();
        // }
      }, err => {
        console.log(err);
      })
  }

}
