import './'
import {add } from './helpers';

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('title').innerHTML = "";
     
});

add.li('line 3');

async function runPromise(){
    add.li('line 13')
    const p = new Promise (
        (resolve, reject) =>{
            setTimeout(
                ()=>{
                    resolve('We are complete')
                }, 500
            )
        }
    );
    const message = await p;
    add.li('line 24')
}//end of a promise

runPromise()
add.li('add line 22')

/**
 * We want to be able to await asynchronous code 
 * which basically will give us the ability to run 
 * our code like a promise like this or if we want 
 * to interrupt the flow of execution maybe we did 
 * want to wait on line 17 until this promise is 
 * resolved. Then we actually have a way of doing 
 * that. And so to do that I'm going to come up 
 * here and I'm just going to simply. Well let's 
 * let's type it out. First we'll do a function 
 * and we'll call run promise and I am going to 
 * wrap that here.
 */

/**
 * we're just declaring something here we call line 
 * twenty to nine twenty two calls actually run promise
and then we go up to line seven and we execute line 
seven so that's where we're seeing this immediately
line three then line seven then we just have binding 
this bit of promise instantiation to P to the constant
P and then we get here now P doesn't interrupt the flow of execution and we have a promise that we ar
going to await but remember we're only going to wait inside of an asynchronous function.
OK so then we go on and line twenty five is then 
executed all the while we are awaiting the return of
P R promise
So once our promise finally gets resolved then we 
can show line 18 and that's basically what's happening
here.
So as you can imagine this in itself with all 
these little tools that we've put together to 
try to make
things easier to operate with we've actually 
made it just as complicated as it was in the 
begin with.

And so this is where kind of our next yes is 
set up to help us and it really takes this 
and makes it

 */