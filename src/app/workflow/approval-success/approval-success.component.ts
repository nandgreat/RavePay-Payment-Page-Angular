import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-approval-success',
  templateUrl: './approval-success.component.html',
  styleUrls: ['./approval-success.component.scss']
})
export class ApprovalSuccessComponent implements OnInit {

  id =0;
  type ="";
  data="";
  constructor(protected route: ActivatedRoute, protected http: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params);
      if (params['id']){
        this.data = params['id'];
      }
        
      if (params['type'])
        this.type = params['type'];
    });
    //this.getApprovalList();
  }
}