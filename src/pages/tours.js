import React, { Component } from "react"
import { graphql } from "gatsby"

// Components
import SEO from '../components/SEO'
import Layout from "../components/Layout"
import HeroPage from "../components/HeroPage"
import Tours from '../components/Tours/Tours'

// Query
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

// The Component
export default class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO title="All Tours"/>
        <HeroPage img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <Tours/>
      </Layout>
    )
  }
}
