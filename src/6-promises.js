import './'
import {add } from './helpers';

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('title').innerHTML = "";
     
});

add.li('line 3');

const p = new Promise (
    (resolve, reject) =>{
        setTimeout(
            ()=>{
                resolve('We are complete')
            }, 500
        )
    }
);

p.then(
    (message) => add.li(message)
)

add.li('add line 22')

/**
 * We go through all this and then line four.
And this happens later and this is the heart of what we mean by asynchronous code.
So we're executing asynchronously here we say we're going to do something that's going to take longer
long enough that we want to continue on executing our code.
So this goes into another queue of execution.
And once javascript finishes everything in the call stack then this then method is fired when this is
finally resolved only when this is resolved and then whatever function we pass it then is going to be
ran at that point.
 */