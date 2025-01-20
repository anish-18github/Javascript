// Immediately Invoked Function Expressions (IIFE)


// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

                            // SYNTAX
// (Function_Definition) (Function_Exicution)
