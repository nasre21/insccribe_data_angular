import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {


  constructor() { }


showMessage(message: string){
  alert(message);


}


}
