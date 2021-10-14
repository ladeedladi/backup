import React,{useState} from 'react'
import styles from "../styles/Order.module.css"

const Comp22 = () => {
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
          <div className={styles.pickupAddress}>
                       <div className={styles.pkpAdrsContainer}>
                             <div className={styles.pkpRadioContainer}>
                             <input onClick={pkpCheck} type="radio" id="html" name="fav_language" value="HTML" checked={pkp}/>
                               <div className={styles.salena}>
                                <h4>   Salena john</h4>
                                <p>10th creoss street</p>
                                <p>Bangalore</p>
                                <p>karnataka</p>
                                </div>   
                             </div>
                             <div className={styles.pkpBtnContainer}> 
                             </div>
                      
                       </div>
       
                     </div>
                   
        </>
    )
}

export default Comp22
