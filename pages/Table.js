import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from "@mui/material/Table"
import {TableRow} from "@mui/material"
import {TableCell} from "@mui/material"
import {TableHead} from "@mui/material"
import {TableBody} from "@mui/material"
import {TableFooter} from "@mui/material"
import {TablePagination,Typography} from "@mui/material"
import {useGetTableQuery} from "../redux/services/callApi"
export default function TableMui() {
  let datas=[]
  const {data,isLoading}=useGetTableQuery()
  if(data!==undefined){
    datas=data.data
    console.log(datas)
  }
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
function createData(name,calories,fat,num){
return {name,calories,fat,num}
}

 
  const emptyRows = page > 0 ? Math.max(0, (1 + page)* rowsPerPage - datas.length) : 0;
  const handleChangePage = (event, newPage) => {
    // console.log("newPage");
    // console.log(newPage);
    
    
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {

    console.log(event.target.value);
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
         
      <Table sx={{ minWidth: 500 }} aria-label="simple table" >
       
          <TableHead>
          < TableRow>
           
            <TableCell component="th" scope="row">
            <Typography variant="h5" gutterBottom>
        
                Dessert (100g serving)
            </Typography>
                </TableCell>
            <TableCell style={{ width: 160 }}  align="right"><Typography variant="h5" gutterBottom>
            Calories
            </Typography>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right"><Typography variant="h5" gutterBottom>
            Fat&nbsp;(g)
            </Typography>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <Typography variant="h5" gutterBottom>
                num&nbsp;(g)
          
            </Typography>
            </TableCell>
           
           </TableRow>
         </TableHead>
     
            <TableBody>
          {(rowsPerPage > 0
            ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : datas
          )
          .map(row=>(<TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.num}
              </TableCell>
            </TableRow>))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={datas.length}
              rowsPerPage={rowsPerPage}
              page={page}
            
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              
            />
            </TableRow>
        </TableFooter>
            {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          </Table>
         </TableContainer>
    </>
  )
}
