class person{
    // properties
    // methods
    constructor(name,age,course){
        this.name = name
        this.age = age
        this.course = course
    }
    
    greet(){
        console.log(`Hi my name is ${this.name} and i'm ${this.age}`);
        
    }

}



class course extends person{
    getCourse(){
        console.log(`my course is ${this.course}`);
        
    }
}

var c1 = new course('savita',20,"mern")
c1.greet()
c1.getCourse()



// var p1 = new person('savita',20)
// var p2 = new person('kavita',23)

// p1.greet()
// p2.greet()