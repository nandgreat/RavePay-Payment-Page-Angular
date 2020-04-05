import { Injectable } from '@angular/core';
//import { Observable} from 'rxjs';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor() { }

  getYesNo()
  {
    return of<any>([{id:0, title:"No"},{id:1, title:"Yes"}]);
  }

  getChargeMethod()
  {
    return of<any>([{id:0, title:"Charge with Cash"},{id:1, title:"Charge from Card"}]);
  }

  getStatus(): Observable<any>
  {
    return of<any>([{ title:"Active", id:1}, { title:"In-Active",id:2}]);
  }
}
