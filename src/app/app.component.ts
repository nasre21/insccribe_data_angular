import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeServiceService } from './service/employe-service.service';
import { EmployeeClassService } from './service/employee-class.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employees list';

  employees:Employee[] = []

constructor(private employeService: EmployeServiceService, private employeeClass: EmployeeClassService){

  //this.employees = employeeClass.employees
}

  ngOnInit(): void {
    this.employees = this.employeeClass.employees
  }




  addElement(){
    let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalary)
    this.employeService.showMessage(`Nombe de employee ${myEmployee}.`)
    this.employeeClass.addemployeeService(myEmployee)

  }


  cuadroNombre!: string;
  cuadroApellido!: string;
  cuadroCargo!: string;
  cuadroSalary!: number;


}
