import React from 'react'
import TableMui from './Table'
import { Container ,Grid} from '@mui/material'
import { CssBaseline } from '@mui/material'
import Cart from './Cart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Return from '../component/Return'
import Rtn from '../component/Rtn'
import Spinner from '../component/Spinner'
import TxtovrBx from '../component/TxtovrBx'
const index = () => {

  return (
    <>
    

      {/* <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width:'100vw' }} > */}
       {/* <Grid container sx={{ bgcolor: '#cfe8fc',height:'100vh',cursor:"pointer"}} justifyContent="center" alignItems="center">
        <Grid item>
          <TableMui hoverable/>
        </Grid>
      </Grid>  */}
     {/* <ExpandMoreIcon/>
        <Cart/> */}
       {/* <Return/> */}
       {/* <Rtn/> */}
      {/* <Spinner/> */}
      <TxtovrBx/>
    </>
  )
}

export default index
