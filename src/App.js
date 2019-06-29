import React from 'react'
import './App.css'

import data from './data/test.json'
import Header from './components/Header/Header'
import List from './components/List/List'

const App = () => (
  <div className="App">
    <Header subheader="news" />

    <div className="container">
      <List data={data.articles} />
    </div>
  </div>
)

export default App
