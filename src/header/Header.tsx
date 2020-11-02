import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"

type HeaderProps = {
  title: string
}

// TODO Helmet should pull title from gatsby config
export const Header: FunctionComponent<HeaderProps> = ({title}) => (
  <Helmet
    title={title}
    defer={false}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  </Helmet>
)