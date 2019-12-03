//task 1
// {function multiplex(numbers){
//   if (numbers.length == 0) {
//       return new Error ('No existing data');
//   }  
//   let n = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] == "number") {
//         n = n*numbers[i];   
//     } else {
//        return new Error ('Argument Error'); 
//     }         
//   }
//   return n;
// }
// let m = multiplex([500, 23, 41, 2, 7, 5]);
// console.log(m);
// }

// {let m = function multiplex(numbers){
//     if (numbers.length == 0) {
//         return new Error ('No existing data');
//     }  
//     let n = 1;
//     for (let i = 0; i < numbers.length; i++) {
//       if (typeof numbers[i] == "number") {
//           n = n*numbers[i];   
//       } else {
//         return new Error ('Argument Error');
//       }         
//     }
//     return n;
// }
// let k = m([61, 'hello']);
// console.log(k);
// }

// {multiplex = numbers => {
//     if (numbers.length == 0) {
//         return new Error ('No existing data');
//     }  
//     let n = 1;
//     for (let i = 0; i < numbers.length; i++) {
//       if (typeof numbers[i] == "number") {
//           n = n*numbers[i];   
//       } else {
//         return new Error ('Argument Error'); 
//       }         
//     }
//     return n;
//   }
//   let m = multiplex([]);
//   console.log(m);
//   }

//task 2
// {function createCounter() {
//     let b = 666;
//     return function counter(a, c) {
//       if (c) {
//         return b = 666;
//       }
//       if (typeof a === 'number') {
//           return b = b + a;
//     }
//     return b;
// }
// }
// let counter1 = new createCounter();
// let counter2 = new createCounter();
// let counter3 = new createCounter();

// console.log(counter1(5));
// console.log(counter1(21));
// console.log(counter1('hello world'));
// console.log(counter2(600));
// console.log(counter2(2));
// console.log(counter2(7, true));
// console.log(counter2(1));
// console.log(counter3());
// console.log(counter2());
// console.log(counter1());
// }

//task 3
// {function findOne(mass, a){
//   try{  
//     if (mass.length == 0) {
//       throw new Error('Array is empty');
//   }
//   for (let i = 0; i < mass.length; i++) {
//     if (typeof mass[i] != "number") {
//       throw new Error('Array contain not a number'); 
//     } 
//   }
//     let b; 
//     switch (a) {
//       case 'min':
//         b = Math.min.apply(null, mass);
//       break;
//       case 'max':
//         b = Math.max.apply(null, mass);
//       break;
//       case 'avg':
//         let total = 0
//         for (let i = 0; i < mass.length; i++) {
//         total += mass[i];
//         }
//         b = total / mass.length;
//       break;
//       default:
//         throw new Error ('Operation not found');
//         }
//     return b;
//     } catch (error) {
//     console.log (error);
//     }   
//   }
// console.log(findOne([7, 45, 21, -2, 12, 11, 1], 'avg')); //13.571428
// console.log(findOne([-7,-4,-1,-2, -21, 11, 1], 'min')); // -21
// console.log(findOne([], 'max')); //Array is empty
// console.log(findOne([true, false, null], 'avg')); //Array contain not a number
// console.log(findOne([3], 'max')); //3
// }
 
//task 4
// {function onDone(callback) {
//   return 'Successfull';
// }
// function onError(callback) {
//   return 'Failed';
// }
// function condition(a = 58, b = 24) {
//     let c = a - b;
//     if (c > 30) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// function conditionManager(condition, onDone, onError) {
//   try {
//     if (typeof condition == !'function' || typeof onDone == !'function' || onError == !'function' && !condition || !onDone || !onError) {
//       throw new Error('All arguments are required and must be functions');
//     }
//   if (condition === true) {
//       console.log(onDone());
//     } else {
//       console.log(onError());
//     }
//   }
//   catch (e) {
//   console.log(e.message);
// }
// }
// conditionManager(condition(62), onDone, onError);
// conditionManager(condition(), onDone, onError);
// conditionManager(condition(600, 1000), onDone, onError);   
// }

//task 5
// {let t1 = function (a,b) {
//     let s = a + b;
//     return s;
// }
// let t2 = t1;
// t1.property = 'nice';

// console.log(t1.property);
// console.log(t2.property);
//}

//task 6
// {let testArray = []
// arrController = (action, val) => {
// if (action = !'add' || !'remove' || !'clear' || !'view' || typeof action != 'string') {
//   throw new Error ('Operation is not available');
// }
// switch (action) {
//   case 'add':
//     testArray.push(val);
//     break;
//   case 'remove':
//     i = testArray.indexOf(val);
//     while (i > -1) {
//       testArray.splice(i, 1);
//       i = testArray.indexOf(val);
//       return testArray;
//     }
//     break;
//   case 'clear':
//     testArray.length = 0;
//     break;
//   default:
//     return testArray;
//   }
// }
// console.log(arrController());
// console.log(arrController('view'));
// console.log(arrController('add', 0));
// console.log(arrController('add','Hello'));
// console.log(arrController('add', false));
// console.log(arrController('add', 142));
// console.log(arrController('remove', false));
// console.log(arrController('clear'));
// } 

// task 7
// {
//     let arr = [5, 7, 11, 13];
//     let arr2 = arr.concat(21);

//     console.log(arr);
//     console.log(arr2);
// }

//task 8
// {
//     let arr6 = [16, 31, 24, 7];
//     arr6.push(function() {
//         return this;
//     });
//     console.log(arr6[arr6.length-1]());

// }

//task 9
// {

//     let arr7 = [1, 3, 5, 7, 11, 13, 3, 5, 7];
//     function arrReplaceValue(array, vtc, nv) {
//     let temp;
//     let value = 0;
//         for(i = 0; array.length > i; i++){
//         temp = array.indexOf(vtc, 0);
//         if (array[temp]== vtc) {
//         value++;
//     }
//         if (temp != -1) {
//         array[temp]= nv;}   }
//         return value;
// }
// console.log(arr7);
// console.log(arrReplaceValue(arr7,3,5));
// console.log(arr7);

// }

//task 10
// {
//     let arr1100 = ['ananas', 'banan', 'kiwi'];
//     let arr1200 = ['gasoline', 'kerosene', 'chlorhexidine'];
//     let arr1300 = arr1100.concat(arr1200);

//     console.log(arr1300);
// }
