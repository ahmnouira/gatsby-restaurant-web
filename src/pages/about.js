import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHero } from "../components/hero"
import aboutImg from "../images/bcg/aboutBcg.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title={"About"}></SEO>
    <PageHero img={aboutImg}>
      <h3>About Page</h3>
    </PageHero>
  </Layout>
)
export default AboutPage
