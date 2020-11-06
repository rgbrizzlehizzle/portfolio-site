import React, { FunctionComponent } from "react"
import Terminal from "terminal-in-react"
// @ts-ignore
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';

export const Console: FunctionComponent = () => {
  const FileSystemPlugin = pseudoFileSystemPlugin();

  return (
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
      plugins={[
        FileSystemPlugin
      ]}
    />
  )
}