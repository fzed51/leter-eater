import React, { FC } from "react";
import AdminPanel from "../../components/admin";
import Header from "../../components/header";
import Window from "../../components/window";

export interface AdminProps {}

const Admin: FC<AdminProps> = ({}) => {
  return (
    <Window head={<Header />}>
      <AdminPanel />
    </Window>
  );
};

export default Admin;
