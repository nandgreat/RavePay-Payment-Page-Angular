import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import swal from 'sweetalert2';
import { sharedUrl } from '../shared-urls';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  title = "Menu List"
  data = [];
  displayForm = false;
  operation = "Add";
  obj = {MenuTypeID: null, ParentMenuID: 1033};
  menus = [];
  status = [];
  icons = [];
  iconsImages = [];

  constructor(public http: HttpService, public generics: GenericService) { }

  ngOnInit() {

    swal.showLoading();
    this.http.get(sharedUrl.menu_urls.list)
      .subscribe(success => {
        this.data = success.data;
        this.menus = this.data;
        swal.close();
      }, err => {
        console.log(err);
      })
    this.http.get(sharedUrl.icons_url.list)
      .subscribe(success => {
        this.icons = success.data;

        console.log(this.icons)
        // swal.close();
      }, err => {
        console.log(err);
      })

      this.generics.getStatus()
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

  populateImages(){
    for (let i = 0; i < this.icons.length; i++) {

      this.iconsImages[i] = '<i class=\"fa fa-\"+this.icons[i]+"></i> " " + this.icons[i]';

      // console.log ("Block statement execution no." + i);
    }
  }

  processForm() {
    let url = sharedUrl.menu_urls.add;
    if (this.operation == "Update") {
      url = sharedUrl.menu_urls.update;
    }
    console.log(this.obj);
    this.save(url);
  }

  save(url) {
    swal.showLoading;
    this.http.post(url, this.obj)
      .subscribe(success => {
        this.data = success.data;
        this.menus = success.data;
        this.resetForm();
        swal("Success", success.message, "success");
      }, err => {
        console.log(err);
        swal("Error", err.error.message, "error");
      })
  }

  resetForm(){
    this.obj = {MenuTypeID: null, ParentMenuID: 1033};
    this.operation = "Add";
    this.hideForm();
  }

  newForm(){
    this.displayForm = true;
    this.obj = {MenuTypeID: null, ParentMenuID: 1033};
    this.operation = "Add";
  }

  loadItem(id){
    this.operation ="Update";
    this.obj = this.data.filter(item => item.id == id)[0];
    this.showForm();
  }
}
