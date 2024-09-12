const accountId = 144540;
let accountEmail = "nabeel.kk1990@gmail.com";
var accountPassword = "12345";
accountCity = "Karachi";

//accountId = 2 // not allowed because constant variable cannot be reassign

accountEmail = "nabeelkhan2004@hotmail.com";
accountpassword = "21212121";
accountCity = "Islamabad";

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])