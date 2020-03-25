import React from 'react'
import ToursList from '../Tours/ToursList'
import {useStaticQuery,graphql} from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
const getTours = graphql`
query{
    tours:allContentfulTour {
      edges {
        node {
          contentful_id
          country
          days
          
          name
          price
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`


const Tours = () => {
  const {tours} = useStaticQuery(getTours)
  return (
    <section className={styles.tours}>
      <Title title="All" subTitle="tours"/>
      <div className={styles.center}>
      <ToursList tours={tours}/>
      </div>
    </section>
  )
}

export default Tours
