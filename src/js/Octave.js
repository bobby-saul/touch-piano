import React from "react";
import Key from "./Key";

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

const Octave = ({octave}) => {
  return (
    <div className={"Octave Octave-" + octave}>
      {KEYS.map((key, index) => {
        if (octave < 3 || index < 5) {
          return <Key octave={octave} octaveKey={key} key={key} index={index}/>
        }
      })}
    </div>
  )
};

export default Octave;