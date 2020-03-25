import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from '../components/SEO'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import HeroPage from "../components/HeroPage"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FeaturedTours from '../components/Home/FeaturedTours'

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
export default ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <HeroPage home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="Continue exploring" info="lorem ipsum dolor">
        <AniLink fade className="btn-white" to="/tours/" alt="Wiew all Tours">
          Explore Tours
        </AniLink>
      </Banner>
    </HeroPage>
    <About />
    <Services />
    <FeaturedTours/>
  </Layout>
)
