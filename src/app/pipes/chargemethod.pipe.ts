import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chargemethod'
})
export class ChargeMethod implements PipeTransform {

  transform(value, args:string[]) : any {
    let statuses =[{status_id:1, status:"Charge with Cash"},{status_id:2, status:"Charge from Card"}];

    let state = statuses.filter(word => word.status_id == value);
    return state[0].status
  }
}
