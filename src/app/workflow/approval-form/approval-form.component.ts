import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { approvalURL } from '../workflow-url';
import swal from 'sweetalert2';

@Component({
  selector: 'app-approval-form',
  templateUrl: './approval-form.component.html',
  styleUrls: ['./approval-form.component.scss']
})
export class ApprovalFormComponent implements OnInit {

  id =0;
  type ="";
  data="";
  constructor(protected route: ActivatedRoute, protected http: HttpService, protected nav: Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      //console.log(params);
      if (params['id']){
        this.data = params['id'];
        this.approvalData.RequestID = params['id']; 
      }
        
      if (params['type'])
      {
        this.type = params['type'];
        this.approvalData.type = params['type']; 
      }
    });
    this.getApprovalList();
  }

  public listApproval=[];
  public approvalData = {ApprovalInstanceID:null, Remark:null, RequestID:null, type:"" };

  data2: any;

  public getApprovalList() {
    this.http.get(approvalURL.approvalinstances.options)
      .subscribe(success => {
        this.listApproval = success.data;
        
        //console.log(this.listApproval);
      }, error => {
        //console.log(error);
      });
  }

  public submitApprovalForm(e) {
    swal.showLoading();
    const url = approvalURL.approvals.add;
    this.save(url, e.value);
  }

  save(url, e) {
    swal.showLoading();
    this.http.post(url, this.approvalData)
      .subscribe(success => {
        this.data = success.data;
        swal.close();
        swal('Success', success.message, 'success');
        this.nav.navigate(['/approvals/approval-success',this.data, this.type]);
        //this.approveChange.emit(this.objID);
      }, error => {
        swal('Error', error.error.message, 'error');
      });
  }

}
