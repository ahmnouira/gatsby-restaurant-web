import React from "react"
import Title from "./Title"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Section } from "./Section"
import Product from "./Product"

export default function Menu() {
  const query = useStaticQuery(graphql`
    {
      items: allContentfulGatsbyRestaurantWebMenus {
        edges {
          node {
            id
            name
            price
            ingredients
            image {
              url
              gatsbyImageData(width: 160, height: 160, quality: 100)
            }
          }
        }
      }
    }
  `)

  const { edges } = query.items

  return (
    <Section>
      <Title title={"featured items"} message={"little taste"} />
      <ProductList>
        {edges.map(item => {
          return <Product key={item.node.id} product={item.node} />
        })}
      </ProductList>
    </Section>
  )
}

export const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
