import React from 'react'
import './App.css'
import {Card, CardText} from 'material-ui/Card'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const Home = () => {
  return (
    <div id='App'>
      <Header />
      <div id='Main'>
        <div className='App-Questions'>
          <Card>
            <CardText>
              Test 1
            </CardText>
          </Card>
        </div>
        <div className='App-Stats'>
          <Card>
            <CardText>
              <h1>Test 2</h1>
            </CardText>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
