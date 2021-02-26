class School {
    constructor (name, level, numberOfStudents) {
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumber){
      this._numberOfStudents=newNumber;
    }
    quickFacts(){
  
    }
    static pickSubstituteTeacher(){
  
    }
  }
  
  class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy){
      super(name, level, numberOfStudents);
      this._pickupPolicy=pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor(name, level, numberOfStudents){
      super(name, level, numberOfStudents);
    }
  }
  
  class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams){
      super(name, level, numberOfStudents);
      this._sportsTeam=sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeam;
    }
  }
  