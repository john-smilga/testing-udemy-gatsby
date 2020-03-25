import React from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery,graphql} from 'gatsby'

// Components
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {MapAlt} from '@styled-icons/boxicons-regular/MapAlt'
// styles
import styles from '../../css/tour.module.css'

// query
const getDefaultImage = graphql`
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

const Tour = ({tourDatas}) => {
    const {images,slug,name,country,days,price} = tourDatas
    const data = useStaticQuery(getDefaultImage)
    const img = data.file.childImageSharp.fluid

    let mainImage = images?images[0].fluid:img
    return (
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                <Img fluid={mainImage} className={styles.img} alt="single tour image"/>
                <AniLink className={styles.link} fade to={`/tours/${slug}`}>Details</AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.info}>
                    <h4 className={styles.country}>
                        <MapAlt className={styles.icon}/>{country || "default country"}</h4>
                    <div className={styles.details}>
                        <h6>{days} days</h6>
                        <h6>from ${price}</h6>
                    </div>
                </div>
            </div>
        </article>
    )
}

Tour.propTypes = {
    tourDatas:PropTypes.shape({
        name:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
        days:PropTypes.number.isRequired,
        price:PropTypes.number.isRequired,
        Img:PropTypes.arrayOf(PropTypes.object),
    })
}

export default Tour
