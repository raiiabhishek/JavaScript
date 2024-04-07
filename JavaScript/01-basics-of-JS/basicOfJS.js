/* Js is giving instruction to a computer */

alert("hello"); // pop up
document.body.innerHTML = "hello"; // text appers in the page

//String
("hello");
("hello");
alert("hello");
undefined;
("hello");
("hello");
"hello" + "world";
("helloworld");
"some" + "more" + "text";
("somemoretext");
typeof "hello";
("string");
"hello" + 3;
("hello3");
typeof "hello" + 3;
("string3");
("$28.94");
"$" + 20.95 + 7.99;
("$20.957.99");
"$20.95" + "$7.99";
("$20.95$7.99");
$(20.95 + 7.99);
undefined;
"$" + (20.95 + 7.99);
("$28.939999999999998");
"$" + (2095 + 799) / 100;
("$28.94");

//String
"Items (" + (2 + 2) + "): $" + (2095 + 799) / 100;
("Items (4): $28.94");

//popup
alert("Items (" + (2 + 2) + "): $" + (2095 + 799) / 100);

//Ways to create String
("I'm Learning Js"); //Escape character
alert("Some\n text"); //Escape character
//Template string
`hello`; // Interpolations - lets us to insert value directly into string
("hello");

`Items(${1 + 1}): $${(2095 + 799) / 100}`; //Inserting values derectly into string
("Items(2): $28.94"); //result

//Multiline string in Template string
`Some
feature`;
("Some\nfeature");

//exercise

("My name is: ");
("My name is: ");

("Abhishek");
("Abhishek");

("My name is : Abhishek");
("My name is : Abhishek");

"Total cost:$" + (5 + 3); //concatination string
"Total cost:$8"`Total cost: ($${5 + 3})`; //template string
("Total cost: ($8)");

alert(`Total cost: ($${5 + 3})`); //pop up

"Total cost : $" + (599 + 295) / 100; //concatination
("Total cost : $8.94");

`Total cost: $${(599 + 295) / 100}`; //Template string
("Total cost: $8.94");

//Multi-line Template string
`Total cost : $${(599 + 295) / 100}
Thank you, visit again !`;

("Total cost : $8.94\nThank you, visit again !");

//Chanllanges
`Items (${2 + 2}): $${(2095 * 2 + 799 * 2) / 100}`;
"Items (4): $57.88"`Shipping & handling: ${(499 + 499) / 100}`;
("Shipping & handling: 9.98");
`Total before tax: $${(2095 *2 + 799 *2 + 499 + 499)/100}`
'Total before tax: $67.86'
`Estimated tax (10%): $${Math.round((2 *2095 + 799 *2 +499 + 499) *10/100)/100}`
'Estimated tax (10%): $6.79'

