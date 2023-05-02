// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    let button

    if (count % 2 === 0) {
      button = <Login />
    } else {
      button = <Logout />
    }

    return (
      <div className="bg-container">
        <div className="card">{button}</div>
      </div>
    )
  }
}

export default Home
