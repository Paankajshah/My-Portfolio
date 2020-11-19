import React , {useEffect}from 'react';
import classes  from "./contact.module.css";


const Contact =()=>{
useEffect(()=>{

  console.log("contact triggered");
}

);
  return(
    <div className={classes.conContainer}>Contact</div>
  )
}

export default Contact