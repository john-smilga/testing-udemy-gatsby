import React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

// Query

const getDefaultBcgImage = graphql`
query{
    file(relativePath: {eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeroPage = ({ img, home, className, children }) => {
  const data = useStaticQuery(getDefaultBcgImage)
  const defaultImage = data.file.childImageSharp.fluid
  return (
    <BackgroundImage className={className} home={home} fluid={img||defaultImage}>
      {children}
    </BackgroundImage>
  )
}

export default styled(HeroPage)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
