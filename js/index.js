// Iteration 1: Names and Input
let hacker1=prompt("enter Driver Name: ");
console.log(`Driver's name is ${hacker1}`);

let hacker2=prompt("Enter Navigator name: ");
console.log("The navigator's name is "+hacker2);

// Iteration 2: Conditionals

let n=hacker1.length;
let m=hacker2.length;
if(n>m){
  console.log("The driver has the longest name, it has "+n+ " characters");
}
else if(n<m){
  console.log("It seems that the navigator has the longest name, it has " +m+ " characters");
}
else{
  console.log("Wow, you both have equally long names, " +n+ " characters!");
}
// Iteration 3: Loops
for(let i=0;i<hacker1.length;i++){
  console.log(hacker1[i].toUpperCase());
}
let rev="";
for(let i=hacker2.length-1;i>=0;i--){
  rev=rev+hacker2[i];
}
console.log(rev);