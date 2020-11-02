import React from "react"
import { Header } from "../header/Header" // TODO Figure out root imports
import { NavBar } from "../navigation/NavBar"

export default function Home() {
  return (
    <div>
      <Header title={"Ryan Brink"} />
      <NavBar title={"Ryan Brink"} />
    </div>
  )
}
