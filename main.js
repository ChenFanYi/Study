class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    show(){
        return this.name+this.age;
    }
}
function time(){
    document.getElementById("pid").innerHTML=new Date().toDateString();
}