function getTime() {
    document.getElementById("time").innerHTML = new Date().toLocaleString();
}
function getCharSet(){
    document.getElementById("charSet").innerHTML=document.charset.toString();
    const student =new Student("abby",27);
    const student1=new Student("lily",23);
    console.log(student.toString());
    console.log(student1.toString());
}
class Student{

      constructor(name,age){
          this.name=name;
          this.age=age;
      }
       toString() {
          return "name: "+this.name+" "+"age: "+this.age;
      }
}