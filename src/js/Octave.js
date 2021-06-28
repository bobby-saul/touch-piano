import React from "react";
import Key from "./Key";

const Octave = ({octave, KEYS, mouseDown, playNote}) => {
  return (
    <div className={"Octave Octave-" + octave}>
      {KEYS.map((key, index) => {
        if (octave < 3 || index < 5) {
          return <Key octave={octave} octaveKey={key} key={key} index={index} mouseDown={mouseDown} playNote={playNote}/>
        }
      })}
    </div>
  )
};

export default Octave;