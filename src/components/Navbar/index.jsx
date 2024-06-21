import theme from "@/themes/theme";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <AppBar
      style={{
        height: "66px",
        background: theme.palette.common.white,
      }}
    >
      <Toolbar>
        <Typography variant="h6">Admin Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
