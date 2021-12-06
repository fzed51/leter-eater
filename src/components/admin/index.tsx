import React, { FC, useState } from "react";
import { load, store } from "../../tools/storage";
import { Text } from "../text";
import { v4 as uuid } from "uuid";
import FormEditText from "../form-edit-text";
import Table from "./table";
export interface AdminPanelProps {}

const AdminPanel: FC<AdminPanelProps> = ({}) => {
  const texts = load<Text[]>("texts", []);
  const [state, update] = useState(false);
  const [edited, setEdited] = useState<Text | null>(null);
  const addNew = () => {
    setEdited({
      title: "",
      ref: uuid(),
    });
  };
  const onEdit = (t: Text) => {
    setEdited(t);
  };
  const onDelete = (t: Text) => {
    store(
      "texts",
      texts.filter((txt) => txt.ref !== t.ref)
    );
    update(!state);
  };
  return edited ? (
    <FormEditText text={edited} onClose={() => setEdited(null)} />
  ) : (
    <Table texts={texts} onAdd={addNew} onEdit={onEdit} onDelete={onDelete} />
  );
};

export default AdminPanel;
