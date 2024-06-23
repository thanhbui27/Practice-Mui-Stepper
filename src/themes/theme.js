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
      light: systemColor.silver,
      main: systemColor.grey,
      dark: systemColor.cornflowerBlue,
      secondary: systemColor.rockBlue,
    },
    background: {
      default: systemColor.rockBlue,
    },
  },
});

export default theme;
