import { Employee } from './../employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  sendEmploye(employees: Employee[]){
    this.http.post('https://my-costumers-16e9a-default-rtdb.europe-west1.firebasedatabase.app/datos.json', employees).subscribe(res => console.log(`respuesta${res}`));
  }
}
