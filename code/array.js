// arraya is also like an variable that can store multiple data at a time

// var stud = "namita"
// var stud_age = 12

// array

// var stud_details = Array('namita',12,9876543210)
// var stud_details = ['namita',12,9876543210]

// access the element

// var stud_details = ['namita',12,9876543210]
// console.log(stud_details[1]);


// 1D array
// types of array
// var stud_details = ['namita',12,9876543210]

// 2D array
// var stud_details = [
//     ['namita',12],
//     ['namit',13],
//     ['nami',14]
// ] 

// 3D array

// var len = stud_details.length
// console.log(len);

// var stud_details = [
//     [['namita','verma'],[12,9876]],
//     [['namit','sharma'],[12,9876]],
//     [['nami','kumar'],[12,9876]]
    
// ] 
// console.log(stud_details[1][0][1]);

// var len = stud_details[0].length
// console.log(len);


var stud_details = ['namita',12,9876543210]

// add at last
stud_details.push("new data at end")

// add at starting
stud_details.unshift("new data at start")

// remove at last
stud_details.pop()

// add at starting
stud_details.shift()

stud_details = [3,2,4,1,4,5,3,2,4,6,7,4]

// to sort
// stud_details.sort()


// to reverse
// stud_details.reverse()
// console.log(stud_details);

// to fill
// stud_details.fill(50)
// stud_details.fill(50,2)
// stud_details.fill(50,1,2)

// find value
// var find = stud_details.indexOf(4)
// var find = stud_details.indexOf(4,3)
// var find = stud_details.indexOf(30)



// for(i=0;i<5;i++){
//     console.log(stud_details[i]);
    
// }
var index_list = [];
var len = stud_details.length


for(i=0;i<len;i++){
    
    var a = stud_details.indexOf(4,a+1)
    if(a == -1){
        break
    }
    index_list.push(a)
    // console.log(a);
}
console.log(index_list);

// console.log(find);

