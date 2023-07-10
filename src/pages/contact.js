import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHero } from "../components/hero"
import contactImg from "../images/bcg/contactBcg.jpg"

const ContactPage = () => (
  <Layout>
    <SEO title={"Contact"}></SEO>

    <PageHero img={contactImg}>
      <h3>Contact Page</h3>
    </PageHero>
  </Layout>
)
export default ContactPage
