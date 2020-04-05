import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(protected http: HttpClient) { }

  get(url)
  {
    return this.http.get<any>(url);
  }

  post(url,data)
  {
    return this.http.post<any>(url,JSON.stringify(data));
  }
}
