import { Component } from '@angular/core';
import { PersonInfo, type JsonPersonInfoType } from '../model/person-info.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  teachers!: PersonInfo[] ;

  ngOnInit() {
    //get the data from the json file
    fetch('/TestTechnique/assets/data.json')
    .then(response => {
      return response.json();
    }).then(data => {
      //extract the teachers from the data
      this.teachers = data.map((item: JsonPersonInfoType) =>
          PersonInfo.fromJson(item)
      ).filter((teacher: Pick<PersonInfo, 'isTeacher'>) => teacher.isTeacher === true);
      
      // sort the teachers by arrival date
      this.teachers.sort((a, b) => {
        if (a.arrivalDate > b.arrivalDate) {
          return 1;
        }
        if (a.arrivalDate < b.arrivalDate) {
          return -1;
        }
        return 0;
      });
      
      console.log("************************",this.teachers);
    });
}
}
