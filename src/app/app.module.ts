import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildDataComponent } from './components/child-data/child-data.component';
import { EmpCaractersComponent } from './components/emp-caracters/emp-caracters.component';
import { EmployeServiceService } from './service/employe-service.service';
import { EmployeeClassService } from './service/employee-class.service';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { WhoComponentComponent } from './components/who-component/who-component.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';

const appRoutes:Routes =[
  {path: '', component:HomeComponentComponent},
  {path: 'project', component:ProjectsComponent},
  {path: 'who', component:WhoComponentComponent},
  {path: 'contact', component:ContactComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ChildDataComponent,
    EmpCaractersComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponentComponent,
    WhoComponentComponent,
    NavBarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeServiceService,
    EmployeeClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
