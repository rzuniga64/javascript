let keyValue = 1000;
let ab = 'Some text';

function test() {
    keyValue = 2000;
    console.log('tested!');
}

export {keyValue, test};

// default keyword makes it the default export of this file
export default ab;