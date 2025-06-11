// let fruits = ["Apple","Mango","orange"]
// //index          0        1        2
// console.log(fruits)
// // .push

// fruits.push("Banana")
// fruits.push("Watermelon")
// console.log(fruits)

// fruits.unshift("vamshi");
// console.log(fruits)

// //unshifts adds at first
// //push adds at last

// fruits.shift()// removes element from first
// fruits.pop()// removes element from last

// // .map() and .foreach()

// let numbers = ["10","20","30","40"];
// numbers.forEach((value)=> {
// console.log(value)
// })
// // forEach is used to print all the elements
// // //in an array
// // forEach does not return value


// let num1 = [5,2,6];
// // .find() ==> Return the first match based on condition.
 
// // let output = num1.find((value) => {
// //   value >5
// // })

// // console.log(output)

// num1.find((value)=>{
//   console.log(value>5)
// })

// let num2 = [2,4,6,8,10,12];

// num2.find((value)=>{
//   console.log(value>5)
// })


// .includes()

let arr = [1,2,3,4,5]
let check = arr.includes(2)//true
console.log(check)

let arr1 = [3,6,9,1,2]
//to sort the array
console.log(arr1.sort())
console.log(arr1.reverse())

let num2 = [1,20,11,21,80,23,1053]
console.log(num2.sort((a,b) => b-a))
console.log(num2.sort((a,b) => a-b))

let arr2 = [-5,2,4,6,8]

let check = arr2.every((value) => value>1)
console.log(check)

//.some()

let arr3 = [2,5,-4,1,5,8]
let output = arr3.some((value)=> value < 0)
console.log(output)