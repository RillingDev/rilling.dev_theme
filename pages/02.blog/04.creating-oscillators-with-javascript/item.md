---
title: 'Creating oscillators with JavaScript'
published: true
taxonomy:
    category:
        - Javascript
    tag:
        - Javascript
        - 'Web Audio API'
        - Oscillilator
content:
    pagination: true
---

The Web Audio API is a JavaScript API supported by all modern browsers. With it you can create sounds dynamicaly, without the use of audio files.

[Synthesizer using the Web Audio API](http://f-rilling.com/projects/WAA_Synth)

### Initializing the Web Audio API

Every use of the Web Audio API requires us to initialize in JavaScript an AudioContext like this:

```javascript
/*Init the AudioContext*/
var synth = new window.AudioContext;
```

As in most cases we should try to also support vendor variants of this implementation, in this case "webkitAudioContext". So let's use this instead:

```javascript
/*Init the AudioContext and webkitAudioContext*/
var synth = new(window.AudioContext || window.webkitAudioContext)();
```

If we want to create sound with our AudioContext we also need an Oscillator, basically our sound-creator. The audio created will be routed trough a gain-node we also need to initialize.

```javascript
/*Define oscillator and node*/
var oscillator = synth.createOscillator();
var node = synth.createGain();
```

We still need to tell our oscillator that he should connect to our node as well as telling our gain-node that the audio should be played after processing.

```javascript
/*Connect the oscillator to the node, and the node to the audio output*/
oscillator.connect(node);
node.connect(synth.destination);
```

Right now our JavaScript should look something like this:

```javascript
var synth = new(window.AudioContext || window.webkitAudioContext)();

var oscillator = synth.createOscillator();
var node = synth.createGain();      

oscillator.connect(node);
node.connect(synth.destination);
```

### In the beginning, there was sound

There are multiple setting for both the oscillator and the node that affect the sound, most importantly:

```javascript
oscillator.type = 'sine'; /*The Waveform of the oscillator, other values are 'saw' or 'square'*/
oscillator.frequency.value = 440; /*The Frequeny of the oscillator in hertz, 440 equals an "A4"*/

node.gain.value = 1; /*The volume of the audio*/
```

Finally, if we want to listen to the sound of our oscillator we can use "oscillator.start()" to do so! (Warning: can be pretty loud).

```javascript
/*Play the oscillator*/
oscillator.start();
```

### Related Links:

*   [Mozilla Developer Network on the Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
*   [Hertz values of piano notes](http://en.wikipedia.org/wiki/Piano_key_frequencies)