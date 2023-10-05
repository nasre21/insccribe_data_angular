import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeServiceService } from './employe-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeClassService {

  constructor(private readonly service: EmployeServiceService) { }

  employees:Employee[] = [

    new Employee ('oufel','nasser','prisedent',2431),
    new Employee ('oufel','blask','prisedent',221),
    new Employee ('oufel','jenif','prisedent',141),
    new Employee ('oufel','recar','prisedent',241)

  ];

  addemployeeService(employees:Employee):void {

    this.service.showMessage(`added employee: ${employees.nombre}  ${employees.apellido}  ${employees.cargo}  ${employees.salary}`)
    this.employees.push(employees)

  }
}
