import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FormClass } from '../class/form-class';
import { FormResponse } from '../class/form-response';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService <C extends FormClass>{

  constructor(private http:HttpClient) { }

  private url="http://localhost:8080/api/main";

  save(item:C):Observable<FormResponse<C>>{
    return this.http.post(`${this.url}/save`,item).pipe(map((data:FormResponse<C>)=>data));
  } 
  
}
