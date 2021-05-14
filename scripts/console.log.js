/*
 * Author: Dewdman42 on https://www.logicprohelp.com/forum
 * Link: https://www.logicprohelp.com/forum/viewtopic.php?t=144010#
 *
 * This snippet of code provides buffered tracing. What that
 * means is that all Trace messages will be sent first to a
 * buffer and then later sent to the console window when
 * Scripter is not busy. The result is that ALL tracing
 * messages will be sent out, none will be lost.
 */

const console = {
    maxFlush: 20,
    b:[],
    log: function(msg) {this.b.push(msg)},
    flush: function() {
        var i=0;
        while(i<=this.maxFlush && this.b.length>0) {
            Trace(this.b.shift());
            i++;
        }
    }
};
function Idle() {
    console.flush();
}

// Intead of Trace(msg) use this:
console.log("Hello World");

// This will buffer and print out 20 lines about every quarter second
for (i=0; i<1000; i++)
  console.log("number " + i);

// Instead of event.trace() use this:
console.log(event.toString());
