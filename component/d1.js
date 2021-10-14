import React from 'react'
import styles from "../styles/d1.module.css"
const  D1= (props) => {
    return (
        <>
           <div className={styles.D1container}>
          <div className={styles.leftContainer}>
              <h4>Status: {props.returned?<h3>Return</h3>:<h3>Exchange</h3>}</h4>
              <h4>Quantity:  <h3>{props.pieces}</h3></h4>
              <h4>Reason  : <h3> {props.reason}</h3></h4>
              
          </div>
          <button onClick={()=>props.fn()} className={styles.Edit1}>Edit</button>
          </div> 
        </>
    )
}

export default D1
