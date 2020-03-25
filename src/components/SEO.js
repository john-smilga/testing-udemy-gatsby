import React from 'react'
import Helmet from 'react-helmet'
import {useStaticQuery,graphql} from 'gatsby'

const getSiteMetaData = graphql`
query SiteMetaData {
  site {
    siteMetadata {
      siteTitle
      siteDescription
      siteUrl
      image
      author
      twitterUsername
    }
  }
}
`

const SEO = ({title,description}) => {
  const SiteMetaData = useStaticQuery(getSiteMetaData)
  const {siteTitle,siteDescription,siteUrl,image,twitterUsername} = SiteMetaData.site.siteMetadata
  return (
    <Helmet htmlAttributes={{lang:"fr"}} title={`${title} - ${siteTitle}`}>
      <meta name="description" content={description || siteDescription}/>
      <meta name="image" content={image}/>
       {/* Facebook Card */}
      <meta property="og:url" content={siteUrl}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={siteTitle}/>
      <meta property="og:description" content={siteDescription}/>
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:creator" content={twitterUsername}/>
      <meta name="twitter:title" content={siteTitle}/>
      <meta name="twitter:description" content={siteDescription}/>
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
