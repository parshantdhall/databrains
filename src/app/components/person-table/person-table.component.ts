import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { PersonType } from 'src/app/PersonType';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css'],
})
export class PersonTableComponent implements OnChanges {
  @Input() dataSource: PersonType[] = [];
  @Output() onEditPerson = new EventEmitter();

  displayedColumns = ['firstName', 'lastName', 'email', 'phone', 'dob'];

  constructor() {}

  onClick(row: PersonType) {
    this.onEditPerson.emit(row);
    // this.dataSource.
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'dataSource': {
            this.dataSource = changes['dataSource']['currentValue'];
          }
        }
      }
    }
  }
}
