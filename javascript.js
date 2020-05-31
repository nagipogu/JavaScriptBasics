const companies = [
    { name: "Company one", category: "Finace", start: 1981, end: 2003 },
    { name: "Company two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company nine", category: "Retail", start: 1981, end: 1989 }

];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for
// for(let i=0; i <companies.length; i++){
//    console.log(companies[i])
// }

// forEach
// companies.forEach(function(company, index, companies){
// console.log(company)
// })

// filter
// let canDrink = [];
// for(let i = 0; i<ages.length; i++){
//   if(ages[i] >=21){
//       canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// })
// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// filter retail companies
// const retailCompanies = companies.filter(company => {
//     if(company.category === 'Retail'){
//         return true
//     }
// })
// console.log(retailCompanies);

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// get 80's companies
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(company => (company.end - company.start >=10));
// console.log(lastedTenYears);

// map
// Create array of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// })
// console.log(companyNames);

// const testMap = companies.map(company => `${company.name} ${company.start} - ${company.end}`);
// console.log(testMap);

// const ageSquare = ages.map(age => Math.sqrt(age));
// console.log(ageSquare)

// const ageTimesTwo = ages.map(age => age * 2);
// console.log(ageTimesTwo)

// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(ageMap);

// sort
// sort companies by start year
// const sortedCompanies = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// })
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// const sortAges = ages.sort((a,b) => (a-b)); //ascending order
// const sortAges = ages.sort((a,b) => (b-a)); //descending  order
// console.log(sortAges);

// reduce
// let ageSum = 0;
// for(let i=0; i<ages.length; i++){
//    ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);
// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYears)

// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYears)

// const totalYears = companies.reduce((total, company)=> total + (company.end -company.start), 0);
// console.log(totalYears);

// const combined = ages
// .map(age => age *2)
// .filter(age => age >=40)
// .sort((a,b) => a-b)
// .reduce((a,b) => a+b, 0);
// console.log(combined);


// Result: ["H", "E", "L", "L", "O"]
// function firstReverse(str) {
//     var backwardSring = ""
//     var splitString = str.split("");
//     console.log(splitString)
// }
// firstReverse("HELLO");

//Result: DLROW OLLEH
// function FirstReverse(str) {
//     var backwardSring = "";
//     var splitString = str.split("");
//     for (var i = splitString.length - 1; i >= 0; i--) {
//         backwardSring += splitString[i];
//     }
//     return backwardSring
// }
// console.log(FirstReverse("HELLO WORLD"));


// Ans 2
// var myVar =2;
// console.log(myVar); 

// Ans: 2Hello
// var myVar =2;
// console.log(myVar + 'Hello'); 

// Ans: NaN
// var myVar =2;
// console.log(myVar * 'Hello');

// Ans: ab4
// console.log('a'+'b'+'4'); 

// Ans: ab34
// console.log('a'+'b'+34); 

// Ans: aNaN
// console.log('a'+'b'*34); 

// Ans: undefided
// var a
// console.log(a); 

// Ans: null
// var a = null;
// console.log(a); 

// Ans: Hello
// var x=5
// if(x == 5){
// console.log("Hello")    
// }

// Ans: Is this true
// var x=5
// if(0 == false){
// console.log("Is this true");  
// }

// Ans: Undefined
// var x=5
// if(0 === false){
// console.log("Is this true");   
// }

// Ans: Is this true
// var x=5
// if(x === x){
// console.log("Is this true");  
// }

// Ans: Helloo
// var x = 5
// var y = 6
// if(x==5){
//  if(y==6){
//  console.log("Helloo")  
// }
// }

// Ans: Undefined
// var x = 5
// var y = 7
// if (x == 5) {
//     if (y == 6) {
//         console.log("Helloo")
//     }
// }

// Ans: Hello
// var x = 5
// var y = 7
// if(x == 5 && y==7){
//  console.log("Hello");  
// }

// Ans: 25
// function double(num) {
//     return num * num
// }
// console.log(double(5));

// Ans: [1, 4, 9, 16]
// function doubling(arr) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         result.push(arr[i] * arr[i]);
//     }
//     return result;
// }
// console.log(doubling([1, 2, 3, 4]))

// Ans: [0,1,2,3,4,5,6,7,8,9]
// var arr = [];
// for (var i = 0; i<10; i++){
//  arr.push(i)
// }
// console.log(arr);  

// Ans: [0,2,4,6,8]
// var arr = [];
// for (var i = 0; i<10; i=i+2){
//  arr.push(i)
// }
// console.log(arr);    

// Ans: [0,2,4,6,8,10]
// var arr = [];
// for (var i = 0; i<=10; i=i+2){
//  arr.push(i)
// }
// console.log(arr);    

// Ans: [10,8,6,4,2]
// var arr = [];
// for (var i = 10; i > 0; i= i - 2){
//  arr.push(i)
// }
// console.log(arr);  

// Ans: [10,8,6,4,2,0]
// var arr = [];
// for (var i = 10; i >= 0; i= i - 2){
//  arr.push(i)
// }
// console.log(arr);    

// Ans: [0,1,2,3,4,5,6,7,8,9]
// var arr = [];
// var counter = 0;
// while (counter < 10){
//  arr.push(counter);
// counter++;
// }
// console.log(arr)  

// Ans: [0,1,2,3,4,5,6,7,8,9,10]
// var arr = [];
// var counter = 0;
// while (counter <= 10){
//  arr.push(counter);
// counter++;
// }
// console.log(arr)   

// Ans: [0, 1, 99, 3]
// var arr = [1, 2, 100, 4];
// for (var i=0; i<arr.length; i++){
//   arr[i] = arr[i]-1
// }
// console.log(arr);   

// Ans: [0, 1, 100, 4]
// var arr = [1, 2, 100, 4];
// for (var i=0; i<arr.length; i++){
// if(arr[i] === 100){ break;}
//   arr[i] = arr[i]-1
// }
// console.log(arr);   

// Ans: [0, 1, 100, 3]
// var arr = [1, 2, 100, 4];
// for (var i=0; i<arr.length; i++){
// if(arr[i] === 100){ continue;}
//   arr[i] = arr[i]-1
// }
// console.log(arr);  

// Ans: 
// var str = 'Hello World'
// var arr = str.split('');
// for (var i=0; i<str.length; i++){
//  if(arr[i] === arr[i].toUpperCase()){
//   arr[i] = arr[i].toLowerCase();
// }
// }
// arr.join('');

// Ans: goodbye world
// var str = "hello world";
// var rep = str.replace("hello", "goodbye");
// console.log(rep)             

// Ans: 
// function letterCapitalize(str){
//  var words = str.split("");
//  return words;
// }
// letterCapitalize(readline('Argument goes here'))

// Ans: 
// function letterCapitalize(str) {
//     var words = str.split("");
//     return words[1];
// }
// letterCapitalize(readline('Argument goes here'));  

// Ans: 
// function letterCapitalize(str) {
//     var words = str.split("");
//     for (var i = 0; i < words.length; i++) {
//         word[i] = word[i].substr(0, i).toUpperCase() + word[i].substr(1);
//     }
//     return words;
// }
// letterCapitalize(readline('argument goes here'));  

// Ans:5
// var str ="hello coderbyte"
// var arr = str.split('');
// var vowels = ['a','e','i','o','u'];
// var count =0;
// for(var i=0; i<arr.length; i++){
//  if(vowels.indexOf(arr[i]) !== -1){
//    count += 1;
// }
// }
// console.log(count)    



