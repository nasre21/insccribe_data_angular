import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildDataComponent } from './components/child-data/child-data.component';
import { EmpCaractersComponent } from './components/emp-caracters/emp-caracters.component';
import { EmployeServiceService } from './service/employe-service.service';
import { EmployeeClassService } from './service/employee-class.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildDataComponent,
    EmpCaractersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    EmployeServiceService,
    EmployeeClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
