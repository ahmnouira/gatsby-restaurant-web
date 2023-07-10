import React from "react"
import { HomeHero, PageHero } from "./Hero"
import Seo from "./Seo"
import Banner from "./banner/Banner"
import { BannerButton } from "./banner/BannerButton"
import Layout from "./Layout"

export default function Wrapper({ title, banner, img }) {
  return (
    <Layout>
      <Seo title={title} />
      {title === "Home" ? (
        <HomeHero img={img}>
          <Banner title={banner.title} subtitle={banner.subtitle}>
            <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
          </Banner>
        </HomeHero>
      ) : (
        <PageHero img={img}>
          <Banner title={banner.title} subtitle={banner.subtitle}></Banner>
        </PageHero>
      )}
    </Layout>
  )
}
