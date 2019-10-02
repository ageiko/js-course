//task 1 
{let myVar='baNaNa';
myVar = myVar[0].toUpperCase() + myVar.slice(1).toLowerCase();
console.log(myVar);
}

//task 2
{
let height = '0.6vh'; 
let width ='0.7vh';
let divP = 2*(parseFloat(height)*100 + parseFloat(width)*100)/100 + height.slice(-2);
console.log(divP)
}

//task3
{let merged = true; 
let unmerged = !merged;
merged = +merged;
console.log(merged)   
}

// task 4
{let a = 0; 
b = "0"; 
c = null; 
d = false;
let e = (a == b) == (c == d);
console.log(e);
h = (a == b == c) == d;
console.log (h);
}

// task 5
{let k = 3;
console.log(++k === k++);
console.log(k++ === ++k);
}

// task 6
{
let word = 'clicklogiq';
let kk = word.length > 3 ? console.log(25) : console.log('green')
let bb;
if (word.length > 3) {
    bb = 25    
} else {
    bb = 'green'
};
console.log (bb);    
let mm;
switch(word.length > 3){
    case true:
        mm = 25;
        break;
    default:
        mm = 'green'
    };
console.log (mm);
}

//task 7
{let apples = 3;
let pears = -9;
let oranges = 7;
let color = 'Red';
check = true;
if (apples > oranges) {
    if (oranges < pears) {
        console.log (!check)
    } else {
        if (!color) {
            console.log (check)
        } else {
            console.log (!check)
        }
    }    
} else {
    if (pears < apples) {
        console.log (check)
    } else { 
        if (!color) {
            console.log (check)
        } else {
            console.log (!check)
    }
}    
}
}

//test 8 
{for (let b = 80; b > 3; --b) {
    if (b%2 == 0) {
        console.log(b)
    }
}
}

{let p = 7;
while (p < 42) {
        if (p%2 == 1) {
        console.log(p)
    }
    ++p
}
}