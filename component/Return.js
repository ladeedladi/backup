import React,{useState} from 'react'
import styles from "../styles/Order.module.css"
import D1 from './d1'
import D2 from './d2'
import { useRouter } from 'next/dist/client/router'
const Return = () => {
    const Router=useRouter()
    const [returned,setReturn]=useState(true)
    const [options,setOptions]=useState({pieces:"",btn:"",reason:"",comments:""})
   const [openOptions1,setOpenOptions1]=useState(true)
   const[opt2,setOpt2]=useState(false)
   const [openOptions2,setOpenOptions2]=useState(false)
   const [openOptions3,setOpenOptions3]=useState(false)
   const [pkp,setpkp]=useState(false)
   const options3=()=>{
    setOpenOptions3(!openOptions3)
    setOpenOptions1(false)
    setOpenOptions2(false)

   }
  const fnFromD1=()=>{
    setOpenOptions1(true)
  }
const options2=(e)=>{
    setOpt2(true)
    setOpenOptions2(!openOptions2)
    setOpenOptions1(false)
if(e.target.name="continue1"){

    setOpenOptions3(true)
}
}

   const pkpCheck=(e)=>{
     setpkp(!pkp)
     console.log(pkp);
   }
 const options1=(e)=>{
    setOpt2(true)

    setOpenOptions1(!openOptions1)
    if(e.target.name==="continue"){

        setOpenOptions2(true)
    }
    setOpenOptions3(false)

 }


    const checkOption=(e)=>{
        const {name,value}=e.target

        setOptions(prev=>{return{...prev,[name]:value}})
        console.log(options);
    }

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
                        <div onClick={options1} className={openOptions1?styles.options1:styles.options1Off}>1</div>
                      
                        <div className={styles.optionHeading}>

                        {openOptions1?<h4>Return Options </h4>:<h4 className={styles.h43}>Reason For Return </h4>}
                        </div>
                    </div>
                       <button className={styles.returnBtn}>close</button>
                 </div>
              </div>
              <div className={styles.optionContainer}>
                  <div className={styles.leftContainer}>
                 {openOptions1?(<div className={styles.returnLeftContainer}>
                         <div className={styles.cb}>
                               <div className={styles.cbHeader}><h4>Return Options</h4></div>
                               <div className={styles.checkBox}>
                               <input className={styles.input} type="radio" id="Return" name="Return" value="Return" onClick={checkreturn} checked={returned}/>
                                  <label for="Return">Return</label>
                               <input type="radio" id="Exchange" name="Exchange" value="Exchange" onClick={checkExchange} checked={!returned}/>
                                   <label for="Exchange">Exchange</label>
                               </div>
                         </div>
                         <div className={styles.pcs}>
                             <div className={styles.pcsHeader}>{returned?(<h4>Select QTY to Return</h4>):(<h4 >Select QTY to Exchange</h4>)}</div>
                             <div className={styles.pieces} >
                           
                               <form onChange={checkOption}>
                               <select className={styles.select} value={options.pieces} id="pieces" name="pieces">
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
                       <button name="btn" value="S" onClick={checkOption} className={styles.small}>
                       <h4>S</h4> 
                          </button>
                       <button name="btn" value="M" onClick={checkOption} className={styles.medium}>
                        M
                          </button>
                       <button name="btn" value="L" onClick={checkOption}  className={styles.large}>
                        L
                          </button>
                       <button name="btn" value="XL"  onClick={checkOption} className={styles.xl}>
                        XL
                          </button>
                    </div>

                        </div>
                        </div>}
                         <div className={styles.reasonForReturn}>
                         <div className={styles.pcsHeader}>{returned?<h4>Reason for Return</h4>:<h4>Reason for Exchange</h4>}</div>
                         <div className={styles.pieces}>
                           
                               <form onChange={checkOption}>
                               <select className={styles.select} id="cars" value={options.reason} name="reason">
                                   <option value="none" selected disabled hidden>Select Reason</option>
                                  <option  value="Item missing">Item missing </option>
                                  <option   value="Item or part was broken / damaged onarrival">Item or part was broken / damaged onarrival </option>
                                  <option   value="safe fit issues">safe fit issues</option>
                                  <option   value="Received a different item">Received a different item</option>
                                  <option   value="Quality issues">Quality issues</option>
                                </select>
                              </form>
                          
                             </div>
                       </div>
                      
                         <div className={styles.commment}>
                             <div className={styles.commentHeader}><h4>comments</h4></div>
                             <div className={styles.cmt} >
                                 <input onChange={checkOption} value={options.comments} name="comments" type="text"/>
                             </div>
                         </div>
                         <div className={styles.continue}>
                             <button className={options.pieces&&options.reason!=="none"&&options.comments?styles.ctnBtnOn:styles.ctnBtn} name="continue" onClick={options1}>CONTINUE</button>
                         </div>
                     </div>):(<D1 reason={options.reason} returned={returned} pieces={options.pieces} fn={fnFromD1}/>)}
                     <div className={styles.returnNav}>
                        <div className={styles.returnNavInside2}>
                           <div className={styles.returnDiv}>
                               <div onClick={options2} className={openOptions2?styles.options2:styles.options21}>2</div>
                      
                               <div className={styles.optionHeading2}>

                               <h4>Pickup Address </h4>
                               </div>
                           </div> 
                          </div>
                       </div>
                       {openOptions2?(opt2&&<div className={styles.pickupAddress}>
                       <div className={styles.pkpAdrsContainer}>
                             <div className={styles.pkpRadioContainer}>
                             <input onClick={pkpCheck} type="radio" id="html" name="fav_language" value="HTML" checked={pkp}/>
                               <div className={styles.salena}>
                                <h4>   Salena john</h4>
                                <p>10th creoss street</p>
                                <p>Bangalore</p>
                                <p>karnataka</p>
                                <button className={styles.edit}>Edit</button>
                                </div>   
                             </div>
                             <div className={styles.pkpBtnContainer}> 
                            <button onClick={options2} className={pkp?styles.pkpbtnContinueOn:styles.pkpbtnContinue} name="continue1">CONTINUE</button>
                             </div>
                      
                       </div>
       
                     </div>):(opt2&&<D2 fn={options2}/>)}
                     <div className={styles.returnAction}>
                     <div className={styles.returnNav}>
                     <div className={styles.returnNavInside2}>
                           <div className={styles.returnDiv}>
                               <div className={openOptions3?styles.options2:styles.options31} onClick={options3}>3</div>
                      
                               <div className={styles.optionHeading2}>

                               <h4>Return Action </h4>
                               </div>
                           </div> 
                    </div>
                  </div>
                  {openOptions3&&<div className={styles.innerReturn}>
                  <div className={styles.opm}>
                  <input type="radio" id="html" name="fav_language" value="HTML"/>
                   <div className={styles.opmRight}> 
                      <h3>Original Payment Mode</h3>
                      <h5>Refund will be transfered toyour original paymament mode within 9 days</h5>
                   </div>
                  </div>
                  <div className={styles.wallet}>
                  <input type="radio" id="html" name="fav_language" value="HTML" checked/>
                     <div className={styles.walletRight}>
                     <h3>Wallet</h3>
                     <h6 className={styles.h66}>for cash orders your refund will be transfered to meola wallet </h6>
                      <h5 className={styles.h55}>for cash orders your refund will be transfered to meola wallet within 9 days after pickup is completed</h5>
                       <p>By Clicking on "Request Return" i agree to <h6 className={styles.terms}>Terms And Conditions</h6> of refund</p>
                      <button onClick={()=>Router.push(`/ViewOrder`)} className={styles.reqretBtn}>REQUEST RETURN</button>
                     </div>
                  </div>
                  </div>}
                     </div>
                  </div>
                  <div className={styles.rightContainer}>
                    <div className={styles.imgContainer}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbeFs8SHoF2haqCjFE8336Oec5W6DUceReg&usqp=CAU"/>
                        <div className={styles.imgRightContainer}>
                            <h4>ALLEN SOLLY</h4>
                            <h4 className={styles.lastH4}>Perfect 9 repair cream ex 60 ml</h4>
                             <p>Color:lorem posum</p>
                             <p>Cotton:28</p>
                             <p>Qty:1</p>
                             <h4 className={styles.lastH42}>INR 1078.00</h4>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            
          </div>
        </>
    )
}

export default Return
