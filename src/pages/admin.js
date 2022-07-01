import * as React from "react";
import { Router } from "@reach/router";
import Admin from "../components/admin";

const AdminPage = () => {
  return (
    <Router basepath="/admin">
      <Admin path="/" />
    </Router>
  );
};

export default AdminPage;
