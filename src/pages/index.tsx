import React from "react"
import { Header } from "../header/Header" // TODO Figure out root imports
import { Button } from "@material-ui/core"

export default function Home() {
  return (
    <div>
      <Header title={"Ryan Brink"} />
      <div>
        Hello world!
      </div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}
