import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildDataComponent } from './components/child-data/child-data.component';
import { EmpCaractersComponent } from './components/emp-caracters/emp-caracters.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
