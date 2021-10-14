import React from 'react'
import styles from "../styles/ViewOrder.module.css"
const ViewOrder = () => {
    return (
        <>
         <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.first}>
            <div className={styles.star}>

            <div className={styles.tick}></div>
            <div className={styles.whiteTick}></div>
            </div>
            </div>
            <div className={styles.second}>
                <h4>Return Initiated</h4>
                <h4 className={styles.h4}>Email has been send with Order Details</h4>
                <button className={styles.viewButton}>VIEW MY ORDERS</button>
            </div>
            <div className={styles.third}></div>
            </div>
         </div>
        </>
    )
}

export default ViewOrder
