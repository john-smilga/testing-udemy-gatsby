import React from 'react'
import {graphql} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Styles
import styles from '../css/single-blog.module.css'

// Query
export const query = graphql`
  query ($slug: String!) {
    post: contentfulPost(slug: {eq: $slug}) {
      published(formatString: "dddd, DD MMMM YYYY")
      title
      text {
        json
      }
    }
  }
`

// The Component
const BlogTemplate = ({data}) => {
  const {title,published,text:{json}} = data.post
  const options = {
    renderNode:{
      "embedded-asset-block":(node)=>{
        const postImage = node.data.target.fields.file["en-US"].url
        return (
          <div className={styles.imgPlaceholder}>
            <img src={postImage} alt="Single image" alt="single image"/>
          </div>
        )
      },
      "embedded-entry-block":(node)=>{
        console.log(node)
        const {title,image,text} = node.data.target.fields
        return(
          <div className={styles.relatedPost}>
            <h3>{title["en-US"]}</h3>
            <img src={image["en-US"].fields.file["en-US"].url} width="400" alt="single image" />
            {documentToReactComponents(text['en-US'])}
          </div>
        )
      }
    }
  }

  return (
    <Layout>
      <SEO title={title}/>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>
            {title}
          </h1>
          <h4>Updated at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json,options)}
          </article>
          <AniLink className="btn-primary" to="/blog">Back to All Posts</AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
