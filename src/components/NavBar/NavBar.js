import { useState } from 'react'
import { Nav } from './styles'

const NavBar = ({ title }) => {
  const [showExtraContent, setShowExtraContent] = useState(false)

  return (
    <Nav>
      <h1
        onMouseOver={() => setShowExtraContent(true)}
        onMouseLeave={() => setShowExtraContent(false)}
      >
        {title || 'Hover me!'}
        {showExtraContent && <span>extra content</span>}
      </h1>
    </Nav>
  )
}

export default NavBar
