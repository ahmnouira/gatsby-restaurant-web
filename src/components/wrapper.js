import React from "react"
import Banner from "./banner"
import { HomeHero, PageHero } from "./hero"
import Layout from "./layout"
import Seo from "./seo"
export default function Wrapper({ title, banner, img }) {
  return (
    <Layout>
      <Seo title={title} />
      {title === "Home" ? (
        <HomeHero img={img}>
          <Banner title={banner.title} subtitle={banner.subtitle}></Banner>
        </HomeHero>
      ) : (
        <PageHero img={img}>
          <Banner title={banner.title} subtitle={banner.subtitle}></Banner>
        </PageHero>
      )}
    </Layout>
  )
}
