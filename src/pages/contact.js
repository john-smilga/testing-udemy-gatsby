import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from '../components/SEO'
import Layout from "../components/Layout"
import HeroPage from "../components/HeroPage"
import Title from "../components/Title"
import ContactForm from "../components/ContactForm"

// Query
export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contactBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

// The Component
export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact Us"/>
      <HeroPage img={data.contactBcg.childImageSharp.fluid} />
      <div className="contact">
        <Title title="Contact" subTitle="Us" />
        <ContactForm />
      </div>
    </Layout>
  )
}
