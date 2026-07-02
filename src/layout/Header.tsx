import { AppBar, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;
const Header =() =>{
    return(<>
    <AppBar position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar variant="dense"> 
            <Typography variant="h6">
                Employee Management System
            </Typography>
        </Toolbar>
    </AppBar>
    </>)
}

export default Header;