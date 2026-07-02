import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { employees } from "../data/employee";
import { useState, type ChangeEvent } from "react";

const Employees = () => { 
  const [search,setSearch] = useState("");
  const searchEmployee = (e: ChangeEvent<HTMLInputElement>)=>{
 const {value} = e.target;
    setSearch(value);
    
  }
    const filteredEmployees = employees.filter((employee)=>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );  
  return (
    <>
      <Paper>
        <Typography variant="h4">Employees</Typography>
        <TextField label="Search Employee" fullWidth name="search" value={search}   onChange={searchEmployee}/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right"><strong>ID</strong></TableCell>
                <TableCell align="right"> <strong>Employee Name</strong></TableCell>
                <TableCell align="right"><strong>Designation</strong></TableCell>
                <TableCell align="right"><strong>Department</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow
                  key={employee.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{employee.id}</TableCell>
                  <TableCell align="right">{employee.name}</TableCell>
                  <TableCell align="right">{employee.designation}</TableCell>
                  <TableCell align="right">{employee.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Employees;
