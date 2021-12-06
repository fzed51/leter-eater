import React, { FC } from "react";
import "./style.scss";

export interface WindowProps {
  head: undefined | JSX.Element | string;
  children: undefined | JSX.Element | string;
}

const Window: FC<WindowProps> = ({ head, children }) => {
  return (
    <div className="window">
      <div className="window-header">{head}</div>
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
