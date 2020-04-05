import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GenericService } from 'src/app/services/generic.service';
import swal from 'sweetalert2';
import { dashboard_urls } from 'src/app/components/dashboard_urls';
import { setupUrls } from '../setup_urls';
import { FunctionCall } from '@angular/compiler';

@Component({
  selector: 'app-today-summary',
  templateUrl: './today-summary.component.html',
  styleUrls: ['./today-summary.component.scss']
})
export class TodaySummaryComponent implements OnInit {
  title = "Today's Transactions";
  operation = "Add";
  displayForm = false;
  transactions = [];
  allTransactions = []
  cashCollected = 0;
  staff = [];
  openingBalance = 0;
  extraMoney = 0;
  startWorkingWorking = 0;
  moneyTransfered = 0;
  moneyPaidOut = 0;
  bankCharges = 0;
  companyCharges = 0;
  cashRecieved = 0;
  cashReturn = 0;
  newMoney= 0;
  obj = {};
  status = [];
  lgas = [];


  pageOfItems: Array<any>;

  constructor(public http: HttpService, public generics: GenericService) { }

  ngOnInit() {
    swal.showLoading();
    this.http.get(dashboard_urls.transactions.today_transaction)
      .subscribe(success => {
        this.allTransactions = success.data;
        this.transactions = this.allTransactions
        // console.log(this.data);
        this.getTodaySummary()

        swal.close();
      }, err => {
        console.log(err);
      })

    swal.showLoading();
    this.http.get(setupUrls.staff.list)
      .subscribe(success => {
        this.staff = success.data;
        // console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      })

    this.generics.getYesNo()
      .subscribe(success => {
        this.status = success;
        swal.close();
      }, err => {
        console.log(err);
      })

  }

  getStaffHistory(data) {
    // this.obj.LgaID =null;
    this.transactions = this.allTransactions.filter(item => item.StaffID == data.id)
    this.getTodaySummary()
  }

  hideForm() {
    this.displayForm = false;
  }

  showForm() {
    this.displayForm = true;
  }

  processForm() {
    let url = setupUrls.banks.add;
    if (this.operation == "Update")
      url = setupUrls.banks.update;
    this.save(url);
  }
  save(url) {
    swal.showLoading();
    this.http.post(url, this.obj)
      .subscribe(success => {
        this.allTransactions = success.data;
        this.transactions = this.allTransactions
        this.resetForm();
        swal("Success", success.message, "success");
      }, err => {
        console.log(err);
        swal("Error", err.error.message, "error");
      })
  }

  getTodaySummary() {
    let newtrans = []

    newtrans = this.transactions.filter(item => item.IsOpen == 1)
    this.openingBalance = this.getEachSummary(newtrans)

    newtrans = this.transactions.filter(item => item.TransactionCategoryID == 1)
    this.extraMoney = this.getEachSummary(newtrans)

    this.startWorkingWorking = this.extraMoney + this.openingBalance

    newtrans = this.transactions.filter(item => item.TransactionCategoryID == 2)
    this.moneyTransfered = this.getEachSummary(newtrans)

    newtrans = this.transactions.filter(item => (item.TransactionCategoryID == 3 || item.TransactionCategoryID == 4))
    this.moneyPaidOut = this.getEachSummary(newtrans)
    this.newMoney = this.getEachCashReturned(newtrans);

    let myCharges = 0;
    this.transactions.forEach(function(value){
      myCharges += value.TransactionCost*1
      console.log(myCharges)
    })

    this.bankCharges = myCharges

    let myCompanyCharges = 0;
    this.transactions.forEach(function(value){
      myCompanyCharges += value.Charge*1
      console.log(myCompanyCharges)
    })

    this.companyCharges = myCompanyCharges

    let myValue = 0

    newtrans = this.transactions.filter(item => (item.TransactionCategoryID == 1 || item.TransactionCategoryID == 5 ||
       item.TransactionCategoryID == 2 || item.TransactionCategoryID == 6 || item.TransactionCategoryID == 7))

    newtrans.forEach(function(value){
      console.log(value.Cash)
      myValue +=value.Cash*1
    })

    this.cashRecieved = myValue

    myValue = 0

    newtrans = this.transactions.filter(item => (item.TransactionCategoryID == 10))

    newtrans.forEach(function(value){
      console.log(value.TransactionAmount)
      myValue +=value.TransactionAmount*1
    })

    this.cashCollected = myValue

    this.cashReturn = this.cashRecieved - this.newMoney - this.cashCollected

  }

  getEachSummary(data){

    let myValue = 0

    data.forEach(function(value){
      console.log(value)
      myValue +=value.TransactionAmount*1
    })
    return myValue
  }

  getEachCashReturned(data){

    let myValue = 0

    data.forEach(function(value){
      console.log(value)
      myValue +=value.Cash*1
    })
    return myValue
  }

  // loadItem(id) {
  //   this.operation = "Update";
  //   this.obj = this.data.filter(item => item.id == id)[0];
  //   this.showForm();
  // }

  resetForm() {
    this.obj = {};
    this.operation = "Add";
    this.hideForm();
  }
  newForm() {
    this.obj = {};
    this.operation = "Add";
    this.showForm();
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
