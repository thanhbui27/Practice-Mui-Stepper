import { createTheme } from "@mui/material";
import { systemColor } from "./color";

const customTheme = createTheme({
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
      main: systemColor.rockBlue,
      dark: systemColor.grey,
    },
    background: {
      main: systemColor.alabaster,
      light: systemColor.selago,
      dark: systemColor.rockBlue,
    },
  },
  components: {
    // Custom a new component
    MyThemeComponent: {
      styleOverrides: {
        root: {
          color: "darkslategray",
        },
        primary: {
          color: "darkblue",
        },
        secondary: {
          color: "darkred",
          backgroundColor: "pink",
        },
      },
      variants: [
        {
          props: { variant: "dashed", color: "primary" },
          style: {
            border: "1px dashed darkblue",
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: "1px dashed darkred",
          },
        },
      ],
    },

    // Custom a built in component
    MuiButton: {},
  },
});

export default customTheme;
