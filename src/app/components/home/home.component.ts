import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormdataService } from 'src/app/services/formdata.service';
import { PersonType } from '../../PersonType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  personData: PersonType[] = [];

  constructor(
    private router: Router,
    private formDataService: FormdataService
  ) {}

  addPerson(person: PersonType) {
    // this.personData = [...this.personData, person];
    this.formDataService.addPersons(person).subscribe((val) => {
      this.personData = val;
    });
  }

  editPerson(person: PersonType) {
    // console.log(person);
    this.router.navigate(['/edit'], { state: { data: person } });
  }

  ngOnInit(): void {
    if (history.state.data) {
      this.personData = history.state.data;
    }
    this.formDataService.getPersons().subscribe((val) => {
      this.personData = val;
    });
  }
}
