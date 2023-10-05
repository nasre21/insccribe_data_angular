import { Component } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeServiceService } from '../../service/employe-service.service';
import { EmployeeClassService } from '../../service/employee-class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-components',
  templateUrl: './update-components.component.html',
  styleUrls: ['./update-components.component.css']
})
export class UpdateComponentsComponent {

  employees:Employee[] = []

  constructor(private readonly router: Router,private employeService: EmployeServiceService, private employeeClass: EmployeeClassService){
     //this.employees = employeeClass.employees
  }


  ngOnInit(): void {
    this.employees = this.employeeClass.employees

  }
  addElement(){
    let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalary)
    this.employeService.showMessage(`Nombe de employee ${myEmployee}.`)
    this.employeeClass.addemployeeService(myEmployee)
    this.router.navigate(['']);

  }


  cuadroNombre!: string;
  cuadroApellido!: string;
  cuadroCargo!: string;
  cuadroSalary!: number;


  goToStart(): void {

    this.router.navigate(['']);
  }

}






