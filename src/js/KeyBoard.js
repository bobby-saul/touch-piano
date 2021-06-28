import React, {useEffect, useState} from "react";
import Octave from './Octave';

const OCTAVES = [
  1,
  2,
  3,
];

const KEYS = [
  'c',
  'cd',
  'd',
  'de',
  'e',
  'f',
  'fg',
  'g',
  'ga',
  'a',
  'ab',
  'b',
];

const KeyBoard = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const keyAudios = {};

  OCTAVES.forEach(octave => {
    KEYS.forEach((key, index) => {
      if (octave < 3 || index < 5) {
        keyAudios[octave + '-' + key] = new Audio(`./piano-${octave}-${key}.mp3`);
      }
    });
  });

  function playNote(note) {
    keyAudios[note].currentTime = 0;
    keyAudios[note].volume = 0.50;
    keyAudios[note].play();
  }

  useEffect(() => {
    window.onmousedown = () => {
      setMouseDown(true);
    }
    window.onmouseup = () => {
      setMouseDown(false);
    }
  }, [window]);

  return (
    <div className="KeyBoard">
      {OCTAVES.map((octave) => 
        <Octave key={octave} octave={octave} KEYS={KEYS} mouseDown={mouseDown} playNote={playNote}/>
      )}
    </div>
  )
};

export default KeyBoard;