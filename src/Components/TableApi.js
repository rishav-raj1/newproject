import React, { useState, useEffect } from 'react'
import { Container, Typography, Paper, Box, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, TablePagination, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import ReactToExcel from 'react-html-table-to-excel';

const useStyles = makeStyles((theme) => ({

    menu: {
       
        display: "flex",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom:20,
    },

    ebtn: {
       
        
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom:90,
    },

}))

const TableApi = () => {

    const classes = useStyles();


////// Fatch Data /////////
    const[users, setUsers] = useState([]);

    const loadUsers = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
    };

    useEffect(() => {
        loadUsers();
    }, []);

///////// ----------- ////////////////


    /////  Pagination ////////
    const[page, setPage] = useState(0)
    const[rowsPerPage, setRowsPerPage] = useState(6)
    ///// ---------- /////// 

    const onChangePage = (event, nextPage) => {
        setPage(nextPage);
    };

    const onChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
    };


///////// ----------- ////////////////

    return ( 
        <Container className={classes.ebtn}>

                   <ReactToExcel className="exceldesign"
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export to Excel"/>

            <Container className={classes.menu}>            
            
            <TableContainer component={Paper}>
                <Table id="table-to-xls">
                    <TableHead>
                        <TableRow>
                            <TableCell> Name </TableCell>
                            <TableCell> E-mail </TableCell>
                            <TableCell> Phone </TableCell>
                            <TableCell> Company </TableCell>
                            <TableCell> Website </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                     {
                        users
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((user) => (

                        <TableRow>
                            <TableCell> {user.name} </TableCell>
                            <TableCell> {user.email} </TableCell>
                            <TableCell> {user.phone} </TableCell>
                            <TableCell> {user.company.name} </TableCell>
                            <TableCell> {user.website} </TableCell>
                        </TableRow>


                        ))
                       }
  
                        
                    </TableBody>
                </Table>

                <TablePagination 
                  rowsPerPageOptions={[3, 6, 9, 12, 15]}
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={onChangePage}
                  onChangeRowsPerPage={onChangeRowsPerPage}
                />

            </TableContainer>


           
        </Container>
        </Container>
        
    )
}

export default TableApi
