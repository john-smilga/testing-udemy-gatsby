import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
// Composants
import Tittle from '../Title'
import Tour from '../Tours/Tour'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// Styles
import styles from '../../css/items.module.css'
// Queries
const getTours = graphql`
query{
    featuredTours:allContentfulTour(filter: {featured: {eq: true}}) {
      edges {
        node {
          contentful_id
          country
          days
          featured
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
const FeaturedTours = () => {
    const toursData = useStaticQuery(getTours)
const tours = toursData.featuredTours.edges
//console.log(tours)

    return (
        <section className={styles.tours}>
            <Tittle title="featured" subTitle="Tours"/>
            les blocs
            <div className={styles.center}>
            {tours.map(({node})=>{
                return(
                    <Tour key={node.contentful_id} tourDatas={node}/>
                )
            })}
            </div>
            
            <AniLink to="/tours" className="btn btn-primary">View Tours</AniLink>
        </section>
    )
}

export default FeaturedTours
