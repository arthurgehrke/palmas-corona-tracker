import React from 'react'

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'

import styles from './App.module.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Cards />
        <Chart />
      </div>
    )
  }
}

export default App
