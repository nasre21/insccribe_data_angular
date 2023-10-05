import { EmployeServiceService } from './../../service/employe-service.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emp-caracters',
  templateUrl: './emp-caracters.component.html',
  styleUrls: ['./emp-caracters.component.css']
})
export class EmpCaractersComponent {

  constructor(private readonly employeServiceService: EmployeServiceService){
  }

  @Output() characterEmp = new EventEmitter();

  addNewICharacter(event: String) {
    this.employeServiceService.showMessage(`Nombe de employee ${event}.`)

    this.characterEmp.emit(event);
  }


}
