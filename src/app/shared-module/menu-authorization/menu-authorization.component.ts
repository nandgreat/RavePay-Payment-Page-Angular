import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import swal from 'sweetalert2';
import { sharedUrl } from '../shared-urls';

@Component({
  selector: 'app-menu-authorization',
  templateUrl: './menu-authorization.component.html',
  styleUrls: ['./menu-authorization.component.scss']
})
export class MenuAuthorizationComponent implements OnInit {

  title = "Menu Authorization List"
  data = [];
  displayForm = false;
  operation = "Add";
  obj = {};
  menus = [];

  privileges = [];

  constructor(public http: HttpService) { }

  ngOnInit() {

    swal.showLoading();
    this.http.get(sharedUrl.menu_authorization_urls.list)
      .subscribe(success => {
        this.data = success.data;
        swal.close();
      }, err => {
        console.log(err);
      })

      this.http.get(sharedUrl.menu_urls.list)
      .subscribe(success => {
        this.menus = success.data;
        swal.close();
      }, err => {
        console.log(err);
      })

      this.http.get(sharedUrl.privileges_urls.list)
      .subscribe(success => {
        this.privileges = success.data;
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
    let url = sharedUrl.menu_authorization_urls.add;
    if (this.operation == "Update") {
      url = sharedUrl.menu_authorization_urls.update;
    }
    console.log(this.obj);
    this.save(url);
  }

  save(url) {
    swal.showLoading;
    this.http.post(url, this.obj)
      .subscribe(success => {
        this.data = success.data;
        this.resetForm();
        swal("Success", success.message, "success");
      }, err => {
        console.log(err);
        swal("Error", err.error.message, "error");
      }) 
  }

  resetForm(){
    this.obj = {};
    this.operation = "Add";
    this.hideForm();
  }

  newForm(){
    this.displayForm = true;
    this.obj = {};
    this.operation = "Add";
  }

  loadItem(id){
    this.operation ="Update";
    this.obj = this.data.filter(item => item.id == id)[0];
    this.showForm();
  }


}
