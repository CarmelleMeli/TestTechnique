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
    //on recupere les inffos contenus dans le tichier json data.json
    fetch('../../assets/data.json')
    .then(response => {
      return response.json();
    }).then(data => {
      //on recupere les infos de l'utilisateur sil est uniquement teacher

      this.students = data.map((item: JsonPersonInfoType) =>
        //on verifie qi cest enseignat avant de creer
          PersonInfo.fromJson(item)
      ).filter((teacher: Pick<PersonInfo, "isTeacher">) => teacher.isTeacher === false);
      
      // On trie par date, ancien au plus recent
      this.students.sort((a, b) => a.isOlderInHouseThan(b));

      
      console.log("************************",this.students);
    });
}
}
