import { AppBar, Toolbar, Typography } from "@mui/material";

const Header =() =>{
    return(<>
    <AppBar position="static">
        <Toolbar variant="dense"> 
            <Typography variant="h6">
                Employee Management System
            </Typography>
        </Toolbar>
    </AppBar>
    </>)
}

export default Header;