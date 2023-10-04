import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emp-caracters',
  templateUrl: './emp-caracters.component.html',
  styleUrls: ['./emp-caracters.component.css']
})
export class EmpCaractersComponent {

  @Output() characterEmp = new EventEmitter();

  addNewICharacter(event: String) {
    this.characterEmp.emit(event);
  }


}
