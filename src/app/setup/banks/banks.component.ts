import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import swal from 'sweetalert2';
import { setupUrls } from '../setup_urls';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  title = "Available Banks";
  operation = "Add";
  displayForm = false;
  data=[];
  obj={};
  status = [];



  constructor(public http: HttpService, public generics: GenericService) { }

  ngOnInit() {
    swal.showLoading();
    this.http.get(setupUrls.banks.list)
      .subscribe(success =>{
        this.data = success.data;
        console.log(this.data);
        swal.close();
      }, err=>{
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

  hideForm()
  {
    this.displayForm = false;
  }

  showForm()
  {
    this.displayForm = true;
  }


  processForm(){
    let url = setupUrls.banks.add;
    if(this.operation =="Update")
      url = setupUrls.banks.update;
    this.save(url);
  }
  save(url)
  {
    swal.showLoading();
    this.http.post(url, this.obj)
      .subscribe(success =>{
        this.data = success.data;
        this.resetForm();
        swal("Success",success.message,"success");
      }, err=>{
        console.log(err);
        swal("Error",err.error.message,"error");
      })
  }

  loadItem(id){
    this.operation ="Update";
    this.obj = this.data.filter(item => item.id == id)[0];
    this.showForm();
  }

  resetForm(){
    this.obj ={};
    this.operation ="Add";
    this.hideForm();
  }
  newForm(){
    this.obj ={};
    this.operation ="Add";
    this.showForm();
  }
}
