import React from "react";
import Octave from './Octave';

const OCTAVES = [
  1,
  2,
  3,
];

const KeyBoard = () => {
  return (
    <div className="KeyBoard">
      {OCTAVES.map((octave) => 
        <Octave key={octave} octave={octave} />
      )}
    </div>
  )
};

export default KeyBoard;