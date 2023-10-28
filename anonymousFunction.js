

//!  => Anonymous Function

//!  a. Print odd numbers in an array

// let numbers = [2,5,3,6,4,9,11,16,19,20,23,24,36,45,66,79,81]

// let oddNumbers = function(numbers){
// for(let number of numbers){
//     if(number % 2 == 0){
//         console.log(number);
//     }
// }
// }
// oddNumbers(numbers)

// <----------------------------------------------------------------------------------->

//!  b. Convert all the strings to title caps in a string array

// let words = ['html','css','javascript','bootstrap','react','node','express']

// let titleCaps = function(words){
//     for(let word of words){
//         console.log(word.charAt(0).toUpperCase()+word.slice(1));
//     }

// }
// titleCaps(words)

// <----------------------------------------------------------------------------------->

//!  c. Sum of all numbers in an array

// let numbers = [12,9,54,3,65,48,20,8,19,15,13,5,2,7]

// let sumNumbers = function(numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number
//     }
//     console.log(result);
// }
// sumNumbers(numbers)

// <----------------------------------------------------------------------------------->

//!  d. Return all the prime numbers in an array

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,13]

// let result  = numbers.filter((val) =>{
//     for(let i = 2; i< val; i++){
//         if(val % i ==0){
//             return false
//         }
//     }
//     return val
// })
// console.log(result);

// <----------------------------------------------------------------------------------->

//!  e. Return all the palindromes in an array

// let words = ['civic','noon','radar','html','css','php','react','refer','mom','mam','dad','level']

// let palindromeWord = function(words){
//     for(let word of words){
//        let reverseWords = word.split('').reverse().join('')
//        if((words.indexOf(reverseWords))> -1){
//         console.log(reverseWords);
//        }
//     }
// }
// palindromeWord(words)

// <----------------------------------------------------------------------------------->

//!  f. Return median of two sorted arrays of the same size.

// let arr1 = [6,7,1,2,3,10,8,4,9,5]

// let median = function(val){
//     let sortArr = val.sort((a,b)=> a-b)
//     let divArr = Math.floor(sortArr.length/2)  
//     let result = val.length % 2 !== 0 ? sortArr[divArr] : (sortArr[divArr-1] + sortArr[divArr])/2;
//     console.log(result);
// }
// median(arr1)

// <----------------------------------------------------------------------------------->

//!  g. Remove duplicates from an array

// let arr = [2,3,10,4,9,5,6,7,2,8,9,5,10]

// let removeDup = function(array){
//     let result = [];
//     for(let i of arr){
//         if(result.indexOf(i) == -1){
//             result.push(i)
//         }
//     }
//     console.log(result);
// }
// removeDup(arr)

// <----------------------------------------------------------------------------------->

//!  h. Rotate an array by k times

// let arr1 = [1,2,3,4,5]

// HowManyTimes = 3

// let arrayRotate = function(val, k){
//     for (let i = 0; i < k; i++) {
//      val.unshift(val.pop()) 
//     }
//     return val
// }
// console.log(arrayRotate(arr1,HowManyTimes));