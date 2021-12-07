import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PersonType } from '../PersonType';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddPersonForm: boolean = false;
  private formData: PersonType = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone: '',
  };
  private subject = new Subject<any>();
  private dataSubject = new Subject<any>();
  constructor() {}

  toggleAddPersonForm(): void {
    this.showAddPersonForm = !this.showAddPersonForm;
    this.subject.next(this.showAddPersonForm);
  }

  changeFormData(newData): void {
    this.formData = newData;
    this.dataSubject.next(this.formData);
  }

  getFormData(): PersonType {
    return this.formData;
  }

  onChangingData(): Observable<any> {
    return this.dataSubject.asObservable();
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
