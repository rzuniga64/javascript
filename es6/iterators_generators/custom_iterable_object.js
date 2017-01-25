let person = {
    name: 'Max',
    hobbies: ['Sports', 'Cooking'],
    [Symbol.iterator]: function() {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function() {
                let value = hobbies[i];
                i++;
                return {
                    // make sure to implement logic to set done to false
                    // or you will create an infinite for of loop.
                    done: i > hobbies.length ? true : false,
                    value: value
                };
            }
        };
    }
};

for (let hobby of person) {
    console.log(hobby);
}