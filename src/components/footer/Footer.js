import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import ThumbUp from 'material-ui/svg-icons/action/favorite'
import {red500} from 'material-ui/styles/colors'
import './Footer.css'

const Footer = () => (
  <footer>
    <Card className='Footer-Card'>
      <CardText>
        <p className='Text'>Made with
          <span className='Heart'>
            <ThumbUp color={red500} />
          </span>by <a href='https://twitter.com/vnglst'>Koen van Gilst</a>.</p>
      </CardText>
    </Card>
  </footer>
)

export default Footer
