import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  
  transform(value: any): any {
    let keys = [];

    
    for (let key in value){

      keys.push(key);
    }

    return keys;
  }

}

// export class KeysPipe implements PipeTransform {

  
//   //Value: Objeto con todas las llaves
//   transform(value: any): any {
    
//     let keys =[];
//     for(let key in value){
//       keys.push(key);
//     }
    
//     return keys;
//   }

// }


