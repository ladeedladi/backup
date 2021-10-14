import React from 'react'

import styles from "../styles/Order.module.css"

const Comp1 = () => {
    return (
        <>
            <div className={styles.returnNav,styles.Nav}>
                 <div className={styles.returnNavInside}>
                    <div className={styles.returnDiv}>
                        <div className={styles.options1}>1</div>
                      
                        <div className={styles.optionHeading}>

                       <h4>Return Options </h4>
                        </div>
                    </div>
                       <button className={styles.returnBtn}>close</button>
                 </div>
            </div>  
        </>
    )
}

export default Comp1
