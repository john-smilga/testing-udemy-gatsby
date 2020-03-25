import React from "react"
import services from "../../components/constants/services"
import Title from "../Title"
import Styles from "../../css/services.module.css"
const Services = () => {
  return (
    <div className={Styles.services}>
      <Title title="Our" subTitle="Services" />
      <div className={Styles.center}>
        {services.map((item, index) => {
          return (
            <article Key={index} className={Styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Services
