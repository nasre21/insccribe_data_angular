import { Employee } from './../employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'https://my-costumers-16e9a-default-rtdb.europe-west1.firebasedatabase.app/datos.json'

  constructor(private http: HttpClient) { }

  sendEmploye(employees: Employee[]){
    this.http.post(this.apiUrl, employees).subscribe(res => console.log(`respuesta${res}`));
  }

  getUser(){
    this.http.get(this.apiUrl).subscribe(res =>{
      console.log('respuesta',res)

    })
  }
}
