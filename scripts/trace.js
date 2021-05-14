/* Trace() examples */

// Primitives: string, number, boolean
Trace('Hello World!');
Trace(3.1415);
Trace(true);

// Objects
const obj = {num: 1.2, str: 'howdy', boolean: true, arr: [5,6,7]};
Trace(obj);
Trace(JSON.stringify(obj));
Trace(JSON.stringify(obj, null, 4));

// Increase the loop count to force some trimming
for (let i=1; i<=10; i++) Trace("number " + i);
