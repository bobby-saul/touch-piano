import React, {useState, useEffect} from "react";

const Key = ({octave, octaveKey, index, mouseDown}) => {
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  function mouseEnterHandler() {
    if (mouseDown) {
      setPressed(true);
    }
  }

  function pressCheck() {
    setHovering(true);
    if (mouseDown) {
      setPressed(true);
    }
  }

  function unpress() {
    setHovering(false);
    setPressed(false);
  }

  useEffect(() => {
    if (hovering && mouseDown) {
      setPressed(true);
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