import React, { FunctionComponent } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Theme } from "../style/Theme"
import { Console } from "../components/Console"

const HomePage: FunctionComponent = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
       <Console />
      </div>
    </ThemeProvider>
  )
}

export default function Home() {
  return <HomePage />
}
