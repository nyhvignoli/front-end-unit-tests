import { useState } from "react";
import { Nav } from "./styles";

const NavBar = ({ title }) => {
  const [navColor, setNavColor] = useState('black')

  const handleNavColor = () => {
    if (navColor === 'black') {
      setNavColor('blue')
    } else {
      setNavColor('black')
    }
  }

  return (
    <Nav navColor={navColor} onClick={handleNavColor}>
      <h1>{title}</h1>
    </Nav>
  );
};

export default NavBar;
