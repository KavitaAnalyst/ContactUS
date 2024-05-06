/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BiMessageAltDetail } from "react-icons/bi";
import styles from './Button.module.css'
const Button = (props) => {
  const {isOutline,text,icon, ...rest} = props
  return (
    <div>
        <button 
        {...rest}
        className={isOutline ? styles.outline_btn : styles.primary_btn}> 
        
         {icon}
          {text}
         
      </button>
     

    
    </div>
  )
}

export default Button
