import React, { FC, useState, ChangeEvent, SyntheticEvent } from "react";
import { load, store } from "./../tools/storage";
import { Text } from "./text";

export interface FormEditTextProps {
  text: Text;
  onClose: () => void;
}

const FormEditText: FC<FormEditTextProps> = ({ text, onClose }) => {
  const [content, setContent] = useState<string>(load(text.ref, ""));
  const [title, setTitle] = useState<string>(text.title);
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const texts = load<Text[]>("texts", []);
    const isNew = !texts.map((t) => t.ref).includes(text.ref);
    store(text.ref, content);
    if (isNew) {
      store("texts", [...texts, { ...text, title }]);
    } else {
      store(
        "texts",
        texts.map((txt) => (txt.ref === text.ref ? { ...text, title } : txt))
      );
    }
    onClose();
  };
  const handleAbort = (e: SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        titre :<input type="text" value={title} onChange={handleChangeTitle} />
      </label>
      <label>
        texte :<textarea value={content} onChange={handleChangeContent} />
      </label>
      <button>Enregistrer</button>
      <button>Annuler</button>
    </form>
  );
};

export default FormEditText;
