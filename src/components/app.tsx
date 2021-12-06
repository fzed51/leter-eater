import React, { FC, useState, SyntheticEvent } from "react";
import LeterEater from "./leter-eater";
import speeds, { cochon, lapin, SpeedTotem } from "./speed";
import { load, store } from "../tools/storage";
import { Text } from "./text";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import FormEditText from "./form-edit-text";
// ./app.d.ts

const App: FC = () => {
  const [speed, setSpeed] = useState<SpeedTotem>(cochon);
  const [text, setText] = useState<string>("");
  const [edited, setEdited] = useState<Text | null>(null);

  const texts = load<Text[]>("texts", []);

  const handleSetSpeed = (s: SpeedTotem) => (e: SyntheticEvent) => {
    e.preventDefault();
    setSpeed(s);
  };

  const handleSetText = (ref: string) => (e: SyntheticEvent) => {
    e.preventDefault();
    setText(load<string>(ref, ""));
  };

  const handleAddText = (e: SyntheticEvent) => {
    e.preventDefault();
    setEdited({
      title: "",
      ref: uuidv4(),
    });
  };

  return (
    <div className="leter-eater-app">
      {edited === null ? (
        <>
          <div>
            <ul>
              <button onClick={handleAddText}>Ajouter un text</button>
              {texts.map((txt, idx) => {
                return (
                  <li key={idx}>
                    <button onClick={handleSetText(txt.ref)}>
                      {txt.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul>
              {speeds.map((speed, idx) => {
                return (
                  <li key={idx}>
                    <button onClick={handleSetSpeed(speed)}>
                      {speed.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <LeterEater speed={speed} text={text} />
          </div>
        </>
      ) : (
        <FormEditText text={edited} onClose={() => setEdited(null)} />
      )}
    </div>
  );
};

export default App;
