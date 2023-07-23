import * as React from "react"
import Wrapper from "../components/wrapper"
import QuickInfo from "../components/home/QuickInfo"

const IndexPage = () => (
  <Wrapper
    title={"Home"}
    banner={{
      title: "Fine Dinning",
      subtitle: "65, MG Road- Bangalore, KA",
    }}
  >
    <QuickInfo />
  </Wrapper>
)
export default IndexPage
