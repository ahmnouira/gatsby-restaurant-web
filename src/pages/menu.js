import * as React from "react"
import Wrapper from "../components/wrapper"
import img from "../images/bcg/menuBcg.jpg"

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
