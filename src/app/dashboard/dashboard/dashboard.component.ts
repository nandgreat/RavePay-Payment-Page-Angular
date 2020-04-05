import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { setupUrls } from 'src/app/setup/setup_urls';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ValueTransformer } from '@angular/compiler/src/util';
import { dashboard_urls } from 'src/app/components/dashboard_urls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  IsOpen = 0;
  data = {};
  transactionCount = 0;
  UsersCount = 0;
  TotalProfit = 0;
  POSTransactions = 0;
  myChargMethod = null;

  isFormValid = false;
  chargeMethod = []

  errorMessage = "";

  walletBalance = 0.00;
  cash = 0.00;
  aedc = 0.00;
  cable = 0.00;

  validAmount = true;

  myBankBalance = 0.0;

  obj = {
    order: { CashAmount: null, IsOpen: 1, CableTVAmount: null, AEDCAmount: null },
    detail: [{ Balance: 0.0, BankID: null, IsOpen: 1 }]
  };

  transObj = {
    trans: { TransactionCategoryID: 0, TransactionAmount: 0, TransType: 0, SenderBankID: 0, RecipientBankID: 0, ChargeMethod: 0, Charge: 0, TransactionCost: 0, Profit: 0 }
  };

  userRole = null;
  isStaff;
  allBalance;
  isStartingDay;
  transCategory = null;
  TransactionCost = 0;
  senderBank = null;
  recipientBank = null;
  transactions = [];
  allcharges = [];
  charges = [];
  myBank = { Charge: 0, Balance: 0.00 };
  inUseBanks = [];
  isEditable = true;
  operation = "Start the Day";
  isLinear = true;
  user_name = "";
  banks = [];
  myTransaction = { TransactionCategoryID: 0, TransactionCategory: null, TransactionAmount: 0.00 };
  transactionTypeID = 0;

  constructor(public httpservice: HttpService, public _auth: AuthService, public generics: GenericService, public router: Router) {

  }

  ngOnInit() {

    this.user_name = this._auth.getUserInfo();
    this.userRole = this._auth.getUserRole();
    console.log(this.userRole + " is my user role")

    if (this.transObj.trans.TransactionAmount == 0) {
      this.isFormValid = true;
    }

    swal({ allowOutsideClick: false, allowEscapeKey: false, });

    if (localStorage.getItem("token") == null) {
      this.router.navigate(['/login'])
      console.log("No logged in user");
    } else {
      console.log("We have a user");
    }

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

    swal.showLoading();
    this.httpservice.get(dashboard_urls.transactiontype.list)
      .subscribe(success => {
        this.transactions = success.data;
        // console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      })

    this.generics.getChargeMethod()
      .subscribe(success => {
        this.chargeMethod = success;
        console.log(this.chargeMethod)
        swal.close();
      }, err => {
        console.log(err);
      })

    swal.showLoading();
    this.httpservice.get(dashboard_urls.transactiontype.list)
      .subscribe(success => {
        this.transactions = success.data;
        // console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      })

    swal.showLoading();
    this.httpservice.get(setupUrls.charges.list)
      .subscribe(success => {
        this.allcharges = success.data;
        this.charges = this.allcharges;
        console.log(this.charges);
        swal.close();
      }, err => {
        console.log(err);
      })

    swal.showLoading();
    this.httpservice.get(setupUrls.banks.listInUse)
      .subscribe(success => {
        this.inUseBanks = success.data;
        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      })

    swal.showLoading();
    this.httpservice.get(dashboard_urls.transactions.count)
      .subscribe(success => {
        this.transactionCount = success.data.NumberOfTransactions;
        this.UsersCount = success.data.NumberOfUsers;
        this.TotalProfit = success.data.TotalProfit;
        this.POSTransactions = success.data.POSTransactions;
        console.log(this.transactionCount);
        swal.close();
      }, err => {
        console.log(err);
      })
    // this.TotalProfit = 45672000;

    this.getBalance();

    swal.showLoading();
    this.httpservice.get(setupUrls.banks.list)
      .subscribe(success => {
        this.banks = success.data;
        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      })

  }

  onConfirm() {
    if (this.transObj.trans.ChargeMethod == 1)
      this.myChargMethod = "Charge from Card";
    else
      this.myChargMethod = "Charge with Cash"
  }

  func(data) {


    let myCharge = 0;
    let myProfit = 0;

    console.log(this.transObj.trans.TransactionCategoryID)

    if (data < this.charges[0].MinAmount) {
      this.isFormValid = true;
      this.errorMessage = "Minimum Amount is " + this.charges[0].MinAmount + " naira";
    } else {
      if (this.transObj.trans.TransactionCategoryID == 3 || this.transObj.trans.TransactionCategoryID == 4) {
        if (data > this.cash) {
          this.errorMessage = "Amount exceeds Cash at Hand";
          this.isFormValid = true;
        } else {
          this.errorMessage = ""
          this.isFormValid = false;
        }
      } else if (this.transObj.trans.TransactionCategoryID == 2) {

        if (data > this.myBankBalance) {
          this.errorMessage = "Amount exceeds available Bank Balance";
          this.isFormValid = true;
        } else {
          this.errorMessage = ""
          this.isFormValid = false;
        }
      }
    }


    this.charges.forEach(function (value) {

      // console.log(value.MinAmount)

      if (data >= value.MinAmount && data <= value.MaxAmount) {
        myCharge = value.Charge;
        console.log(myCharge)
      }
    });

    this.transObj.trans.Charge = myCharge
    this.transObj.trans.Profit = this.transObj.trans.Charge - this.transObj.trans.TransactionCost;


    // if (this.transactionTypeID == 2) {
    //   if (data < 10000) {
    //     this.transObj.trans.Charge = 200;
    //   } else if (data > 10000 && data < 20000) {
    //     this.transObj.trans.Charge = 300;
    //   } else if (data > 20000 && data < 30000) {
    //     this.transObj.trans.Charge = 400;
    //   }
    //   this.transObj.trans.Profit = this.transObj.trans.Charge - this.transObj.trans.TransactionCost;
    // } else if (this.transactionTypeID == 4) {
    //   if (data < 10000) {
    //     this.transObj.trans.Charge = 100;
    //     this.transObj.trans.Profit = this.transObj.trans.Charge;
    //   } else if (data > 10000 && data < 20000) {
    //     this.transObj.trans.Charge = 200;
    //     this.transObj.trans.Profit = this.transObj.trans.Charge;
    //   } else if (data > 20000 && data < 30000) {
    //     this.transObj.trans.Charge = 300;
    //     this.transObj.trans.Profit = this.transObj.trans.Charge;
    //   }
    // }
  }
  addItem() {
    this.obj.detail.push({ Balance: 0.0, BankID: null, IsOpen: 1 });
  }

  getBalance() {
    swal.showLoading();
    this.httpservice.get(dashboard_urls.walletBalance.singleBalance)
      .subscribe(success => {
        this.allBalance = success.data;

        this.cash = this.allBalance != false ? this.allBalance.Cash : 0.00;
        this.walletBalance = this.allBalance != false ? this.allBalance.BankBalance : 0.00;
        this.cable = this.allBalance != false ? this.allBalance.CableTV : 0.00;
        this.aedc = this.allBalance != false ? this.allBalance.AEDC : 0.00;

        console.log(this.allBalance);
        // if(!this.isStartingDay){
        // swal.close();
        // }
      }, err => {
        console.log(err);
      })
  }

  processForm() {
    this.obj.order.IsOpen = 1;
    console.log(this.obj)
    let url = dashboard_urls.isOpening.start;
    console.log(url);
    this.save(url);
  }

  resetTransaction() {
    this.transObj = {
      trans: { TransactionCategoryID: 0, TransactionAmount: 0, TransType: 0, ChargeMethod: 0, SenderBankID: 0, RecipientBankID: 0, Charge: 0, TransactionCost: 0, Profit: 0 }
    };
    this.transCategory = null;
    this.TransactionCost = 0;
    this.senderBank = null;
    this.recipientBank = null;

    this.myBank = { Charge: 0, Balance: 0 };
    this.isEditable = true;
    this.isLinear = true;
    this.user_name = "";

    this.myTransaction = { TransactionCategoryID: 0, TransactionCategory: null, TransactionAmount: 0.00 };
    this.transactionTypeID = 0;

    this.getBalance();

    // this.ngOnInit()
  }

  processTransaction() {
    // this.transObj.order.IsOpen = 1;
    console.log(this.transObj)
    let url = dashboard_urls.transactions.add;
    console.log(url);
    this.save(url);
  }

  save(url) {

    if (this.isStartingDay) {
      swal.showLoading();
      console.log(this.obj);
      this.httpservice.post(url, this.obj)
        .subscribe(success => {
          this.data = success.data;
          this.resetTransaction();

          console.log("Before Success Dialog Starting day")

          swal({ title: "Success", text: success.message, type: "success", allowOutsideClick: false }).then((value) => {
            this.ngOnInit();
          });
        }, err => {
          console.log(err);
          swal("Error", err.error.message, "error");
        })
    } else {
      swal.showLoading();
      this.httpservice.post(url, this.transObj)
        .subscribe(success => {
          this.data = success.data;
          this.resetTransaction();

          console.log("Before Success Dialog Starting day")

          swal({ title: "Success", text: success.message, type: "success", allowOutsideClick: false }).then((value) => {
            this.ngOnInit();
          });
        }, err => {
          console.log(err);
          swal("Error", err.error.message, "error");
        })
    }


  }

  getCharge(data) {

    this.myBank = this.banks.find(item => item.BankID == data.BankID);

    if (this.transactionTypeID == 2) {

      this.transObj.trans.TransactionAmount = 0;

      this.TransactionCost = data.Charge;

      this.myBankBalance = data.Balance;

      this.TransactionCost = this.myBank.Charge;
      this.transObj.trans.TransactionCost = this.TransactionCost;

      if (this.transObj.trans.Profit != 0) {
        this.transObj.trans.Profit = this.transObj.trans.Charge - this.transObj.trans.TransactionCost;
      }

      console.log(this.TransactionCost);
    }

  }

  getPOSCharge(data) {

    this.myBank = this.banks.find(item => item.BankID == data.BankID);

    if (this.transactionTypeID == 4) {

      this.TransactionCost = data.Charge;

      this.myBankBalance = data.Balance;

      this.TransactionCost = this.myBank.Charge;
      this.transObj.trans.TransactionCost = this.TransactionCost;

      if (this.transObj.trans.Profit != 0) {
        this.transObj.trans.Profit = this.transObj.trans.Charge - this.transObj.trans.TransactionCost;
      }

      console.log(this.TransactionCost);
    }

  }

  onRecipientBank(data) {

    if (this.transactionTypeID == 2) {
      this.recipientBank = data.Bank;
      if (this.transObj.trans.SenderBankID == data.BankID) {
        this.transObj.trans.TransactionCost = 0;
      } else {
        this.transObj.trans.TransactionCost = this.TransactionCost;
      }
      if (this.transObj.trans.Profit != 0) {
        this.transObj.trans.Profit = this.transObj.trans.Charge - this.transObj.trans.TransactionCost;
      }
    } else if (this.transactionTypeID == 4) {
      this.recipientBank = data.Bank;
      this.transObj.trans.TransType = 1
      this.transObj.trans.TransactionCost = 0;

    }
  }

  removeItem(i) {
    if (this.obj.detail.length > 1)
      this.obj.detail.splice(i, 1);
  }

  transactionDetails(data) {

    // console.log(data.TransactionCategory);

    this.transCategory = data.TransactionCategory;

    this.myTransaction = this.transactions.find(item => item.TransactionCategoryID == data.TransactionCategoryID);
    this.charges = this.allcharges.filter(item => item.TransactionCategoryID == data.TransactionCategoryID);

    this.transactionTypeID = this.myTransaction.TransactionCategoryID;
    // console.log(this.charges);

    if (this.transactionTypeID == 1) {
      this.transObj.trans.TransType = 1;
    } else if (this.transactionTypeID == 2) {
      this.transObj.trans.TransType = 2;
    } else if (this.transactionTypeID == 3) {
      this.transObj.trans.TransType = 1;
    } else if (this.transactionTypeID == 4) {
      this.transObj.trans.TransType = 1
    } else if (this.transactionTypeID == 6) {
      this.transObj.trans.TransType = 1
    } else if (this.transactionTypeID == 7) {
      this.transObj.trans.TransType = 1
    }

    // console.log(this.myTransaction)
  }

}
