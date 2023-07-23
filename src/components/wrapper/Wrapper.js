import React from "react"
import { HomeHero, PageHero } from "../hero/Hero"
import Banner from "../banner/Banner"
import { BannerButton } from "../banner/BannerButton"
import Layout from "../layout/Layout"
import Seo from "../Seo"

export default function Wrapper({ title, banner, img, children }) {
  const _renderContent = () => {
    if (title === "404") {
      return <div>404 Not Found</div>
    } else if (title === "Home") {
      return (
        <React.Fragment>
          <HomeHero img={img}>
            <Banner title={banner.title} subtitle={banner.subtitle}>
              <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
            </Banner>
          </HomeHero>
          {children}
        </React.Fragment>
      )
    } else {
      return (
        <PageHero img={img}>
          <Banner title={banner.title} subtitle={banner.subtitle}></Banner>
          {children}
        </PageHero>
      )
    }
  }

  return (
    <Layout>
      <Seo title={title}>{_renderContent()}</Seo>
    </Layout>
  )
}
