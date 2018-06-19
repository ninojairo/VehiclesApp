import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Form} from '@angular/forms'



import { AppComponent } from './app.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

//Services
import { VehiclesService } from './services/vehicles.service';
import { HttpModule } from '@angular/http';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    VehiclesComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
     
    
  ],
  providers: [
    VehiclesService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
