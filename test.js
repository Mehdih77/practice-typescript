// var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
//     if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
//         if (ar || !(i in from)) {
//             if (!ar) ar = Array.prototype.slice.call(from, 0, i);
//             ar[i] = from[i];
//         }
//     }
//     return to.concat(ar || Array.prototype.slice.call(from));
// };
// var x = 2;
// var user;
// user = "lorem";
// var temp = 33;
// temp = 24;
// var check;
// check = true;
// ///////////////////
// var newObject;
// newObject = {
//     name: "peter",
//     age: 24
// };
// var testString;
// testString = ["jack", "jim", "22"];
// var testNumber;
// testNumber = [1, 2, 3, 4];
// ///////////////////////////
// var advance;
// advance = [
//     {
//         name: "mmm",
//         age: 22
//     },
//     {
//         name: "sss",
//         age: 33
//     },
// ];
// ///////////////
// //! type inference
// var temp7 = "React - TypeScript";
// temp7 = "Hello World";
// ///////////////////////////////////
// //! Union type
// var union;
// union = "bye bye";
// union = 12;
// var ggg;
// ggg = {
//     name: "name",
//     age: 33,
//     isActive: true
// };
// ///////////////////
// function add(a, b) {
//     return a + b;
// }
// //////////////////
// //! Generics
// // function generic(array: any[], value: any) {
// //     const newArray = [...array, value];
// //     return newArray; 
// // }
// function generic(array, value) {
//     var newArray = __spreadArray(__spreadArray([], array, true), [value], false);
//     return newArray;
// }
// var demoArray = [1, 2, 3];
// var test11 = generic(demoArray, -1); // [1,2,3,-1]
// var test22 = generic(["1", "2", "3"], "-1");
