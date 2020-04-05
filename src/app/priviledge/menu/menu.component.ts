import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { priviledgeURL } from '../priviledge-url';
import swal from 'sweetalert2';
import { GenericService } from 'src/app/services/generic.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  operation = "Add";
  obj = {};
  displayForm = false;
  data = [];
  MenuType = [];
  ParentMenu = [];
  Status = [];

  
   constructor(public http: HttpService, protected generics: GenericService) { }

   ngOnInit() {
    this.http.get(priviledgeURL.menu.all)
    .subscribe(success => {
      this.data = success.data;
    }, error => {
      console.log(error);
    });
    this.http.get(priviledgeURL.menutype.all)
    .subscribe(success => {
      this.MenuType = success.data;
    }, error => {
      console.log(error);
    });

    this.http.get(priviledgeURL.menu.all)
    .subscribe(success => {
      this.ParentMenu = success.data;
    }, error => {
      console.log(error);
    });

    this.generics.getStatus()
    .subscribe(success => {this.Status=success},
      error =>{console.log(error)}
      );

  }
  showForm() {
    this.displayForm = true;
  }
  hideForm() {
    this.displayForm = false;
  }

  processForm() {
    let url = priviledgeURL.menu.add;
    if (this.operation == "Update")
      url = priviledgeURL.menu.update;
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
