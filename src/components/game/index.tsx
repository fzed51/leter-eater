import React, { FC, useState, SyntheticEvent } from "react";
import LeterEater from "../../components/leter-eater";
import speeds, { cochon, lapin, SpeedTotem } from "../../components/speed";
import { load, store } from "../../tools/storage";
import { Text } from "../../components/text";

const Game: FC = () => {
  const [speed, setSpeed] = useState<SpeedTotem>(cochon);
  const [text, setText] = useState<string>("");

  const texts = load<Text[]>("texts", []);

  const handleSetSpeed = (s: SpeedTotem) => (e: SyntheticEvent) => {
    e.preventDefault();
    setSpeed(s);
  };

  const handleSetText = (ref: string) => (e: SyntheticEvent) => {
    e.preventDefault();
    setText(load<string>(ref, ""));
  };

  return (
    <div className="game">
      <div className="game-list-text">
        <ul>
          {texts.map((txt, idx) => {
            return (
              <li key={idx}>
                <button onClick={handleSetText(txt.ref)}>{txt.title}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="game-list-speed">
        <ul>
          {speeds.map((speed, idx) => {
            return (
              <li key={idx}>
                <button onClick={handleSetSpeed(speed)}>
                  {speed.name} {speed.head}
                </button>
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

export default Game;
