import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/employee.model';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent {

@Input()  listEmp:Employee
@Input()  indice:number

}
