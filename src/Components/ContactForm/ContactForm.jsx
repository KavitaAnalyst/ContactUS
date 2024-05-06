/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import { BiMessageAltDetail } from "react-icons/bi";
import {MdAddCall} from 'react-icons/md'
import Button from '../Button/Button'
import { MdMarkEmailUnread } from "react-icons/md";

const ContactForm = () => {

  const[name,setName] = useState()

const[ email,setEmail] = useState();
const [text,setText] = useState();

const onSubmit =()=>{
  console.log(event)
  event.preventDefault();
  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);
  
}
  return (
    <>
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className={styles.topButton}>
      <Button
    
      text = "VIA SUPPORT CHAT" icon={<BiMessageAltDetail fontSize="24px" />}/>
      <Button 
   
        text = "VIA PHONE CALL" icon={<MdAddCall fontSize="24px"/>}/>
      
      </div>
      <Button
      isOutline ={true}
      text = "VIA EMAIL" icon={<MdMarkEmailUnread fontSize="24px"/>}/>
      
      <form onSubmit={onSubmit}>
       <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        </div>

        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        </div>
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea type="text" name="text"/>
       </div>
       <div style={{
        display:"flex",
        justifyContent:"end",

       }}>
        <Button text="SUBMIT"/>
       </div>

       <div className={styles.form_control}>
        <label htmlFor="text">{name + " " + email + " " + text}</label></div>
      </form>
      </div>
      <div className={styles.image}>
        <img src="src/assets/contact.svg" alt="" />
      </div>
    </section>
    </>
  )
}

export default ContactForm
