import a from './app.js'
import {arr} from './app.js'//it was named export in app.js due to which we had to use curly braces while importing it
//named export will always be imported using the actual name no random name can be used as it will give the error as output
console.log(a);
console.log(arr);