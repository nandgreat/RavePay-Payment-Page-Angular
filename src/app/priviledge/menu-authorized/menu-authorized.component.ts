import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { priviledgeURL } from '../priviledge-url';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menu-authorized',
  templateUrl: './menu-authorized.component.html',
  styleUrls: ['./menu-authorized.component.scss']
})
export class MenuAuthorizedComponent implements OnInit {
  operation = "Add";
  obj = {};
  displayForm = false;
  data = [];
  Menu = [];
  Priviledge =[];

  constructor(public http: HttpService) { }

  ngOnInit() {
    this.http.get(priviledgeURL.menu.all)
    .subscribe(success => {
      this.data = success.data;
    }, error => {
      console.log(error);
    });

    this.http.get(priviledgeURL.priviledge.all)
    .subscribe(success => {
      this.Priviledge = success.data;
    }, error => {
      console.log(error);
    });

  }
  showForm() {
    this.displayForm = true;
  }
  hideForm() {
    this.displayForm = false;
  }

  processForm() {
    let url = priviledgeURL.menuauthorized.add;
    if (this.operation == "Update")
      url = priviledgeURL.menuauthorized.update;
    this.save(url);
  }

  save(url) {
    this.http.post(url, this.obj)
      .subscribe(success => {
        this.data = success.data;
        swal("Success", success.message, 'success');
        this.hideForm();
        this.resetForm();
      }, error => {
        console.log(error);
        swal("Error", error.message || "Some Error Occured", 'error');
      });
  }

  resetForm() {
    this.obj = {};
    this.operation = "Add";
  }

  loadItem(id)
  {
    let value = this.data.filter(item=> item.id == id)[0] || {};
    this.obj = value;
    this.operation ="Update";
    this.showForm();
  }
}
