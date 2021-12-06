import React, { FC, useState, SyntheticEvent } from "react";
import LeterEater from "./leter-eater";
import { cochon, lapin, SpeedTotem } from "./speed";
import "./style.scss";
// ./app.d.ts

const speeds: SpeedTotem[] = [cochon, lapin];

const App: FC = () => {
  const [speed, setSpeed] = useState<SpeedTotem>(cochon);
  const [text, setText] = useState<string>("");

  const handleSetSpeed = (s: SpeedTotem) => (e: SyntheticEvent) => {
    e.preventDefault();
    setSpeed(s);
  };

  const handleSetText = (e: SyntheticEvent) => {
    e.preventDefault();
    import("./textes/racine.txt").then((module) => {
      setText(module.default);
    });
  };

  return (
    <div className="leter-eater-app">
      <div>
        <ul>
          <li>
            <button onClick={handleSetText}>racine</button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {speeds.map((speed, idx) => {
            return (
              <li key={idx}>
                <button onClick={handleSetSpeed(speed)}>{speed.name}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <LeterEater speed={speed} text={text} />
      </div>
    </div>
  );
};

export default App;
