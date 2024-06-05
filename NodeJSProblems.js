//Node JS Problems

function reverseString(str){

//Solution one
/*// Print orginal string
  //console.log(str);
  let strArray = str.split('');
  strArray.reverse();
  //console.log(strArray);
 return strArray.join('');*/

// Soluttion two
 let revString ='';
 for(let i = str.length - 1; i >= 0; i--){
   revString = revString + str[i];
 }
 return revString;


//Solution three
 /*let revString ='';
 for(let i = 0; i <= str.length -1; i++){
   revString = str[i]+ revString;
   //console.log(revString);
  }
 return revString;*/


 //let revString ='0000';
 //let revString;
 // Takes each character of str from the beggining
 // and interates character by character adding it
 // revString...

 /*for(let char of str) {
   revString =  char + revstring;
 }
 return revString;*/



  // Solution four
  // Transforms the input string into an array.
  // Iterates over each element in the array backwards
  // and adds each sucessive character back to revString.

  /*let revString ='';
  str.split('').forEach(function(char){
    revString = char + revString;

  })
    return revString;*/

    /*let revString ='';
    str.split('').forEach(char => revString = char + revString);
    return revString;*/

  // return str.split('').reduce(function (revString,char){
      //return char + revString;
    //}, '');

}


// Challenge Check Palindrom string

function isPalindrome(str){

  // Implement string reversal, then compare reversed revString
  // to input string.

  const revString = str.split('').reverse().join('');

  return revString === str;
}



// Create a key value pair to indentify the number of times
// a character appears in a string and calculate the max occurence.
//[0,0] [k,3][t,4]
function maxCharacter(str){

  // Use a character map to count char occurences for you.
  const charMap = {};

  let maxNum = 0;
  let maxChar = '';

    console.log(str.split(''));

  str.split('').forEach(function(char){
    if (charMap[char]){
      console.log(charMap[char]);
      charMap[char]++;
      //console.log(charMap[char]);
    }
    else {
      charMap[char] = 1;
    }

  });

  console.log(charMap);

// Iterate through the char map comparing each value
// to maxNum, continuing to update maxNum with the
// largest number. Finally return the largest number.
  for(let char in charMap){

    if(charMap[char]> maxNum){
      maxNum = charMap[char];
      maxChar = char;

    }
  }
  return maxChar;
}
/* Fizz Buzz Write a program and writes all numebers
from one to one hundred. For multiples of 3 print fizz
for multiples of 5 print Buzz. For multiples of 3 and 5
print Fizz Buzz. */

function fizzBuzz() {

  for (let i = 1; i <= 20; i++){

    if(i % 3 === 0 && i % 5 === 0 )
      console.log("fizzBuzz");

      else if(i % 3 === 0)
      console.log("fizz");

      else if( i % 5 === 0)
      console.log("buzz");

      else
      console.log(i);
  }
}

  function longestWord(sen){
    const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort the words by length
   const sortedArray = wordArray.sort(function(a,b){
      return b.length - a.length;
    });
    // const sortedArray = wordArray.sort((a,b) => b.length - a.length);

    console.log(sortedArray);
    // If there are multiple words put them into an array.
    const longestWordArray = sortedArray.filter(function(word){
      return word.length === sortedArray[0].length;
    });
    // const longestWordArray = sortedArray.filter((word) => word.length ===
    // sortedArray[0].length;)

    if (longestWordArray.length === 1)
    return longestWordArray[0];
    else
    return longestWordArray;
    //console.log(longestWordArray);
    //return sortedArray[0];
  }

//Le nathlam hi
//["tlhIngan", "Hol", "'oHbe'", "bogh", "latlh",
//"Hol'e'", "DajatlhlaH'a'?"],3
//fizzBuzz();


function reverseInteger(int){

  const reverseString = int.toString().split('').reverse().join('');

  return parseInt(reverseString) * Math.sign(int);
}

//Capitalize first letters of each word.
function capitalizeLetters(str){
  const strArray = str.toLowerCase().split(' ');
  for(let i=0; i < strArray.length;i++){
    strArray[i] = strArray[i].substring(0,1).toUpperCase()+
    strArray[i].substring(1);
    //console.log(strArray[i].substring(1));
  }
  return strArray.join(' ');
}

function allCaps(str){
  const strArray = str.toUpperCase().split(' ');
  return strArray.join(' ');
}


