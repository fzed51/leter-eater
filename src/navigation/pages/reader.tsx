import React, { FC } from "react";
import Window from "../../components/window";
import Header from "../../components/header";
import Game from "../../components/game";

const Reader: FC = () => (
  <Window head={<Header />}>
    <Game />
  </Window>
);

export default Reader;
