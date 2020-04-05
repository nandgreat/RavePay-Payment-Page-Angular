
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { approvalURL } from '../workflow-url';
import swal from 'sweetalert2';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-approval-limit',
  templateUrl: './approval-limit.component.html',
  styleUrls: ['./approval-limit.component.scss']
})
export class ApprovalLimitComponent implements OnInit {



    operation = "Add";
    obj ={};
    displayForm= false;
    data= [];
    Designation=[];
    ItemClass=[];
  
    constructor(public http: HttpService, protected generics: GenericService) { }
  
    ngOnInit() {
  
      this.http.get(approvalURL.approvalinstances.all)
      .subscribe(success=>{
        this.data = success.data;
      }, error=>{
        console.log(error);
      });
  
      // this.http.get(employeeURL.designation.all)
      // .subscribe(success=>{
      //   this.Designation = success.data;
      // }, error=>{
      //   console.log(error);
      // });

      // this.http.get(itemsURL.itemclass.all)
      // .subscribe(success=>{
      //   this.ItemClass = success.data;
      // }, error=>{
      //   console.log(error);
      // });
  
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
      let url = approvalURL.approvalimit.add;
      if(this.operation=="Update")
        url = approvalURL.approvalimit.update;
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
