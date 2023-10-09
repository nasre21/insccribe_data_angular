import { Component } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeServiceService } from '../../service/employe-service.service';
import { EmployeeClassService } from '../../service/employee-class.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-components',
  templateUrl: './update-components.component.html',
  styleUrls: ['./update-components.component.css']
})
export class UpdateComponentsComponent {

  employees:Employee[] = []

  accion!:number;

  constructor(private readonly router: Router,private employeService: EmployeServiceService, private employeeClass: EmployeeClassService, private route: ActivatedRoute) {
     //this.employees = employeeClass.employees
  }



  ngOnInit(): void {

    this.accion = parseInt(this.route.snapshot.queryParams['accion'])
    this.employees = this.employeeClass.employees
    this.indice = this.route.snapshot.params['id'] // later we will review it
    let anEmploye:Employee = this.employeeClass.findEmployes(this.indice)
    this.cuadroNombre = anEmploye.nombre
    this.cuadroApellido= anEmploye.apellido
    this.cuadroCargo = anEmploye.cargo
    this.cuadroSalary= anEmploye.salary

  }
  // updateElement(): void{
  //   let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalary)
  //   this.employeService.showMessage(`Nombe de employee ${myEmployee}.`)
  //   this.employeeClass.updateEmploye(this.indice, myEmployee)
  //   this.router.navigate(['']);

  // }


  cuadroNombre!: string;
  cuadroApellido!: string;
  cuadroCargo!: string;
  cuadroSalary!: number;

  indice!: number;


  goToStart(): void {

    this.router.navigate(['']);
  }

  // deleteElement():void{
  //   this.employeeClass.deleteEmployee(this.indice)
  //   this.router.navigate(['']);
  // }


  accionElement(): void{
      if(this.accion==1){
        let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalary)
        // this.employeService.showMessage(`Nombe de employee ${myEmployee}.`)
        this.employeeClass.updateEmploye(this.indice, myEmployee)
        this.router.navigate(['']);
      }

    else{
      this.employeeClass.deleteEmployee(this.indice)
      this.router.navigate(['']);
    }


  }

}






