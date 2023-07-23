import * as React from "react"
import img from "../images/bcg/menuBcg.jpg"
import Wrapper from "../components/wrapper/Wrapper"

const MenuPage = () => (
  <Wrapper
    title={"Menu"}
    img={img}
    banner={{
      title: "our menu",
      subtitle: "The best in town",
    }}
  />
)
export default MenuPage
