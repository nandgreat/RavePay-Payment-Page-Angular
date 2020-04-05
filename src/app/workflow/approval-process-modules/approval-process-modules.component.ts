import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { approvalURL } from '../workflow-url';
import swal from 'sweetalert2';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-approval-process-modules',
  templateUrl: './approval-process-modules.component.html',
  styleUrls: ['./approval-process-modules.component.scss']
})
export class ApprovalProcessModulesComponent implements OnInit {

  operation = "Add";
  obj ={};
  displayForm= false;
  data= [];
  

  constructor(public http: HttpService, protected generics: GenericService) { }

  ngOnInit() {

    this.http.get(approvalURL.approvalprocessmodules.all)
    .subscribe(success=>{
      this.data = success.data;
    }, error=>{
      console.log(error);
    });

   
    
  }

  showForm()
  {
    this.displayForm = true;
  }
  hideForm()
  {
    this.displayForm = false;
  }

  processForm()
  {
    let url = approvalURL.approvalprocessmodules.add;
    if(this.operation=="Update")
      url = approvalURL.approvalprocessmodules.update;
    this.save(url);
  }

  save(url)
  {
    this.http.post(url, this.obj)
    .subscribe(success=>{
      this.data = success.data;
      swal("Success", success.message, 'success');
      this.hideForm();
      this.resetForm();
    }, error=>{
      console.log(error);
      swal("Error", error.message || "Some Error Occured", 'error');
    });
  }

  loadItem(id)
  {
    let value = this.data.filter(item=> item.id == id)[0] || {};
    this.obj = value;
    this.operation ="Update";
    this.showForm();
  }

  resetForm()
  {
    this.obj = {};
    this.operation ="Add";
  
  }
}
