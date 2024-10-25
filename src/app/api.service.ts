import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://fakestoreapi.com/products'); // replace with actual API URL
  }

  getDataById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id); // replace with actual API URL
  }


}
