var PluginParameters =
[
    // Text divider / header
    {
        name:"------ Example Plugin Parameters ------",
	      type:"text",
    },
    // Note Velocity: linear slider with a range of 1 to 127 in 126 steps. Default: 100
    {
        name:"Note Velocity",
        type:"lin",
        minValue:1,
        maxValue:127,
        numberOfSteps:126,
        defaultValue:100
    },
    // Transpose: linear slider with a range of -24 to 24 in 48 steps. Defauly: 0
    {
        name:"Transpose",
        type:'lin',
        minValue:-24,
        maxValue:24,
        numberOfSteps:48,
        unit: "semi-tones",
	      defaultValue: 0
    },
    // Checkbox that is defaulted to off (de-selected)
    {
        name:"Enable",
        type:"checkbox",
        defaultValue: 0
    },
    // Menu with 2 items is presented as radio buttons
    {
        name:"Radio",
        type:"menu",
        valueStrings:["Opt 1", "Opt 2"],
        // default is the index in valueStrings array
        defaultValue: 1
    },
    // Menu with 3 or more menu is presented as drop-down menu
    {
        name:"Range",
        type:"menu",
        valueStrings:["Low", "Mid", "High"],
        // default is the index in valueStrings array - Mid
        defaultValue: 1
    },
    // MIDI Target selector
    {
        name: "Target",
        type: "target",
    },
    // Momentary trigger button
    {
        name: "Trigger",
        type: "momentary",
    }
];

function ParameterChanged(param, value) {
    // param is index in PluginParameters array
    Trace(`"${PluginParameters[param].name}" changed to ${value}`);
}
