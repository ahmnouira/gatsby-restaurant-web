import * as React from "react"
import img from "../images/bcg/aboutBcg.jpg"
import Wrapper from "../components/wrapper/Wrapper"

const AboutPage = () => (
  <Wrapper
    title={"About"}
    img={img}
    banner={{
      title: "about us",
      subtitle: "a little about us",
    }}
  />
)
export default AboutPage
