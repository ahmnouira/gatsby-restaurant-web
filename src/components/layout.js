import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

export default function Layout({ children }) {
  /*
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */

  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #262626;
    background-color: #fff;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
