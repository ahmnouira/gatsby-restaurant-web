import React, { useState } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"
import { styled } from "styled-components"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavbar = () => {
    setOpen(value => !value)
  }

  return (
    <NavWrapper>
      <NavbarHeader onClick={handleNavbar} />
      <NavbarLinks open={open} />
      <NavbarIcons />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
