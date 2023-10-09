import { Component } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeServiceService } from '../../service/employe-service.service';
import { EmployeeClassService } from '../../service/employee-class.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'Employees list';

  employees:Employee[] = []

constructor(private employeService: EmployeServiceService, private employeeClass: EmployeeClassService){

  //this.employees = employeeClass.employees
}

ngOnInit(): void {
  this.employeeClass.obtainEmployee().subscribe(misEmpleados => {
    console.log('respuesta', misEmpleados);

    this.employees = Object.values(misEmpleados)
  });
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
