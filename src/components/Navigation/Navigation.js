import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import HelpIcon from "@mui/icons-material/Help";
import Logo from "../../assests/logo1.png";

const Navigation = () => {
  return (
    <div style={{paddingBottom:'5px'}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#2E3B55" }}>
          <Toolbar>
            <Typography
              style={{ textAlign: "left" }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Box
                component="img"
                sx={{
                  height: 70,
                  p: 2,
                }}
                alt="logo"
                src={Logo}
              />
            </Typography>

            <Button sx={{ color: "white" }} color="inherit">
            Centre of Excellence
            </Button>
           

            <Box>
              <Button color="inherit">Appointment</Button>

              <Button color="inherit">Departments</Button>
            </Box>

            <Button color="inherit">Faq</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
