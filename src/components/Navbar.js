import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "./constants/links"
import socialIcons from "./constants/social-icons"
import { AlignRight } from "styled-icons/fa-solid/AlignRight"
import logo from "../images/logo.svg"
import styles from "../css/navbar.module.css"
const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <AlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li Key={index}>
                <AniLink fade to={item.path}>
                  {item.name}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a Key={index} href={item.url}>
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
