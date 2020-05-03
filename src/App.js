import React from 'react'

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'

import styles from './App.module.css'

import { fetchData } from './api'

class App extends React.Component {
  async componentDidMount () {
    //Se liberarem a api facilita ne meu
    //const data = await fetchData()
    //console.log(data)
  }

  render () {
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
      </div>
    )
  }
}

export default App
