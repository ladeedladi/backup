import React,{useState} from 'react'
import styles from "../styles/Order.module.css"
const Return = () => {
    const [returned,setReturn]=useState(true)

    const checkExchange=(e)=>{
if(e.target.checked){
setReturn(false)
}
console.log(returned);

    }
const checkreturn=(e)=>{
if(e.target.value!=true){
    setReturn(true)
}
console.log(returned);
}

    return (
        <>
          <div className={styles.outerContainer}>
            <div className={styles.container1}>
              <div className={styles.returnNav}>
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
              <div className={styles.optionContainer}>
                  <div className={styles.leftContainer}>
                     <div className={styles.returnLeftContainer}>
                         <div className={styles.cb}>
                               <div className={styles.cbHeader}><h4>Return Options</h4></div>
                               <div className={styles.checkBox}>
                               <input type="radio" id="Return" name="Return" value="Return" onClick={checkreturn} checked={returned}/>
                                  <label for="Return">Return</label>
                               <input type="radio" id="Exchange" name="Exchange" value="Exchange" onClick={checkExchange} checked={!returned}/>
                                   <label for="Exchange">Exchange</label>
                               </div>
                         </div>
                         <div className={styles.pcs}>
                             <div className={styles.pcsHeader}>{returned?(<h4>Select QTY to Return</h4>):(<h4>Select QTY to Exchange</h4>)}</div>
                             <div className={styles.pieces}>
                           
                               <form onChange={(e)=>console.log(e.target.value)}>
                               <select className={styles.select} id="pieces" name="pieces">
                                  <option  value="1 pcs">1 pcs</option>
                                  <option   value="2 pcs">2 pcs</option>
                                  <option   value="3 pcs">3 pcs</option>
                                  <option   value="4 pcs">4 pcs</option>
                                </select>
                              </form>
                          
                             </div>
                         </div>
                         {!returned&&<div className={styles.btnGrp}>
                        <div className={styles.btnHeader}><h4>Select size</h4></div>
                        <div className={styles.btnContainer}>
                                      

                        <div className={styles.btnGroup}>
                       <button className={styles.small}>
                       <h4>S</h4> 
                          </button>
                       <button className={styles.medium}>
                        M
                          </button>
                       <button className={styles.large}>
                        L
                          </button>
                       <button className={styles.xl}>
                        XL
                          </button>
                    </div>

                        </div>
                        </div>}
                         <div className={styles.reasonForReturn}>
                         <div className={styles.pcsHeader}>{returned?<h4>Reason for Return</h4>:<h4>Reason for Exchange</h4>}</div>
                         <div className={styles.pieces}>
                           
                               <form onChange={(e)=>console.log(e.target.value)}>
                               <select className={styles.select} id="cars" name="cars">
                                   <option value="none" selected disabled hidden>Select Reason</option>
                                  <option  value="1 pcs">Item missing </option>
                                  <option   value="2 pcs">Item or part was broken / damaged onarrival </option>
                                  <option   value="3 pcs">safe fit issues</option>
                                  <option   value="4 pcs">Received a different item</option>
                                  <option   value="4 pcs">Quality issues</option>
                                </select>
                              </form>
                          
                             </div>
                       </div>
                      
                         <div className={styles.commment}>
                             <div className={styles.commentHeader}><h4>comments</h4></div>
                             <div className={styles.cmt} >
                                 <input type="text"/>
                             </div>
                         </div>
                         <div className={styles.continue}>
                             <button>continue</button>
                         </div>
                     </div>
                     <div className={styles.pickupAddress}></div>
                     <div className={styles.returnAction}></div>
                  </div>
                  <div className={styles.rightContainer}>

                  </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Return
