import { createTheme } from "@mui/material";
import { systemColor } from "./color";

const theme = createTheme({
  palette: {
    primary: {
      main: systemColor.azureRadiance,
    },
    secondary: {
      main: systemColor.emperor,
    },
    success: {
      main: systemColor.azureRadiance,
    },
    info: {
      main: systemColor.selago,
    },
    text: {
      rockBlue: systemColor.rockBlue,
      grey: systemColor.grey,
    },
    background: {
      alabaster: systemColor.alabaster,
      selago: systemColor.selago,
      rockBlue: systemColor.rockBlue,
    },
  },
});

export default theme;
