import { createMuiTheme } from "@material-ui/core/styles"

export const Theme = createMuiTheme({
  palette: {
    type: "dark",
    action: {
      active: "rgba(255, 255, 255, 0.54)",
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)"
    },
    background: {
      default: "#665c54",
      // dark: '#222431',
      paper: "#928374"
    },
    primary: {
      main: "#98971a" // app bar color
    },
    secondary: {
      main: "#98971a" // idk
    },
    text: {
      primary: "#fb4934", // Hmm
      secondary: "#d79921"
    }
  }
})