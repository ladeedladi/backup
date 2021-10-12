import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import styles from "../styles/Cart.module.css"
export default function VariantButtonGroup() {
  return (
  
 
      <ButtonGroup variant="text" sx={{color:"silver"}} >
      <Button aria-label="delete" startIcon={ <CleanHandsOutlinedIcon />} sx={{color:"green"}}> 
      <p className={styles.p}>7.9</p>
      </Button>
      <Button aria-label="delete" endIcon={ <StarOutlinedIcon />}  sx={{color:"black"}} >
      4.0
      </Button>
      <Button  sx={{color:"black"}}><p className={styles.p}>10k rating</p></Button>
      </ButtonGroup>
  
  );
}
