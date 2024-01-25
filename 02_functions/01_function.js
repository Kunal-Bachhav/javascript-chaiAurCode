// let p = 20
// let q = 30

function myFunction(p1, p2)//Variables declared within a JavaScript function, become LOCAL to the function.
{
    return p1 * p2;
}

console.log(myFunction(20,30));

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
//   console.log(value);
  console.log(`the tempreture is ${value} celcius`);