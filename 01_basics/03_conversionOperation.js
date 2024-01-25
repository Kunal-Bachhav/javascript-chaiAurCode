let score = "33";
console.log(typeof score);

let conversion = Number(score);
console.log(typeof conversion)

/*

"33" => 33
"33abc" => NaN(Not a Number) 
true => 1
false => 0

*/

let isLoggin = 1;
let booleanIsLoggin = Boolean(isLoggin)
console.log(booleanIsLoggin)

/*

1 => true
" " => false
"kunal" => true

*/

//---------------------------------------------------------------------------------------------------------------------

// WHY STRING TO NUMBER CONVERSION IS CONFUSING

console.log("1" + 2);//12
console.log(2 + "1");//12
console.log("1" + 2 + 2)//122
console.log(2 + 2 + "1")//41

