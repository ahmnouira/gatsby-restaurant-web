import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import React from "react"
import { FaAlignRight } from "react-icons/fa"
import { styled } from "styled-components"
import { styles } from "../../utils"

export default function NavbarHeader({ onClick }) {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="Company logo" />
      </Link>
      <FaAlignRight className="toggle-icon" onClick={onClick}></FaAlignRight>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }

  // for bigger devices +768px
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`
