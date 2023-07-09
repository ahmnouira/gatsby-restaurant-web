import React from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

export default function Navbar() {
  return (
    <nav>
      <NavbarHeader />
      <NavbarLinks />
      <NavbarIcons />
    </nav>
  )
}
