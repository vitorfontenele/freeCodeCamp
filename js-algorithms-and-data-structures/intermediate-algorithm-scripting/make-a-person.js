const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let splittedName = firstAndLast.split(" ");
  this.setFirstName = function(first){splittedName[0] = first};
  this.setLastName = function(last){splittedName[1] = last};
  this.setFullName = function(firstAndLast){splittedName = firstAndLast.split(" ");}
  this.getFirstName = (() => splittedName[0]);
  this.getLastName  = (() => splittedName[1]);
  this.getFullName = (() => splittedName.join(" "));
};

const bob = new Person('Bob Ross');
bob.getFullName();