import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class VehiclesService {

  URLVehicles: string = "https://vehiclesapp-da823.firebaseio.com/Vehicles.json"

  constructor(private _http : Http) { }

  getVehicles(){
    return this._http.get(this.URLVehicles).map(res=>{
      console.log(res.json());
      return res.json();
    })


  }

}
