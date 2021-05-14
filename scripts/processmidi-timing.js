/*
 * ProcessMIDI example that measures the internal
 */

let lastTime = null;

function ProcessMIDI() {
  const now = new Date().getTime();
  if (lastTime) Trace(`${now - lastTime}ms`);
  lastTime = now;
}

/*
 * Sample output with sample rate of 44.1kHz and buffer of 1024 samples
 
 23ms
 24ms
 23ms
 23ms
 23ms
*/
