import * as React from "react"
import { styled } from "styled-components"
import img from "../images/bcg/homeBcg.jpg"

function HomeHero({ img, children }) {
  return <HeaderWrapper img={img}>{children}</HeaderWrapper>
}

HomeHero.defaultProps = {
  img: img,
}

const HeaderWrapper = styled.header`
  min-height: calc(100vh - 68px);
  background:
    linear-gradient(rgba(0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageHeaderWrapper = styled(HeaderWrapper)`
  min-height: 60vh;
`

function PageHero({ img, children }) {
  return <PageHeaderWrapper img={img}>{children}</PageHeaderWrapper>
}

PageHero.defaultProps = {
  img: img,
}

export { HomeHero, PageHero }
