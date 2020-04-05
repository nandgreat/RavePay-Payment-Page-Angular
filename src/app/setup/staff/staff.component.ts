import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import swal from 'sweetalert2';
import { sharedUrl } from 'src/app/shared-module/shared-urls';
import { GenericService } from 'src/app/services/generic.service';
import { setupUrls } from '../setup_urls';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  isLinear = true;
  obj = { Password: null };
  states = [];
  lgas = [];
  shops = [];
  roles = [];
  status = [];
  gender = [];
  data = [];
  staff = [];
  displayForm = false;
  requirePassword = true;
  operation = "Add";

  title = "";

  constructor(public http: HttpService, public generics: GenericService) { }

  ngOnInit() {

    swal.showLoading();
    this.http.get(setupUrls.staff.list)
      .subscribe(success => {
        this.data = success.data;
        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      });

    this.generics.getStatus()
      .subscribe(success => {
        this.status = success;
        swal.close();
      }, err => {
        console.log(err);
      })

    swal.showLoading();
    this.http.get(sharedUrl.gender_urls.list)
      .subscribe(success => {
        this.gender = success.data;
        swal.close();
      }, err => {
        console.log(err);
      });

    swal.showLoading();
    this.http.get(setupUrls.role.list)
      .subscribe(success => {
        this.roles = success.data;
        swal.close();
      }, err => {
        console.log(err);
      });

    swal.showLoading();



  }

  hideForm() {
    this.displayForm = false;
  }
  showForm() {
    this.displayForm = true;
  }

  processForm() {
    let url = setupUrls.staff.add;
    if (this.operation == "Update") {
      url = setupUrls.staff.update;

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

  resetForm() {
    this.obj = { Password: null };
    this.operation = "Add";
    this.hideForm();
  }

  newForm() {
    this.displayForm = true;
    this.obj = { Password: null };
    this.operation = "Add";
  }

  loadItem(id) {
    this.operation = "Update";
    this.obj = this.data.filter(item => item.id == id)[0];
    delete this.obj.Password;
    this.requirePassword = false;
    this.showForm();
  }

  deleteUser(id) {

    this.obj = this.data.filter(item => item.id == id)[0];

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((willDelete) => {

        let url = setupUrls.staff.delete;

        if (willDelete.value) {
          swal.showLoading();
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

        console.log(willDelete)
      });
  }
}
