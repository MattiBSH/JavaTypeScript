var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    
    getFirstName : function() {
        return this.firstName;
      },
      getId : function() {
        return this.id;
      }

  };
   function fullName() {
    return this.firstName + " " + this.lastName;
  }

  console.log(person.getFirstName());
  console.log(person.getId());
  //console.log(person.fullName()); this doesn't work
  console.log(fullName.apply(person))//this does