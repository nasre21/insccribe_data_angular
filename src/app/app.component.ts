import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees list';
  employees:Employee[] = [

    new Employee ('oufel','nasser','prisedent',2431),
    new Employee ('oufel','blask','prisedent',221),
    new Employee ('oufel','jenif','prisedent',141),
    new Employee ('oufel','recar','prisedent',241)

  ]


  addElement(){
    let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalary)
    this.employees.unshift(myEmployee)

  }


  cuadroNombre!: string;
  cuadroApellido!: string;
  cuadroCargo!: string;
  cuadroSalary!: number;


}
