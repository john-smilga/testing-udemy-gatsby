import React from 'react'
import styled from 'styled-components'
const Title = ({ title, subTitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subTitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;

  h4 {
    text-align: center;
    letter-spacing: 0.5rem;
    color: var(--primaryColor);

    span {
      display: block;
      &.title {
        color: var(--mainBlack);
      }
      @media (min-width: 576px) {
        display: inline-block;
      }
    }
  }
`
