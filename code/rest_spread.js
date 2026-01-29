// ...rest and ...spread


// function sum(a,b){
//     console.log(a+b);
    
// }

// sum(12)
// sum(12,12)
// sum(12,120,1200)



// function sum(a,b,...c){
//     // console.log(c);
//     console.log(a+b+c);
//     console.log(typeof a);
//     console.log(typeof b);
//     console.log(typeof c);
    
// }
// // sum(12,12)
// sum(12,120,1200)
// sum(12,120,1200,12000)

// function sum(...c){
//     var total = 0
//     for(var i of c){
//         total += i
//     }
//     console.log(total);
    
// }
// // sum(12,12)
// sum(12,120,1200)
// sum(12,120,1200,12000)

// spread

var arr = [1,2,3]
var arr1 = [4,5,...arr,6]

// console.log(arr1);

// coping array
var arr = [1,2,3]
var arr_copy = [...arr]

console.log(arr);
console.log(arr_copy);


