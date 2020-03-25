import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import Styles from "../../css/about.module.css"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={Styles.about}>
      <Title title="About" subTitle="Us" />
      <article className={Styles.aboutCenter}>
        <div className={Styles.aboutImg}>
          <div className={Styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </div>
        <div className={Styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </div>
      </article>
    </section>
  )
}

export default About
