import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { priviledgeURL } from '../priviledge-url';
import swal from 'sweetalert2';

@Component({
  selector: 'app-priviledge-activity-mapping',
  templateUrl: './priviledge-activity-mapping.component.html',
  styleUrls: ['./priviledge-activity-mapping.component.scss']
})
export class PriviledgeActivityMappingComponent implements OnInit {
  operation = "Add";
  obj = {};
  displayForm = false;
  data = [];
  Priviledge = [];
  PriviledgeActivity = [];

  constructor(public http: HttpService) { }

  ngOnInit() {
    this.http.get(priviledgeURL.priviledgeactivitymapping.all)
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
    this.http.get(priviledgeURL.priviledgeactivity.all)
    .subscribe(success => {
      this.PriviledgeActivity = success.data;
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
    let url = priviledgeURL.priviledgeactivitymapping.add;
    if (this.operation == "Update")
      url = priviledgeURL.priviledgeactivitymapping.update;
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
