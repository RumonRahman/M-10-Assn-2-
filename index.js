//Ques-1

function calculateDifference(num1,num2){
     return (num1-num2);
}
let result=calculateDifference(15,9);
console.log(result);
 

//Ques-2

function isOdd(n){
    if(n%2!=0){
        return true;
    }
    else{
        return false;
    }
}

let res = isOdd(5);
console.log(res);


//Ques-3

function findMin(arr){
    if(arr.length===0){
        console.log("array is empty")
    }

    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log(findMin([7,8,4,9,2]));


//Ques-4

function filterEvenNumbers(arr){
   return arr.filter(num=>num%2===0);
}
const numbers=[1,2,3,4,5,6,8,9]
const evenNumbers=filterEvenNumbers(numbers)
console.log(evenNumbers);


//Ques-5

function sortArrayDescending(arr){
    return arr.sort((a,b)=>b-a);
}
const numbers=[2,5,1,7,4,9];
const sortedNumbers= sortArrayDescending(numbers);
console.log(sortedNumbers);


//Ques-6

function lowercaseFirstLetter(str){
    let word = str.split(" ").map(word=>{
        return word[0].toLowerCase()+ word.slice(1)
    })
    return word.join(" ");
}
console.log(lowercaseFirstLetter("I Study In Class Nine"));


//Ques-7

function countVowels(str){
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    let count= 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("I am a programmer"));


//Ques-8
function findAverage(arr){
    if(arr.length===0){
        return 0;
    }
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
     
    return sum/arr.length;
}
console.log(findAverage([10,15,12,14]));
console.log(findAverage([]));