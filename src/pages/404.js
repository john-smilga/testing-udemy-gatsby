import React from 'react'
import { Link } from 'gatsby'

// Components
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

// Styles
import styles from '../css/error.module.css'

// The Component
export default function error() {
  return (
    <Layout>
      <SEO title="Error"/>
      <header className={styles.error}>
        <Banner title="Oups The page don't exists">
          <Link className="btn-white" to="/" alt="Back to Home">
            Back to Home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
