export class PersonInfo {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    arrivalDate: Date;
    house: string;
    assignment?: string;
    isTeacher: boolean;
    
    static currentDate : Date = new Date("1991-11-12");

//constuctor
constructor(id: number, firstName: string, lastName: string, description: string, arrivalDate: Date, house: string, assigment:string, isTeacher: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.arrivalDate = arrivalDate;
    this.house = house;
    this.assignment = assigment;
    this.isTeacher = isTeacher;
}


//From Json // Factory
static fromJson(json: JsonPersonInfoType): PersonInfo {
    return new PersonInfo(
        json.id, json.firstName, json.lastName, json.description, 
        new Date(json.arrivalDate), 
        json.house, 
        json.assignment, 
        json.isTeacher
        );

}

//Date to string -> 12.12.2021
get  humanDate(): string {
    return  (this.arrivalDate.getMonth() + 1).toString().padStart(2,'0')+ "." + this.arrivalDate.getDate().toString().padStart(2,'0')+ "." + this.arrivalDate.getFullYear();
}

get fullName(): string {
    
    return this.firstName + " " + this.lastName;
}
//curent date : 12 Novembre 1991
get seniority(): string {
    return (numberToOrder(PersonInfo.currentDate.getFullYear() - this.arrivalDate.getFullYear()))+" year";

}


isOlderInHouseThan(other: PersonInfo): number {
    // Compare houses alphabetically
    const houseComparison = this.house.localeCompare(other.house);
    
    // If houses are different, return based on house comparison
    if (houseComparison !== 0) {
        return houseComparison;
    }
    
    // If houses are the same, compare names alphabetically
    return this.fullName.localeCompare(other.fullName);
}

}

function numberToOrder(n: number): string { 
    n = n +1;
    switch (n) {
     
        case 1: return "First";
        case 2: return "Second";
        case 3: return "Third";
        case 4: return "Fourth";
        case 5: return "Fifth";
        case 6: return "Sixth";
        case 7: return "Seventh";
        case 8: return "Eighth";
        case 9: return "Ninth";
        case 10: return "Tenth";
        default: return "Unknown";
    }
}

export type JsonPersonInfoType = { id: number; firstName: string; lastName: string; description: string; arrivalDate: string ; house: string; assignment:string; isTeacher: boolean; }