'hello'
alert ('hello');

// To combine strings to a bigger string or into one big string Which is also know as "CONCATENATION"
'some' + 'text' // we can also add more then two strings like:
'hello' + 'how' + 'are' + 'you'

// we can check what type of value is using this code:
typeof 2 // gives its value as 'number'
typeof 'hello' // gives its value as 'sting'


//what if we add strign and number?
// js will automatically convert number into string just like 
'hello' + 2 // it gives the value as 'hello2' by combining 
// this feature is called "type coercion or automatic type conversion"


// examples of string and number combining 

'$' +20.95 + 7.99 // which gives 
// '$20.957.99' it puts the number one after into the string insetead of calculating maths. Js adds from left to right 
// Js will automatically combines strings
'$20.95' + 7.99 // which gives 
'$20.957.99' // by automatically converting numbers to string 


// better way to do this calculation is 
'$' + (20.95 + 7.99) // which gives 
'$28.939999999999998' // but this is inaccurate 

// by converting cents into dollar by diving by 100 
'$' + (2095 + 799) /100 // which gives 
'$28.94' // which best way to calulate 



// More complicated example of string and numbers. Using strings and numbers to create the enitre line of text
'Items (' + ( 1 + 1) + '): $' + (2095 + 799) /100 // which gives
'Items (2): $28.94' // by breaking string into two parts and calculating and agin adding them.


//to create the popup 
alert('Items (2): $28.94') // The computer displays the popups message inside the string. 

//There are three ways to create the string which are ' ', " ", ` `

'hello'
"hello"
`hello` // these string are called tmeplate string, it has special features like "Interpolations" which lets us to insert the values directly into a srting. 


//double quote string best way to use while you have condition like 
"I'am learning JS"

//escpae charecters
// \'
'I\'m learning JS'// which gives 
"I'm learning JS"

// \" 
//this creates the double quote which is just a text. It doesnot start or end the string.
'I\"m learning JS' //which gives 
'I"m learning JS '

// \n 
//this creates the new line of text
alert ('Some\n text');


`hello` //which gives
'hello'

` Items(${1 + 1}): $${(2095 + 799)/100}` //which gives 
' Items(2): $28.94'

// multi-line string which is only available for template strings
`some
text` // which gives 
'some\ntext'

// best practice to use string is by default which is ''. In some cases we need to use " " or if we need to insert multiple lines then we need to use template strings ` `.


//Over view of this lesson
// A String represents text
// how to use strings and numbers 
// Three ways of strings '',"", ``.
// espace characters
// useful features of template strings which are interpolation and  multi-line strings


//Exercises
//1. Create the text ' My name is: ' as a string
'My name is : ' 
'My name is : '

//2. Create your name as a string
'A.Rai' 
'A.Rai'

//3. Using Concatenation add above first and second string 
'My name is : ' + 'A.Rai' 
'My name is : A.Rai'

//4. At resturant you order 1 coffee($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation create the text create the Text 'Total cost: $__'
'Total cost: $' + (5 + 3)
'Total cost: $8'

//5. Do the same as above using Template strings and Interpolation 
`Total cost: $${5+3}` // which gives 
'Total cost: $8'

//6. Display the popup box 
alert(`Total cost: $${5+3}`)

//7. You order coffee ($5.99) and bagel ($2.95). Calculate total cost and using concatenation create text 'Your total cost : $__'
' Total cost: $' + (599 + 299 )/100
' Total cost: $8.98'

//8. Do same as 7 using Template string and Interpolation 
`Total cost : $${(599+295)/100}`
'Total cost : $8.94'

//9. Display the popup of 8
alert(`Total cost : $${(599+295)/100}`)

//10. Using the multi-line feature add Thank you message and display in popup.
alert (`Total cost : $${(599 +299)/100}
Thank you, Visit again !`)

// create a full line of text 
`Items (${2+2}): $${(2095*2 + 799*2)/ 100}`
'Items (4): $57.88'

// For second line, shopping and handling 
`Shopping & handlling : $${(499+499)/100}`
'Shopping & handlling : $9.98'


// for before taxs 
`Total before tax: $${(2095 * 2 + 799 * 2 + 499 + 499)/100}`
'Total before tax: $67.86'

// Estimated texs
`Estimated tax (10%): $${Math.round((2* 2095+ 799 *2 + 499 + 499)*0.1)/100}`
'Estimated tax (10%): $6.79'