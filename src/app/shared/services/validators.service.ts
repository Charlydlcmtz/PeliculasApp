import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  isFieldOneEqualFieldTwo(field1: string, field2: string){
    if ( field1 !== field2 ) {
      return false;
    }

    return true;
  }
}
