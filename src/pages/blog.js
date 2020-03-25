import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from '../components/SEO'
import Layout from "../components/Layout"
import HeroPage from "../components/HeroPage"
import BlogList from '../components/Blog/BlogList'

// Query
export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

// The Component
const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog"/>
      <HeroPage img={data.blogBcg.childImageSharp.fluid} />
      <BlogList/>
    </Layout>
  )
}
export default blog
