import { Component } from '@angular/core';
import {  PersonInfo, type JsonPersonInfoType} from '../model/person-info.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students!: PersonInfo[] ;

  ngOnInit() {
    //get the data from the json file
    fetch('/TestTechnique/assets/data.json')
    .then(response => {
      return response.json();
    }).then(data => {
      //extract the students from the data

      this.students = data.map((item: JsonPersonInfoType) =>
          PersonInfo.fromJson(item)
      ).filter((teacher: Pick<PersonInfo, "isTeacher">) => teacher.isTeacher === false);
      
      // sort the students by house
      this.students.sort((a, b) => a.isOlderInHouseThan(b));

      
      console.log("************************",this.students);
    });
}
}
