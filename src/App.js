import React from 'react'

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'

import styles from './App.module.css'

import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount () {
    //Se liberarem a api facilita ne meu
    const data = await fetchData()
    this.setState({ data })
  }

  render () {
    const { data } = this.state
    console.log(data)

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
      </div>
    )
  }
}

export default App
