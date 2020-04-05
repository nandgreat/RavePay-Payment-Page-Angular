import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StaffStatusPipe implements PipeTransform {

  transform(value, args:string[]) : any {
    let statuses =[{status_id:1, status:"Active"},{status_id:2, status:"In-Active"},{status_id:"", status:"In-Active"},{status_id:0, status:"In-Active"},{status_id:"", status:"In-Active"},{status_id:null, status:"In-Active"}];
    
    let state = statuses.filter(word => word.status_id == value);
    return state[0].status
  }
}
