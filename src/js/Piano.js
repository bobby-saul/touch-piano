import React from "react";
import PianoTop from './PianoTop';
import KeyBoard from './KeyBoard';

const Piano = () => {
  return (
    <div className="Piano-Wrapper">
      <PianoTop />
      <KeyBoard />
    </div>
  )
};

export default Piano;