import React, {useEffect, useState} from "react";
import Octave from './Octave';

const OCTAVES = [
  1,
  2,
  3,
];

const KeyBoard = () => {
  const [mouseDown, setMouseDown] = useState(false);

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
        <Octave key={octave} octave={octave} mouseDown={mouseDown} />
      )}
    </div>
  )
};

export default KeyBoard;