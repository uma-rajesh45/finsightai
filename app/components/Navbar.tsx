import { checkUser } from "@/lib/checkUser";
import React from "react";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = checkUser();
  return <h1>Navbar</h1>;
};

export default Navbar;
