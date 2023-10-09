import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeServiceService } from './employe-service.service';
import { DataServiceService } from './data-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeClassService {

  constructor(private readonly service: EmployeServiceService,private dataService: DataServiceService) { }

  obtainEmployee(): Observable<Employee> {
    return this.dataService.getUser();
  }
  employees:Employee[] = [];
  // employees:Employee[] = [

  //   new Employee ('oufel','nasser','prisedent',2431),
  //   new Employee ('oufel','blask','prisedent',221),
  //   new Employee ('oufel','jenif','prisedent',141),
  //   new Employee ('oufel','recar','prisedent',241)

  // ];


  addemployeeService(employees:Employee) {

    this.service.showMessage(`added employee: ${employees.nombre}  ${employees.apellido}  ${employees.cargo}  ${employees.salary}`)
    this.employees.push(employees)

    this.dataService.sendEmploye(this.employees)

  }

  findEmployes(indice:number){
    let anEmployes:Employee = this.employees[indice]

    return anEmployes
  }

updateEmploye(indice:number, employee:Employee){

let employeModify = this.employees[indice]
employeModify.nombre = employee.nombre
employeModify.apellido=employee.apellido
employeModify.cargo = employee.cargo
employeModify.salary = employee.salary

}

deleteEmployee(indice:number):void {
  this.employees.splice(indice,1)

}

}
