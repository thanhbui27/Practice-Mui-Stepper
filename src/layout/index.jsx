import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Box, CssBaseline, Stack } from "@mui/material";

// eslint-disable-next-line react/prop-types
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
      >
        <Sidebar />
        <Box
          component="main"
          sx={{
            p: 3,
            height: "100vh",
            width: "100%",
            background: "#A3AED0",
            paddingTop: "60px",
            paddingLeft: "130px",
          }}
        >
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

export default MainLayout;
