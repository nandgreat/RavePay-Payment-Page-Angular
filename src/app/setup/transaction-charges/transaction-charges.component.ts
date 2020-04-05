import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GenericService } from 'src/app/services/generic.service';
import swal from 'sweetalert2';
import { setupUrls } from '../setup_urls';
import { dashboard_urls } from 'src/app/components/dashboard_urls';

@Component({
  selector: 'app-transaction-charges',
  templateUrl: './transaction-charges.component.html',
  styleUrls: ['./transaction-charges.component.scss']
})
export class TransactionChargesComponent implements OnInit {
  title = "All Charges";
  operation = "Add";
  displayForm = false;
  allTransactions = []
  allCharges = []
  data = [];
  obj = {};
  tc = {TransactionCategoryID: 2}
  status = [];
  transactions = [];

  currentCat = null;

  constructor(public httpservice: HttpService, public generics: GenericService) { }

  ngOnInit() {
    swal.showLoading();
    this.httpservice.get(setupUrls.charges.list)
      .subscribe(success => {
        this.allCharges = success.data;
        this.data = this.allCharges;

        // this.data = this.allCharges.filter(item => item.TransactionCategoryID == 2)

        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      })

    swal.showLoading();
    this.httpservice.get(dashboard_urls.transactiontype.list)
      .subscribe(success => {
        this.allTransactions = success.data;
        // this.transactions = this.allTransactions.filter(item => item.TransactionCategoryID == 2)
        this.transactions = this.allTransactions
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

  hideForm() {
    this.displayForm = false;
  }

  showForm() {
    this.displayForm = true;
  }


  processForm() {
    let url = setupUrls.charges.add;
    if (this.operation == "Update")
      url = setupUrls.charges.update;
    this.save(url);
  }

  getTransactionCharge(data) {
    this.currentCat = data.id;
    console.log(data)
    this.data = this.allCharges.filter(item => item.TransactionCategoryID == data.id)
  }

  save(url) {
    swal.showLoading();
    this.httpservice.post(url, this.obj)
      .subscribe(success => {
        this.allCharges = success.data;

        this.data = this.allCharges;
        this.data = this.allCharges.filter(item => item.TransactionCategoryID == this.currentCat)
        this.resetForm();
        swal("Success", success.message, "success");
      }, err => {
        console.log(err);
        swal("Error", err.error.message, "error");
      })
  }

  loadItem(id) {
    this.operation = "Update";
    this.obj = this.data.filter(item => item.id == id)[0];
    this.showForm();
  }

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
}
