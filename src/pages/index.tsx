import React, { FunctionComponent } from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Terminal from "terminal-in-react"

// Going for https://github.com/morhetz/gruvbox#palette
const theme = createMuiTheme({
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

const HomePage: FunctionComponent = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          msg='“The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.”'
          color='#ebdbb2'
          backgroundColor='#282828'
          prompt='#d65d0e'
          startState='maximised'
          hideTopBar={true}
          allowTabs={false}
          style={{ fontWeight: "bold", fontSize: "1.1em" }}
          commands={{ }}
          // @ts-ignore
          descriptions={{
            show: 'potato',
            color: false
          }}
        />
      </div>
    </ThemeProvider>
  )
}

export default function Home() {
  return <HomePage />
}
