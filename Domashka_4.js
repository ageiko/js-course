//task 1
// {const dog = {};
// console.log(dog);
// dog.name = 'Moochskctar'
// console.log(dog);
// dog.age = 500;
// console.log(dog);
// dog.sex = 'Male'
// console.log(dog);
// dog.sex = 'unknown'
// console.log(dog);
// delete dog.age;
// console.log(dog);
// }

//task 2
// {isEmpty = (example) => {
//     if (Object.keys(example).length === 0) {
//         return true;
//     } else {
//         return false;
//     };
// }
// example = {prop1:2, prop2:3};
// console.log(isEmpty(example));
// }

//task 3
// {const QTY = {
//     Dogs: 100000,
//     Cats: 1625476540,
//     Bananas: 155330
// }

// const animals = QTY.Dogs + QTY.Cats;
// console.log(animals);
// }

// //task 4
// {mumu = (obj) => {
//     result = {}
//     Object.assign(result, obj);
//     for (x in result) {
//         if (typeof result[x] === 'number') {
//             result[x] = result[x]* 5;    
//         }     
//     }
//     return result;
// }
// obj = {p1:1, p2:2, p3:3, p4:'dog'};
// console.log(mumu(obj));
// console.log(obj);
// }

//task 5
// {getName = (obj) => {
//     return this.name;
// }

// o1 = {
//     age:25, 
//     name:'Kate',

//     getName() {
//         return this.name;
//     }
// }

// o2 = {
//     name:'Leo', 
//     age:35,

//     getName() {
//         return this.name;
//     }
// }

// console.log(o1.getName());
// console.log(o2.getName());
// }

//task 6
{ class Controller {
    constructor(abc){
        this.finished = false; 
        this.done = 5;
        this.attempts = 44;
        this.getAt = function() {
            return this.attempts;
        };
        this.changeStatus = function() {
            this.finished = !this.finished;
        }
    }

 let amazing = new controller();

 console.log(amazing);
 console.log(amazing.getAt());
 amazing.changeStatus();
 console.log(amazing);

}
module.exports = Controller;
}
