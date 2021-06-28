import React, {useState, useEffect} from "react";

const Key = ({octave, octaveKey, index, mouseDown, playNote}) => {
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  function playKeyNote() {
    playNote(octave + "-" + octaveKey);
    setPressed(true);
  }

  function mouseEnterHandler() {
    if (mouseDown) {
      playKeyNote();
    }
  }

  function pressCheck() {
    setHovering(true);
    if (mouseDown) {
      playKeyNote();
    }
  }

  function unpress() {
    setHovering(false);
    setPressed(false);
  }

  useEffect(() => {
    if (hovering && mouseDown) {
      playKeyNote();
    }
    if (!mouseDown && pressed) {
      setPressed(false);
    }
  }, [mouseDown]);

  return (
    <div
      className={"Key Key-" + (octaveKey.length > 1 ? "HalfStep" : "WholeStep") + (pressed ? " Pressed" : " Off")} data-octave-key={index}
      onMouseEnter={pressCheck}
      onMouseLeave={unpress}
    >
    </div>
  )
};

export default Key;