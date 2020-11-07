import React, { FunctionComponent } from "react"
import Terminal from "terminal-in-react"
import { FileSystem } from "../plugins/FileSystem"

export const Console: FunctionComponent = () => {
  return (
    <Terminal
      msg='“The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.”'
      commandPassThrough={() => `Invalid command, type "help" to view valid commands`}
      color='#ebdbb2'
      backgroundColor='#282828'
      prompt='#d65d0e'
      startState='maximised'
      hideTopBar={true}
      allowTabs={false}
      style={{ fontWeight: "bold", fontSize: "1.1em" }}
      commands={{}}
      // @ts-ignore
      descriptions={{
        show: false,
        color: false
      }}
      plugins={[
        {
          class: FileSystem,
          config: {}
        }
      ]}
    />
  )
}