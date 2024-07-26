// 1-masala (2.1)
// const arr = [
//     {
//         id:1,
//         name:"Baxodir",
//         age:20,
//         hobby:"Footbal"
//     },
//     {
//         id:2,
//         name:"Anvar",
//         age:22,
//         hobby:"Basketbal"
//     },
//     {
//         id:3,
//         name:"Baxodir",
//         age:20,
//         hobby:"Footbal"
//     },
//     {
//         id:4,
//         name:"Akram",
//         age:0,
//         hobby:"Footbal"
//     } 
// ];
// function findDuplicates(arr) {
//     let result = [];
//     let seen = []; 
//     for (let i = 0; i < arr.length; i++) {
//         let key = arr[i].age + arr[i].hobby;
//         let found = false;
//         for (let j = 0; j < seen.length; j++) {
//             if (seen[j] === key) {
//                 found = true;
//                 break;
//             }
//         }
//         if (found) {
//             result.push(arr[i]);
//         } else {
//             seen.push(key); 
//         }
//     }
//     return result;
// }
// console.log(findDuplicates(arr));

// ----------------- Masalalar ----------------
// 1-masala
// function addNums(a, b) {
//     return a + b;
// }
// console.log(addNums(3, 5));

// 2-masala
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4])); 

// 3-masala
// function allPositive(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(allPositive([1, 2, 3, 4])); // Natija: true
// console.log(allPositive([1, -2, 3, 4])); // Natija: false

// 4-masala
// sal qiyinroq ekan , ishlay olmadm

// 5-masala
// const personArr = [
//     {
//     name: "Abdulloh",
//     age: 19,
//     status: false 
//     },
//     {
//     name: "Ibrohim",
//     age: 20,
//     status: true 
//     },
//     {
//     name: "Shodiyor",
//     age: 18,
//     status: false 
//     }
// ];

// function printFalseStatusNames(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i].status) {
//             console.log(arr[i].name);
//         }
//     }
// }
// printFalseStatusNames(personArr);

// 6-masala
// function calculateAverage(a, b, c) {
//     let sum = a + b + c;
//     return sum / 3;
// }
// console.log(calculateAverage(3, 6, 9)); 

// 7-masala
// function transformFirstElement(arr) {
//     if (arr[0] % 2 === 0) {
//         arr[0] += 1; 
//     } else {
//         arr[0] -= 1; 
//     }
//     return arr;
// }
// console.log(transformFirstElement([4, 2, 3])); 
// console.log(transformFirstElement([3, 2, 3])); 

// 8-masala
// function compareStringArrays(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 result.push(arr1[i]);
//                 break;
//             }
//         }
//     }
//     return result;
// }
// console.log(compareStringArrays(["a", "b", "c"], ["b", "c", "d"])); 
