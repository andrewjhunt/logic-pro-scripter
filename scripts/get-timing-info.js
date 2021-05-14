/*
 * ProcessMIDI example that measures the internal
 */

// Required to enable GetTimingInfo()
var NeedsTimingInfo = true;

function ProcessMIDI() {

    var info = GetTimingInfo(); // get a TimingInfo object from the host

    //if the transport is running
    if (info.playing) {
        Trace(info.tempo); // print the tempo in the plugin console
    }
}
