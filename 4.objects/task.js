function Student(name, gender, age) {
  this.name = name;
  this. gender = gender;
  this.age = age;
}
//const student_1 = new Student("Alex", "man", 20);
//const student_2 = new Student("Lev", "man", 21);


Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
  

if (this.marks === undefined) {
  this.marks = [mark];

  } else {

  this.marks.push(mark);
  }
}


Student.prototype.addMarks = function(...mark) {

  if (this.marks === undefined) {

    this.marks = [];
    this.marks.push(...mark);

  } else {

    this.marks.push(...mark);
  }
};

Student.prototype.getAverage = function average() {

  const sum = this.marks.reduce((acc, item) => acc += item);
  const length = this.marks.length;
  return sum / length;
  };
    

  Student.prototype.exclude = function(reason) {

    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }



// ваш код для остальных методов