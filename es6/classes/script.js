import {keyValue, test} from 'external.js';
import ab from 'external.js'; // don't need {} since it is default export
//import ab, {keyValue as key, test} from './external.js';

console.log(key);
test();
console.log(key);
console.log(ab);

// wrap all my exports, pack them into an object and give me that object
//import * as imported from './external.js';
//console.log(imported.keyValue);
//imported.test();
//console.log(imported.keyValue);

