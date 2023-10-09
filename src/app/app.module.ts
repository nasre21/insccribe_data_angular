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
import { UpdateComponentsComponent } from './components/update-components/update-components.component';
import { ErrorPersonalizedCoponenComponent } from './components/error-personalized-coponen/error-personalized-coponen.component';

import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes =[
  {path: '', component:HomeComponentComponent},
  {path: 'project', component:ProjectsComponent},
  {path: 'who', component:WhoComponentComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'update', component:UpdateComponentsComponent},
  {path: 'update/:id', component:UpdateComponentsComponent},
  {path: '**', component:ErrorPersonalizedCoponenComponent}

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
    NavBarComponentComponent,
    UpdateComponentsComponent,
    ErrorPersonalizedCoponenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EmployeServiceService,
    EmployeeClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
