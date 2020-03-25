import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Title from '../Title'
import BlogCard from './BlogCard'
import styles from '../../css/blog.module.css'

export const getPosts = graphql`
query{
  posts: allContentfulPost(sort: {fields: published, order: DESC}) {
    edges {
      node {
        title
        slug
        published(formatString: "DD MMMM YYYY")
        createdAt(formatString: "DD MMMM YYYY")
        contentful_id
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

const BlogList = () => {
  const {posts} = useStaticQuery(getPosts)
  console.log(posts)
  return (
    <section className={styles.blog}>
      <Title title="Our" subTitle="Blog"/>
      <div className={styles.center}>
        {
          posts.edges.map(({node})=>{
            return(
              <BlogCard Key={node.contentful_id} postCard={node}/>
            )
          })
        }
      

      </div>
    </section>
  )
}

export default BlogList
