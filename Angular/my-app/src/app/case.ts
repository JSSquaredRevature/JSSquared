export class Case {
	caseid: number;
	firstname: string;
	lastname: string; 
	birthdate: Date;
	rating: number;
	sw: object;
	placement: object;
	siblings:Case[];
	youngsiblings: Case[];

	setCaseid(caseid : number) {
		this.caseid = caseid;
	}
  }