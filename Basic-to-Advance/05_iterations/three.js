//                                                                   for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // if (greet == " "){           //IF YOU WANT TO SKIP BLANK SPACES
    //     continue;
    // }
    // console.log(`Each char is ${greet}`)

}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // THIS WILL NOTE GET PRINT BECAUSE MAP ALWAYS CONTAINS UNIQUE KEY'S
map.set('IND', "India")  // IN THIS CASE KEY IS DIFFERENT FROM FIRST ONE BUT VALUE IS ACE SO IT DISPLAY THE KEY VALUE



console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }