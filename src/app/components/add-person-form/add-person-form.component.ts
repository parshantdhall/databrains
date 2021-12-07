import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { PersonType } from 'src/app/PersonType';

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css'],
})
export class AddPersonFormComponent implements OnInit {
  @Output() onAddPerson = new EventEmitter();

  // regex for email validation
  regx = `/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g`;
  showAddPersonForm: boolean;
  subscription: Subscription;
  formData: PersonType = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone: '',
  };
  // *TODO add regex for phone number as well

  constructor(private formBuilder: FormBuilder, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((val) => {
      this.showAddPersonForm = val;
    });

    this.subscription = this.uiService.onChangingData().subscribe((val) => {
      this.formData = val;
    });
  }

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
      this.onAddPerson.emit(newPerson);
      this.personForm.reset();
      this.uiService.changeFormData({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        phone: '',
      });
    }
  }

  onChanges(): void {
    this.personForm.valueChanges.subscribe((val) => {
      this.uiService.changeFormData(val);
    });
  }
  ngOnInit(): void {
    this.onChanges();
  }
}
