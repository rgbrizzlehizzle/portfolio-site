import React, { FunctionComponent } from "react"
import { Header } from "../header/Header" // TODO Figure out root imports
import { NavBar } from "../navigation/NavBar"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from '@material-ui/core/CssBaseline';
import Jobs from "../info/Jobs"

// Going for https://github.com/morhetz/gruvbox#palette
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.04)',
      selected: 'rgba(255, 255, 255, 0.08)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(255, 255, 255, 0.12)'
    },
    background: {
      default: '#282828',
      // dark: '#222431',
      paper: '#928374'
    },
    primary: {
      main: '#98971a' // app bar color
    },
    secondary: {
      main: '#98971a' // idk
    },
    text: {
      primary: '#fb4934', // Hmm
      secondary: '#d79921'
    }
  }
})

const HomePage: FunctionComponent = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header title={"Ryan Brink"} />
        <NavBar title={"Ryan Brink"} />
        <Jobs/>
      </div>
    </ThemeProvider>
  )
}

export default function Home() {
  return <HomePage />
}
