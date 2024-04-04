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
    //on recupere les inffos contenus dans le tichier json data.json
    fetch('../../assets/data.json')
    .then(response => {
      return response.json();
    }).then(data => {
      //on recupere les infos de l'utilisateur sil est uniquement teacher
      this.teachers = data.map((item: JsonPersonInfoType) =>
        //on verifie qi cest enseignat avant de creer
          PersonInfo.fromJson(item)
      ).filter((teacher: Pick<PersonInfo, 'isTeacher'>) => teacher.isTeacher === true);
      
      // On trie par date, ancien au plus recent
      this.teachers.sort((a, b) => {
        if (a.arrivalDate > b.arrivalDate) {
          return 1;
        }
        if (a.arrivalDate < b.arrivalDate) {
          return -1;
        }
        return 0;
      })

      
      
      console.log("************************",this.teachers);
    });
}
}
