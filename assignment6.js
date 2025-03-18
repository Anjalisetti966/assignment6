
//1)
let num= (num)=>{
    for (let i=0 ; i< num.length; i++){
        console.log(num[i]*2);  
    }   
}
num([2,3,4,5,6]);

//2)
let array = ["name", 3, true];

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "string") {
    console.log(array[i]); // Print the array if a string is found
  }
}

//3)
let obj= { name: "John", age: 30, city: "New York" }
console.log(Object.keys(obj).length);

//4)
let input= { a: 1, b: 2 }
let output= { b: 3, c: 4 }
let res = {...input,...output}
console.log(res);

//5
let put= { user: { profile: { nam: "Alice", age: 25 } } }
// Output: "Alice"
console.log(put["user"]["profile"]["nam"]);


//6
let string ="hello"
let rev="";
for(let i=string.length-1;i>=0 ;i--){
  rev+=string[i];
}
console.log(rev)


//7
let str = "aabbba";

let counter = {};


for(let index of str){
    // console.log(counter[index]);
    if(counter[index]) {
        counter[index] = counter[index] + 1
    } else {
        counter[index] = 1;
    }
}

let s="";
for(let key in counter) {
  s = s + key + counter[key];
};

console.log(s);

//8
res = filter(arra);

let arra = [1,22,3,4,5,20];
// let res = 0;
function filter(list) {
let temp = 0;
 for(let i=0; i < list.length; i++) {
  // console.log(arra[i])
  if(list[i] >= 10) {
    temp += list[i] * 2;
  }
 }
 return temp;
}
console.log(res);
 

//9
let date = new Date(2023,1,16)
console.log(date.getFullYear(),"-",date.getMonth(),"-",date.getDate());


//10
function getRandom(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(5,10));





