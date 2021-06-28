import React from "react";
import sheetImg from '../image/music-sheet.jpg';

const PianoTop = () => {
  return (
    <div className="PianoTop">
      {/* <div>Options</div>
      <div>Buttons</div> */}
      <div className="PianoTop-SheetMusic">
        <img src={sheetImg} />
      </div>
    </div>
  )
};

export default PianoTop;