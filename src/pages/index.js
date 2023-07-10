import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Seo from "../components/seo"
import { HomeHero } from "../components/hero"
import img from "../images/bcg/homeBcg.jpg"

const IndexPage = () => (
  <Layout>
    <Seo title={"Home"} />
    <HomeHero img={img}>
      <Banner
        title={"Fine Dinning"}
        subtitle={"65, MG Road- Bangalore, KA"}
      ></Banner>
    </HomeHero>
  </Layout>
)
export default IndexPage
