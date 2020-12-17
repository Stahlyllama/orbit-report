export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
//constructor is now inside our class, is now explicitly defined. 
//one major TS diff is we need to declaere the class properties and their respective types upfront typically you'd plac these at the top of the class.  
  constructor (name:string, type:string, launchDate:string, orbitType:string,  operational:boolean){
      this.name= name;
      this.type= type;
      this.launchDate= launchDate;
      this.orbitType= orbitType;
      this.operational= operational;
  }
shouldShowWarning (): boolean {
if (this.type === 'Space Debris') {
  return true;
};
}
}