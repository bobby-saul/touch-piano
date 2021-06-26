import React from "react";

const Key = ({octave, octaveKey, index}) => {
  return (
    <div className={"Key Key-" + (octaveKey.length > 1 ? "HalfStep" : "WholeStep")} data-octave-key={index}>
    </div>
  )
};

export default Key;