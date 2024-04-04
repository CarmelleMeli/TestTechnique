import { Component } from '@angular/core';
import { PersonInfo } from '../model/person-info.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrl: './person-info.component.css'
})
export class PersonInfoComponent {
  @Input() personInfo!: PersonInfo;

  id!: number;
  firstName!: string;
  lastName!: string;
  description!: string;
  arrivalDate!: string | number | Date;
  house!: string;
  assignment?: string;
  isTeacher!: boolean;

  ngOnInit() {
    this.id = this.personInfo.id;
    this.firstName = this.personInfo.firstName;
    this.lastName = this.personInfo.lastName;
    this.description = this.personInfo.description;
    this.arrivalDate =this.personInfo.isTeacher? this.personInfo.humanDate: this.personInfo.seniority;
    this.house = this.personInfo.house;
    this.assignment = this.personInfo.assignment;
    this.isTeacher = this.personInfo.isTeacher;
  }

  get getBagde() : {text: string, color: string} {
    let text = "";
    let color = ""

    const person = this.personInfo;
    

    if (person.isTeacher) {
      text = person.assignment!;
      switch (person.assignment) {
        case 'Transfiguration':
          color = '#E9131F';
          break;
        case 'Potions':
          color = '#18A874';
          break;
        case 'Herbology':
          color = '#C7B514';
          break;
        case 'Charms':
          color = '#1D79CD';
          break;
        default:
          color = '#000000';
          break;
      }
    } else {
      text = person.house;
      switch (person.house) {
        case 'Gryffindor':
          color = '#E9131F';
          break;
        case 'Slytherin':
          color = '#18A874';
          break;
        case 'Hufflepuff':
          color = '#C7B514';
          break;
        case 'Ravenclaw':
          color = '#1D79CD';
          break;
        default:
          color = '#000000';
          break;
      }
    }
  
    return { text, color };
  }
 
  }
