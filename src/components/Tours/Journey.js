import React,{useState} from 'react'
import {ChevronDown} from 'styled-icons/boxicons-solid/ChevronDown'
import styles from '../../css/day.module.css'
const Journey = ({day,info}) => {
  const [isShowInfo,setShowInfo]=useState(false)

const toggleAccordion = () =>{
  setShowInfo(isShowInfo => !isShowInfo)
}

  return (
    <div className={styles.day}>
      <h4>{day}
        <button onClick={toggleAccordion} className={styles.btn}>
          <ChevronDown/>
        </button>
      </h4>
  {isShowInfo && <p>{info}</p>}
    </div>
  )
}

export default Journey
