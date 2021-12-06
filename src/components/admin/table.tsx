import React, { FC } from "react";
import { Text } from "../text";

export interface TableProps {
  texts: Text[];
  onAdd: () => void;
  onEdit: (t: Text) => void;
  onDelete: (t: Text) => void;
}

const Table: FC<TableProps> = ({ texts, onAdd, onEdit, onDelete }) => {
  return (
    <div>
      <table>
        <tr>
          <th>titre</th>
          <th>
            action{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                onAdd();
              }}
            >
              ➕
            </button>
          </th>
        </tr>
        {texts.map((text, idx) => {
          return (
            <tr key={idx}>
              <td>{text.title}</td>
              <td>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onEdit(text);
                  }}
                >
                  ✏
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (confirm("Voulez-vous supprimer ce texte")) {
                      onDelete(text);
                    }
                  }}
                >
                  🗑
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
