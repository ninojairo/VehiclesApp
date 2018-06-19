import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: any[];

  constructor(private  _vehiclesService: VehiclesService) {

    this._vehiclesService.getVehicles().subscribe(res=>{
      console.log(res);
      this.vehicles = res;
    
    });
    

    


   }

  ngOnInit() {
  }

}
