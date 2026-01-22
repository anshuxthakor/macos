import React, { Component } from 'react'
import Terminal from 'react-console-emulator'
import './terminal.scss'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },
    whoami: {
    description: 'Current user',
    fn: () => 'anshu'
  },
  date: {
    description: 'Current date',
    fn: () => new Date().toString()
  },
    calc: {
    description: 'Calculator',
    fn: (...expr) => {
      try {
        return eval(expr.join(' '))
      } catch {
        return 'Invalid expression'
      }
    }
  },
    about: {
    description: 'About Zoe terminal',
    fn: () => 'ZOE TERMINAL v1.0 ⚡'
  }
}

export default class MyTerminal extends Component {
  render () {
    return (

      <div className='terminalapp'>

      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'me@React:~$'}
         style={{
      backgroundColor: "transparent",
      color: "#eaeaea",
      height: "100%",
  }}
        />
        </div>    

    )
  }
}