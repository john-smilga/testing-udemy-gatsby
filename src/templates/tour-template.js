import React from 'react'
import {graphql} from 'gatsby'

// Components
import Img from 'gatsby-image'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import HeroPage from '../components/HeroPage'
import Journey from '../components/Tours/Journey'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {MapAlt,Money} from '@styled-icons/boxicons-regular'

// Styles
import styles from '../css/template.module.css'

// Query
export const query = graphql`
  query ($slug: String!) {
    tour:contentfulTour(slug: {eq: $slug}) {
      name
      price
      country
      start(formatString: "dddd, DD MMMM YYYY")
      days
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

// The Component
const TourTemplate = ({data}) => {
  const {name,country,days,price,start,description:{description},journey,images}=data.tour
  const [mainImage,...tourImages] = images
  return (
    <Layout>
      <SEO title={name}/>
      <HeroPage img={mainImage.fluid}/>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {
              tourImages.map((item,index)=>{
                return <Img Key={index} fluid={item.fluid} alt="single image" className={styles.image}/>
              })
            }
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p><Money  className={styles.icon}/>${price}</p>
            <p><MapAlt className={styles.icon}/>{country}</p>
          </div>
          <h4>start on : {start}</h4>
          <h4>Duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>Daily Schedule</h2>
          <div className={styles.journey}>
            {
              journey.map((item,index)=>{
                return <Journey Key={index} day={item.day} info={item.info}/>
              })
            }
          </div>
          
          <AniLink to="/tours" className="btn btn-primary">Return to Tours</AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default TourTemplate
