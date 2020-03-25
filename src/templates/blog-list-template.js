import React from 'react'
import {graphql} from 'gatsby'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Title from '../components/Title'
import BlogCard from '../components/Blog/BlogCard'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Styles
import styles from '../css/blog.module.css'

// Query
export const query = graphql`
query ($limit: Int!, $skip: Int!) {
  posts: allContentfulPost(limit: $limit, skip: $skip, sort: {fields: published, order: DESC}) {
    edges {
      node {
        slug
        title
        contentful_id
        published(formatString: "DD MMMM YYYY")
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

// The Component
const BlogListTemplate = (props) => {
  const {data} = props
  const {numPages,currentPage} = props.pageContext

  const prevPage = currentPage -1===1?`/blogs/`:`/blogs/${currentPage-1}`
  const nextPage = `/blogs/${currentPage + 1}`
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  return (
    <Layout>
      <SEO title="Latest Blogs"/>
      <section className={styles.blog}>
        <Title title="Latests" subTitle="Blogs"/>
        <div className={styles.center}>
          {data.posts.edges.map(({node})=>{
            return<BlogCard Key={node.contentful_id} postCard={node}/>
          })
        }
      </div>
      <div className={styles.links}>
        {
          !isFirst && <AniLink fade to={prevPage} className={styles.link}>Prev</AniLink>
        }
        {Array.from({length:numPages},(_,index)=>{
          return (
            <AniLink fade 
              className={index +1 === currentPage?`${styles.link} ${styles.active}`:`${styles.link}`} 
              to={index===0?`/blogs/`:`/blogs/${index + 1}`}>
              {index + 1}
            </AniLink>
          )
        })}
        {
          !isLast && <AniLink fade to={nextPage} className={styles.link}>Next</AniLink>
        }
      </div>
    </section>
    </Layout>
  )
}

export default BlogListTemplate
