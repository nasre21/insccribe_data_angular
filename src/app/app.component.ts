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
}
