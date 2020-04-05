import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GenericService } from 'src/app/services/generic.service';
import swal from 'sweetalert2';
import { setupUrls } from '../setup_urls';
import { dashboard_urls } from 'src/app/components/dashboard_urls';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable';
// import * as myGlobals from "../globals";

import { Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

// Defint an interface for jspdfautotable
// interface jsPDFWithPlugin extends jsPDF {
//   autotable: (options: UserOptions) => jsPDF;
// }

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  title = "All Transactions";
  operation = "Add";
  displayForm = false;
  transactions = [];
  allTransactions = []
  staff = [];
  obj = {};
  status = [];
  lgas = [];

  pageOfItems: Array<any>;

  constructor(public http: HttpService, public generics: GenericService) { }

  ngOnInit() {
    swal.showLoading();
    this.http.get(dashboard_urls.transactions.list)
      .subscribe(success => {
        this.allTransactions = success.data;
        this.transactions = this.allTransactions
        // console.log(this.data);
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
  }

  // define downloadPDF function

  downloadPDF(){

    var doc = new jsPDF('portrait', 'px', 'a4') as jsPDF;

    doc.autoTable({
      head: [[
        "SN",
        "Transaction Type",
        "Sender Bank",
        "Recipient Bank",
        "Amount",
        "Charge",
        "Profit",
        "Staff",
        "Cash",
        "Balance",
        "Cost",
        "Date",
      ]],
      html: "#transHistory"
    })

    doc.save("table.pdf")

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
