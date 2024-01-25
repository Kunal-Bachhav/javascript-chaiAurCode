const accountId = 1429
let accountEmail = "kunalb2808@gmail.com"
var accountPassword = "123"
accountCity = "jaipur"

let accountState;
// javascript main variable ko sirf assign krke chhod dene ke bad, javascript usko UNDEFINE manati hain


// accountId = 2914      ye allowed nhi hain js main ,kyunki accountId ko contastant banaya hua hain using const keyword
console.log(accountId);

accountEmail = "kb@gmail.com"
accountPassword = "789"
accountCity = "Nashik"

console.table([accountEmail,accountPassword,accountCity,accountState])

/*

prefer not use var
because of issue in block scope and functional scope

*/

 