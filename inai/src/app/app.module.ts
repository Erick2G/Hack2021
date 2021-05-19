import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
//import { ExampleComponent } from './models/example/example.component';
import { SalarioComponent } from './components/salario/salario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  //  ExampleComponent,
    SalarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
