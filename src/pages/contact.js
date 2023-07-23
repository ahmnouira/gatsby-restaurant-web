import * as React from "react"
import img from "../images/bcg/contactBcg.jpg"
import Wrapper from "../components/wrapper/Wrapper"

const ContactPage = () => (
  <Wrapper
    title={"Contact"}
    img={img}
    banner={{
      title: "contact us",
      subtitle: "let's get in touch",
    }}
  />
)
export default ContactPage
