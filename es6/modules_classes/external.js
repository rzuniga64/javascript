let keyValue = 1000;
function test() {
    keyValue = 2000;
    console.log('tested!');
}

let ab = 'Some text';

export {keyValue, test};
// default keyword makes it the default export of this file
export default ab;