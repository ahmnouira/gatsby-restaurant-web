import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHero } from "../components/hero"
import menuImg from "../images/bcg/menuBcg.jpg"

const MenuPage = () => (
  <Layout>
    <SEO title={"Menu"}></SEO>
    <PageHero img={menuImg}></PageHero>
    <h3>Menu Page</h3>
  </Layout>
)
export default MenuPage
