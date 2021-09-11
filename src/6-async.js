import './'
import {add } from './helpers';

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('title').innerHTML = "";
     
});


// synch stream
// add.li('Hello RXJS');
add.li('Line 3');
// add.li('Line 4');
// add.li('Line 10');

function callback (message){
    add.li(message)
};
callback('This is a function')

function greeting(message, cb){
    let start = Date.now(); 
    for (let i =0; i< 1000000000; i++){
        // do nothing
    }
    add.li (`took: ${Date.now()- start}ms`);
    cb(message)
}
greeting('Hello from  line 30', callback)

add.li('Last line');

/**
 * And so you can see that line three came out immediately.
We get our function declarations which are hoisted at the time of execution.
And then when we get down to line 8 team we're going to run up our greeting.
So hello from line 18.
And we don't get that emitted until it comes out of here out of the callback function up here.
And so this bit of code right here that took
11 seconds.
That bit of code right there blocked the execution because you can see 22 didn't show up or 31 until
we ran through that giant loop that took forever.
And so you can see that this is where the need for a synchronous code came about and what we mean by
a synchronous is we want to start executing line three.
And then we have these other bits of work that we need to do and we want that work to be done elsewhere
so that we can continue on and this bit of code where we're going to render line 22 doesn't have to
wait on this and then it's sometime in the future when all this happens then we can go back and execute
that code.
 */