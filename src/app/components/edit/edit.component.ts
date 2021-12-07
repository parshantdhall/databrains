import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonType } from 'src/app/PersonType';
import { FormdataService } from 'src/app/services/formdata.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  formData: PersonType = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formDataService: FormdataService
  ) {}

  personForm = this.formBuilder.group({
    firstName: [this.formData.firstName, Validators.required],
    lastName: [this.formData.lastName, Validators.required],
    email: [this.formData.email, Validators.required],
    dob: [this.formData.dob, Validators.required],
    phone: [this.formData.phone, Validators.required],
  });
  savePerson() {
    if (this.personForm.valid) {
      const date = this.personForm.value.dob.toString();
      const newPerson = {
        ...this.personForm.value,
        dob: date,
      };

      this.formDataService
        .editPersons(history.state.data, newPerson)
        .subscribe((val) => {
          this.router.navigate(['/'], { state: { data: val } });
        });

      this.personForm.reset();
    }
  }
  ngOnInit(): void {
    this.personForm.setValue(history.state.data);
  }
}
