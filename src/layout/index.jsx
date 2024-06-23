//prop-types
import PropTypes from "prop-types";

//Library
import { Box, CssBaseline, Stack } from "@mui/material";

//components
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Stack
        display="flex"
        alignItems="center"
        spacing={3}
        justifyContent="center"
        mr={5}
      >
        <Sidebar />
        <Box
          component="main"
          sx={{
            height: "100vh",
            width: 1,
            bgcolor: "background",
            pt: 7,
            pl: 15,
          }}
        >
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
