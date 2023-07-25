import * as React from "react"
import Wrapper from "../components/wrapper/Wrapper"
import QuickInfo from "../components/home/QuickInfo"
import Gallery from "../components/home/Gallery"
import Menu from "../components/home/Menu"

const IndexPage = () => (
  <Wrapper
    title={"Home"}
    banner={{
      title: "Fine Dinning",
      subtitle: "65, MG Road- Bangalore, KA",
    }}
  >
    <QuickInfo />
    <Gallery />
    <Menu />
  </Wrapper>
)
export default IndexPage
