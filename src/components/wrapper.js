import React from "react"
import { HomeHero, PageHero } from "./Hero"
import Seo from "./Seo"
import Banner from "./banner/Banner"
import { BannerButton } from "./banner/BannerButton"
import Layout from "./Layout"

export default function Wrapper({ title, banner, img, children }) {
  return (
    <Layout>
      <Seo title={title} />
      {title === "Home" ? (
        <React.Fragment>
          <HomeHero img={img}>
            <Banner title={banner.title} subtitle={banner.subtitle}>
              <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
            </Banner>
          </HomeHero>
          {children}
        </React.Fragment>
      ) : (
        <PageHero img={img}>
          <Banner title={banner.title} subtitle={banner.subtitle}></Banner>
          {children}
        </PageHero>
      )}
    </Layout>
  )
}
