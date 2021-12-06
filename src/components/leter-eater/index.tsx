import React, { FC, useState, useEffect, SyntheticEvent, useRef } from "react";
import { SpeedTotem } from "../speed";
import "./style.scss";

interface Point {
  x: number;
  y: number;
}

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

  const handleGoBack = (e: SyntheticEvent) => {
    e.preventDefault();
    setPosition(0);
  };

  text.replace("/\r/g", "").replace("/\t/g", "");
  const readed = text.substring(0, Math.min(lTxt, position));

  return (
    <div className="leter-eater">
      <nav className="leter-eater--command">
        <button onClick={handleGoBack}>⏮</button>
        <button onClick={toggleRun}>{run ? "⏸" : "▶"}</button>({position}/{lTxt}
        )
      </nav>
      <div className="leter-eater--text-container">
        <div className="leter-eater--text">
          <span className="leter-eater--leter">{text}</span>
        </div>
        <div className="leter-eater--mask">
          <span className="leter-eater--eated">{readed}</span>
          <span className="leter-eater--head">{speed.head}</span>
        </div>
      </div>
    </div>
  );
};

export default LeterEater;
