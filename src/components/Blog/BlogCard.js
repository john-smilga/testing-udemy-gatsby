import React from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from '../../css/blog-card.module.css'
const BlogCard = ({postCard}) => {
  const {title, slug, published, image} = postCard
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Img className={styles.img} fluid={image.fluid} alt="Single Post Image"/>
        <AniLink className={styles.link} to={`/blog/${slug}`}>Details</AniLink>
        <h6 className={styles.date}>Published at :{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
