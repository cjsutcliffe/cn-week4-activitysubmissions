// Activity 1
// Write a simple function that logs ‘Hello Codenation" to the console.
// Then write a higher-order function which will run the simple
// function five times, even though you only call it once.
// Hint: Pass the simple function as a parameter, which will involve a For loop.

const msg = () => {
    console.log ('Hello Codenation');
}

const hiFive = (msg) => {
    for (let i = 0; i <= 5; i++){
        msg()
    }
        
}

hiFive(msg);