import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonType } from '../PersonType';

let data: PersonType[] = [
  {
    firstName: 'Parshant',
    lastName: 'Dhall',
    email: 'aa@aa1.com',
    dob: 'Tue Dec 07 2021 18:28:19 GMT+1100 (Australian Eastern Daylight Time)',
    phone: '12345678',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'aa@aa2.com',
    dob: 'Tue Dec 07 2021 18:28:19 GMT+1100 (Australian Eastern Daylight Time)',
    phone: '12345678',
  },

  {
    firstName: 'Santa',
    lastName: 'Claus',
    email: 'aa@aa3.com',
    dob: 'Tue Dec 07 2021 18:28:19 GMT+1100 (Australian Eastern Daylight Time)',
    phone: '12345678',
  },

  {
    firstName: 'Dummy',
    lastName: 'Person',
    email: 'aa@aa4.com',
    dob: 'Tue Dec 07 2021 18:28:19 GMT+1100 (Australian Eastern Daylight Time)',
    phone: '12345678',
  },
];

@Injectable({
  providedIn: 'root',
})
export class FormdataService {
  constructor() {}

  getPersons(): Observable<PersonType[]> {
    return of(data);
  }

  addPersons(newPerson): Observable<PersonType[]> {
    data = [...data, newPerson];
    return of(data);
  }

  editPersons(oldPerson, updatePerson): Observable<PersonType[]> {
    const i = data.indexOf(oldPerson);
    if (i !== -1) {
      data[i] = updatePerson;
    }
    return of(data);
  }
}
