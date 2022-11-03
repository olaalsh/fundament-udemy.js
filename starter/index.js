/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 28);
console.log(typeof 'jonas');
*/
// let'in kullanımı: bir değişkenin tanıttığımğızda ve bu değişkennin değeri daha sonra değiştirmek istediğmizde kullanılırız.
/*
örnek olarak:
let javascriptIsFun = true;
console.log(javascriptIsFun);
javascriptIsFun = 'yes';
console.log(javascriptIsFun);
örnek2:
let age = 30;
age = 31;

..... const ise let'in tam tersi.
const birthYear =1991;
birthYear = 1990; yapsam console de bir hata verecek


*/

// operator
/*
const now = 2037;
const ageOla = now - 1999;
const ageLayla = now - 2001;
console.log(ageOla, ageLayla);
console.log(ageLayla * 2, ageOla / 10, 2 ** 3);

let x = 10 + 5;
x += 10; //x=x+10
x *= 4; //x=x*4=100
x++; //x=x+1
x--;

console.log(x);
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 
*/
/*
challange
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

talking about``

const firstName = 'ola';
const surName = 'alshikh';
const job = 'programmer'
const birthYear = 1999;
const year = 2022;

const ola = "i'm" + firstName + surName + ', a' + (year - birthYear) + ' years old ' + job;
console.log(ola);

const olaNew = `I am ${firstName} ${surName},a ${ year-birthYear} years old ${job}!`;
console.log(olaNew);



const age = 15;

if (age >= 18) {
    console.log('ola can start driving 🚗')

} else {
    const yearsLeft = 18 - age;
    console.log(`ola is too young. wait another ${yearsLeft} years `);

}

const dogumGunu = 1991;
let centurey
if (dogumGunu <= 2000) {
    centurey = 20;

} else {
    centurey = 21;

}
console.log(centurey);


cooding challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")

} else {
    console.log("John's BMI is higher than Mark's!")

}



// type conversion
const inputYear = '2000'

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('joans'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log('I am' + 23 + ' years old ');
console.log('23' - '10' - 3);
console.log('23' / '2');


const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);

if (favourite === 23) {
    console.log('cool!')

}
if (favourite !== 23) console.log('why not 23?');
*/
// code challange #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 
1.	Calculate the average score for each team, using the test data below 
2.	Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 
3.	Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 
4.	Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 
Test data: 
§	Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
§	Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
 
GOOD LUCK 😀 


const dolphinsTeam = (96 + 108 + 89) / 3;
const koalasTeam = (88 + 91 + 110) / 3;
console.log(dolphinsTeam, koalasTeam);

if (dolphinsTeam > koalasTeam && dolphinsTeam >= 100) {
    console.log('dolphinsTeam is winner')
} else if (dolphinsTeam === koalasTeam) {
    console.log(" both win the trophy");
} else if (koalasTeam > koalasTeam && koalasTeam >= 100) {
    console.log('koalaTeam is winnter');

} else {
    console.log("no one wins the trophy");
}


// switch case 

const day = 'monday';
switch(day){
    case 'monday':
        console.log('plan course structure');
        console.log(' go to coding meetup');
        break;
        case'tuesday':
        console.log('prepare theory videos');
        break;
        default:
            console.log('not a valid day!')
}


const age = 23;
//age >= 18 ? console.log('i like drimk juice') :
//  console.log('i like drink water');
const drink = age >= 18 ? 'juicie' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'juice';

} else {
    drink2 = 'water';
}
console.log(drink2);
console.log(`İ like to drink ${ age >= 18 ? 'juice': 'water'}`)
*/


// code challange#4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 
Your tasks: 
1.	Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!) 
2.	Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25” 
Test data: 
§	Data 1: Test for bill values 275, 40 and 430 
Hints: 
§	To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
§	Value X is between 50 and 300, if it's >= 50 && <= 300 😉 
 
GOOD LUCK 😀 
*/
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`the bill was ${bill},the tip was ${tip} , and the total value ${tip+bill}`);