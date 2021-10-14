import React from 'react'
import styles from "../styles/d2.module.css"
const D2 = (props) => {
    return (
        <>
                <div className={styles.D1container}>
          <div className={styles.leftContainer}>
              <h4>Salena John</h4>
              <p>10th creoss street</p>
              <p>Bangalore</p>
              <p>karnataka</p>
          </div>
          <button onClick={()=>props.fn()} className={styles.Edit1}>Edit</button>
          </div> 
        </>
    )
}

export default D2
