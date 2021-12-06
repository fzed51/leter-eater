import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

export interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  const handleGoAdmin = () => {
    navigate("/admin");
  };
  return (
    <div className="header">
      <div className="heaer-title" onClick={handleGoHome}>
        Leter eater !
      </div>
      <div className="heaer-admin" onClick={handleGoAdmin}>
        ⚙
      </div>
    </div>
  );
};

export default Header;
