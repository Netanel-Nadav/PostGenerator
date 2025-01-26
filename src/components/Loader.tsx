import React from 'react'
import loaderSVG from '../assets/imgs/hammer@1x-1.0s-200px-200px.svg'


export const Loader = () => {
  return (
    <div className="loader">
      <h2>עובדים לך על הפוסט</h2>
      <p>פעולה זאת לוקחת בין 10 - 30 שניות</p>
        <div className="img-container">
            <img src={loaderSVG} alt="loader" />
        </div>
    </div>
  )
}
