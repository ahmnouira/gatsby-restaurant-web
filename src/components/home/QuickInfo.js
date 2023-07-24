import React from "react"
import Title from "./Title"
import styled from "styled-components"
import { SectionButton } from "../banner/SectionButton"
import { styles } from "../../utils"
import { Link } from "gatsby"
import { Section } from "./Section"

export default function QuickInfo() {
  return (
    <Section>
      <Title title={"our mission"} message={"let us tell you"}></Title>
      <QuickInfoWrapper>
        <p className="text">
          Our mission is to serve you authetic dishes from north karnataka.
          these dishes are created by our top chefs, from the region. Some of
          our awesome dishes are - Menther kadabu, Pundi Soppu, Jolad Rotti,
          Ragi Ambali, Nargis Man Dak ki, Mudde, Girmit and many more.
        </p>
        <Link to="/about/" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`
