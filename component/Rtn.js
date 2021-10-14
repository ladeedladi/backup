import styles from "../styles/Order.module.css"
import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp11 from "./Comp11";
import Comp22 from "./Comp22";
import Comp33 from "./Comp33"
import { useRouter } from "next/dist/client/router";
const Rtn = () => {
    const Router=useRouter()
    const [returned,setReturn]=useState(true)
    const [options,setOptions]=useState({pieces:"",btn:"",reason:"",comments:""})
   const [openOptions1,setOpenOptions1]=useState(true)
   const[opt2,setOpt2]=useState(false)
   const [openOptions2,setOpenOptions2]=useState(false)
   const [openOptions3,setOpenOptions3]=useState(false)
   const [pkp,setpkp]=useState(false)
 const [dummy,SetDummy]=useState(0)
const nextPage=()=>{
    
    Router.push(`/ViewOrder`)
}

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
    const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

    const steps = [
        {
            label:1,
            comp:<Comp11/>
        },
        {
            label:2,
            comp:<Comp22/>
        },
        {
          label:3,
          comp:<Comp33/>
        },
      ];
   
    return (
        <>
            <div className={styles.outerContainer}>
            <div className={styles.container1}>
     





  

    <Box sx={{ maxWidth: 600 }}>
     <Stepper activeStep={activeStep}  orientation="vertical"       connector={activeStep===0&&<h1>hello</h1>}
>
     {steps.map((step, index) => (   <Step key={step.label }  >
            <StepLabel  icon={step.label===1?<Comp1/>:step.label===2?<Comp2/>:step.label===3?<Comp3/>:""}>
                {/* {step.label===1&&<Comp1/>}
                {step.label===2&&<Comp2/>}
                {step.label===3&&<Comp3/>} */}
               
            </StepLabel>
            <StepContent >
              
              {console.log(index)}
              <Box sx={{ mb: 2 }}>
                <div>
                {step.comp}
        
                <button  onClick={index === steps.length - 1 ?nextPage:handleNext} className={index === steps.length - 1 ? styles.reqretBtn : styles.ctnBtnOn} name="continue" >
                {index === steps.length - 1?'REQUEST RETURN':'CONTINUE' }
                </button>

              
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
           
          </Step>))}
      
      </Stepper>  
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>


          
            </div>

            </div> 
        </>
    )
}

export default Rtn
