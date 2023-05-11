import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { login } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }

  //Funcion para logear al usuario 
  login(body: login): Observable<any>{
    return this.http.post(environment.server+"", body);
  }
}
