import * as React from "react"
import Layout from "../components/layout"
import { FaBlackTie } from "react-icons/fa"
import SEO from "../components/seo"
import { HomeHero } from "../components/hero"
import img from "../images/bcg/homeBcg.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title={"Home"} />
    <HomeHero img={img}>
      <h3>
        <FaBlackTie />
        The Restaurant Site
      </h3>
    </HomeHero>
  </Layout>
)
export default IndexPage
