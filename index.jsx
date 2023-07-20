import React, { useRef, useEffect } from "react";
import { checkStrong } from "./index";

import React from "react";

const Demo = ({ value }) => {
  const safeRef = useRef([]);

  useEffect(() => {
    const safe = checkStrong(value);

    if (safe === 0 || safe === 1) {
      safeRef.current[0].style.backgroundColor = "#ea5455";
    } else {
      safeRef.current[0].style.backgroundColor = "#333333";
    }
    if (safe === 2) {
      safeRef.current[0].style.backgroundColor = "#ff9f43";
      safeRef.current[1].style.backgroundColor = "#ff9f43";
    } else {
      safeRef.current[1].style.backgroundColor = "#333333";
    }
    if (safe === 3 || safe === 4) {
      safeRef.current[0].style.backgroundColor = "#28c76f";
      safeRef.current[1].style.backgroundColor = "#28c76f";
      safeRef.current[2].style.backgroundColor = "#28c76f";
    } else {
      safeRef.current[2].style.backgroundColor = "#333333";
    }
  }, [value]);

  return (
    <div className="safe">
      {Array(3)
        .fill()
        .map((_, index) => (
          <div key={index} className="safe-item" ref={(el) => (safeRef.current[index] = el)}></div>
        ))}
      <div className="safe-text">
        {checkStrong(value) === 0 || checkStrong(value) === 1 ? (
          <span className="High">High risk</span>
        ) : checkStrong(value) === 2 ? (
          <span className="Average">Average</span>
        ) : (
          <span className="Secure">Secure</span>
        )}
      </div>
    </div>
  );
};

export default Demo;
