import { useState } from "react";
import { Nav } from "./styles";

const NavBar = ({ title }) => {
  const [navColor, setNavColor] = useState('#000000')

  const handleNavColor = () => {
    if (navColor === '#000000') {
      setNavColor('#6A5ACD')
    } else {
      setNavColor('#000000')
    }
  }

  return (
    <Nav navColor={navColor} onClick={handleNavColor}>
      <h1>{title}</h1>
    </Nav>
  );
};

export default NavBar;
