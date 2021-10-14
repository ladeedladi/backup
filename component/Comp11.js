import React,{useState} from 'react'
import styles from "../styles/Order.module.css"
import Select from 'react-select'
const Comp11 = () => {
    const [sikks,setSikks]=useState("")
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

   const sikk=(e)=>{

setSikks(e.value)
console.log(sikks);
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
      
        console.log(sikks);

            const {name,value}=e.target
            setOptions(prev=>{return{...prev,[name]:value}})
        
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
const optionses = [
    { value: '1 pcs', label: '1 pcs' },
    { value: '2 pcs', label: '2 pcs' },
    { value: '3 pcs', label: '3 pcs' },
    { value: '4 pcs', label: '4 pcs' },
  ]
  const optionses2=[
      {value:"Item missing",label:"Item missing",name:"reason"},
      {value:"Item or part was broken / damaged onarrival",label:"Item or part was broken / damaged onarrival",name:"reason"},
      {value:"safe fit issues",label:"safe fit issues",name:"reason"},
      {value:"Received a different item",label:"Received a different item",name:"reason"},
      {value:"Quality issues",label:"Quality issues",name:"reason"},
  ]
    return (
        <>
            <div className={styles.returnLeftContainer}>
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
                           
                               {/* <form onChange={checkOption}>
                               <select className={styles.select} value={options.pieces} id="pieces" name="pieces">
                                  <option  value="1 pcs">1 pcs</option>
                                  <option   value="2 pcs">2 pcs</option>
                                  <option   value="3 pcs">3 pcs</option>
                                  <option   value="4 pcs">4 pcs</option>
                                </select>
                              </form> */}
                          <Select   options={optionses} />
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
                           
                               {/* <form onChange={checkOption}>
                               <select className={styles.select} id="cars" value={options.reason} name="reason">
                                   <option value="none" selected disabled hidden>Select Reason</option>
                                  <option  value="Item missing">Item missing </option>
                                  <option   value="Item or part was broken / damaged onarrival">Item or part was broken / damaged onarrival </option>
                                  <option   value="safe fit issues">safe fit issues</option>
                                  <option   value="Received a different item">Received a different item</option>
                                  <option   value="Quality issues">Quality issues</option>
                                // </select>
                              </form> */}
                           <Select defaultValue={sikks} onChange={sikk} options={optionses2} />
                             </div>
                       </div>
                      
                         <div className={styles.commment}>
                             <div className={styles.commentHeader}><h4>comments</h4></div>
                             <div className={styles.cmt} >
                                 <input onChange={checkOption} value={options.comments} name="comments" type="text"/>
                             </div>
                         </div>
                         <div className={styles.continue}>
                         </div>
                     </div>
        </>
    )
}

export default Comp11
