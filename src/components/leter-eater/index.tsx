import React, { FC, useState, useEffect, useRef } from "react";
import { SpeedTotem } from "../speed";
export interface LeterEaterProps {
  speed: SpeedTotem;
  text: string;
}

const LeterEater: FC<LeterEaterProps> = ({ speed, text }) => {
  const [position, setPosition] = useState<number>(0);
  const [run, setRun] = useState<boolean>(false);
  let interval: NodeJS.Timeout;
  const refresh = (60 * 1000) / speed.speed;
  const lTxt = text.length;

  useEffect(() => {
    interval = setTimeout(() => {
      run && setPosition(position + 1);
    }, refresh);
    return () => {
      clearTimeout(interval);
    };
  }, [refresh, position, run]);

  const toggleRun = () => {
    setRun(!run);
  };

  const readed = text.substring(0, Math.min(lTxt, position));
  const read = text.substring(Math.min(lTxt, position), lTxt);

  return (
    <div className="leter-eater-container">
      <nav>
        <button>⏮</button>
        <button onClick={toggleRun}>{run ? "⏸" : "▶"}</button>({position}/{lTxt}
        )
      </nav>
      <pre
        className="text-container"
        style={{
          whiteSpace: "pre-line",
          fontFamily: "OpenDyslexic",
          fontSize: "0.7cm",
          margin: "auto",
          width: "40em",
        }}
      >
        <span style={{ color: "transparent" }}>{readed}</span>
        <span style={{ position: "absolute", marginLeft: "-1.25em" }}>
          {speed.head}
        </span>
        <span>{read}</span>
      </pre>
    </div>
  );
};

export default LeterEater;
