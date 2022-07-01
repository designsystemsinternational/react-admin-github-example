import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Home page</h1>
      <Link to="/admin">Go to React Admin</Link>
    </main>
  );
};

export default IndexPage;