function chunkyArray(arr,len){

/*  let i = 0;

  while(i < arr.length){
    chunkedArray.push(arr.slice(i, i + len));

    i += len;
  }

  return chunkedArray;*/
  const chunkedArray = [];

  arr.forEach(function(val){
    // Get last element.
    const last = chunkedArray[chunkedArray.length-1];
    //console.log(val);
    // Check if there is a last and if its length
    // is equal to the chunk length.
    if (!last){
    chunkedArray.push([val]);
    console.log(val);
    }
    else if (last.length === len){
      console.log(last.length);
      console.log(last);
      console.log(val);
      chunkedArray.push([val]);
    }
    else{
      last.push(val);
      //console.log(val);
    }
    console.log(last);
  });
}

  function flattenArray(array){

    //return arrays.reduce((a,b) => a.concat(b));
    //return [].concat.apply([],array);
    //return [].concat(...array);
}

function letterChange(str){
let newString = str.toLowerCase().replace(/[a-z]/gi,function(char){
  if (char === 'z'||char ==='Z'){
    return 'a';
  }
  else{
    return String.fromCharCode(char.charCodeAt() +1);
  }

  });

  newString = newString.replace(/a|e|i|o|u/gi, function(vowel){
    return vowel.toUpperCase();
  });
  return newString;
}

function isAnagram(strOne, strTwo){
  console.log(formatString(strOne));
  return formatString(strOne)=== formatString(strTwo);
  //Helper functions
  function formatString(str){
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  }
}

function addAll(... numbers){
  /*let total = 0;

  numbers.forEach((num) => {
    total += num;
  });
  return total;*/

  return numbers.reduce((acc, curr) => acc + curr);
}

function sumAllPrimes(amazonPrime)
{
  let total = 0;

  for(let i = 1; i<= amazonPrime; i++){

    if(checkPrimes(i)){
        //console.log(i);
        total +=i;
    }
  }
  return total;

  function checkPrimes(i){
    //console.log(i);
      for (let j=2; j<i; j++){

            if (i % j === 0)
            {
                return false;
            }
            else if (j+1 > Math.sqrt(i)) {
                return true;
            }
          }
    }
}


function seekAndDestroy(array){
  const args = Array.from(arguments);

  function filterArray(array){
    return args.indexOf(array) === -1;
  }
  return array.filter(filterArray);
}

/*function seekAndDestroy(array,...rest){

  return array.filter(val => !rest.includes(val));
}*/

function sortByHeight(a){
  const arrayOne =[];
  const arrayTwo = [];

  a.forEach((val, i) => val === -1 ? arrayOne.push(i): arrayTwo.push(val));

  const sortedArray = arrayTwo.sort((a, b) => a -b);

  arrayOne.forEach((val,i) => sortedArray.splice(arrayOne[i],0, -1));

  return sortedArray;
}

function missingLetters(str){

  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map((char,i) =>{
    if(str.charCodeAt(i) === compare){
      ++compare;
    }
    else{
    missing = String.fromCharCode(compare);
    }
  });

  return missing;

  //str.split(''); Divide by letters.
}

function evenOddSums(array){
  let evenSum = 0;
  let oddSum = 0;

  array.forEach(num => (num %2 == 0 ? evenSum += 1:  oddSum += 1))

  console.log(evenSum);
  console.log(oddSum);
  return array;

}

//const output = reverseString("How are you doing?");


//  console.log(missingLetters('acdfgi'));
//const a = [-1, 500, 120, 450, -1,-1,0, 300, 100,0, 25,-1,550];
//console.log(evenOddSums(a));
//console.log(sortByHeight(a));
//const output = console.log(seekAndDestroy([2,3,4,6,6,"hello"],6));
// sumAllPrimes(3);
//const output = addAll(0,10,20,30,40);
// const output = isAnagram('elbow', 'below');
//const output = letterChange("tlhInganzzZZ");
//const output = flattenArray([["tlhIngan"], ["Hol"], ["'oHbe'"], ["bogh"],
//["latlh"],["Hol'e'"], ["DajatlhlaH'a'?"]]);

//const output = longestWord("tlhIngan", "Hol", "'oHbe'", "bogh", "latlh","Hol'e'", "DajatlhlaH");

//[["tlhIngan"], ["Hol"], ["'oHbe'"], ["bogh"], ["latlh"],["Hol'e'"], ["DajatlhlaH'a'?"]]
//tlhIngan Hol oHbe bogh latlh
//const output = maxCharacter("DajatlhlaH'a'?")
//const output = chunkyArray()
//const output = capitalizeLetters('Le nathlam hi');
const output = allCaps('Le nathlam hi');
//const output = reverseInteger(-1111000333);

//"Hol'e'", "DajatlhlaH'a'?"]);

console.log(output);
