import { AppBar, Toolbar, Typography } from "@mui/material";

import MyThemeComponent from "./style";

const Navbar = () => {
  return (
    <AppBar sx={{ height: 66, bgcolor: "primary.main" }}>
      <Toolbar>
        <Typography variant="h6">Admin Dashboard</Typography>
        <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed">
          Primary
        </MyThemeComponent>
        <MyThemeComponent sx={{ m: 1 }} color="secondary">
          Primary
        </MyThemeComponent>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
