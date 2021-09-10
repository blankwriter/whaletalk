let input = 'Glory Glory Man United';
const vowels = ['a', 'e', 'i', 'o', 'u'];
//declaring an array
let resultArray = [];
//creating a loop
for (let i = 0; i < input.length; i++){
 // console.log('i is ' + i)
 for (let j = 0; j < vowels.length; j++) {
   //console.log('j is '+ j)
   if (input[i] === vowels[j]){
     resultArray.push(input[i]);
   }
   if (input[i] === 'e' || input[i] === 'u') {
     resultArray.push(input[i])
   }
    
 } 
}
console.log(resultArray.join('').toUpperCase());
