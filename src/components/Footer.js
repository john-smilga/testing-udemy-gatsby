import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "./constants/links"
import socialIcons from "./constants/social-icons"
import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.linksList}>
        {links.map((item, index) => {
          return (
            <li className={styles.links} Key={index}>
              <AniLink fade to={item.path}>
                {item.name}
              </AniLink>
            </li>
          )
        })}
      </ul>
      <div className={styles.icons}>
        {socialIcons.map((item, i) => {
          return (
            <a Key={i} href={item.url}>
              {item.icon}
            </a>
          )
        })}
      </div>
      <p className={styles.copyright}>
        Copyright &copy; Backroads Travel Company 2019 All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
