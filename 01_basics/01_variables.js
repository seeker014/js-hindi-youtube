const accountId=144553
let accountEmail="abhi@google.com"
var accountPassword="12345"
accountCity="Jamshedpur"
let accountState

// accountId=2 //not allowed
console.log(accountId);

accountEmail="hc@hc.com"
accountPassword="21212"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
const cannot be changed
let and var can be modified
prefer not to use var because of issue in block scope and functional scope
if we do not assign any value to variable , it shows 'undefined' in value table.
*/

