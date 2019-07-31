export class Employee {
    
    eid: number;
    ename: string;
   
    eaddress: string;
gender:string;
    constructor(eid:number, ename:string,  eaddress:string,gender:string) {
        this.eid = eid;
        this.ename = ename;
       
        this.eaddress = eaddress;
this.gender=gender;
    }
}