import React from "react"
import Title from "./Title"
import styled from "styled-components"

export default function QuickInfo() {
  return (
    <Section>
      <Title title={"our mission"} message={"let us tell you"}></Title>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem 0;
  width: 90vw;
  margin: 0 auto;
`
