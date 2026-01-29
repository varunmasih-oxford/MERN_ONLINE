// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()



// var a = document.getElementById('a')
// console.log(a);


// var a = document.getElementsByClassName('b')[0]
// var a = document.getElementsByClassName('b')[1]

// console.log(a);

// var a = document.getElementsByTagName('h1')[0]
// console.log(a);

// var a = document.getElementsByTagName('p')[0].innerHTML
// console.log(a);
// var a = document.getElementsByTagName('p')[0].innerText
// console.log(a);

// var a = document.getElementsByTagName('p')[0].innerHTML = 'hello'
// console.log(a);
// var a = document.getElementsByTagName('p')[0].innerText = 'hey'
// console.log(a);

// var a = document.getElementsByTagName('p')[0].attributes[0]
// console.log(a);

// var a = document.getElementsByTagName('p')[0].getAttribute('class')
// console.log(a);

document.getElementsByTagName('p')[0].setAttribute('class','c')

var a = document.getElementsByTagName('p')[0].getAttribute('class')
console.log(a);
