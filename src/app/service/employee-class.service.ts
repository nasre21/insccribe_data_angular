import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeClassService {

  constructor() { }

  employees:Employee[] = [

    new Employee ('oufel','nasser','prisedent',2431),
    new Employee ('oufel','blask','prisedent',221),
    new Employee ('oufel','jenif','prisedent',141),
    new Employee ('oufel','recar','prisedent',241)

  ];

  addemployeeService(employees:Employee):void {

    this.employees.push(employees)

  }
}
