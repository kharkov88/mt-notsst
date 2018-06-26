import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ROOT = '/'

class Header extends Component {
  componentDidMount () {
    this.setState({
      pathName: window.location.pathname
    })
  }
  constructor (props) {
    super(props)
    this.state = {
      pathName: this.props.url
    }
  }
  render () {
    console.log('this.state:', this.state)
    return (
      <header>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>
              <span className='logo-left'>Mobilize</span>
              <span className='logo-right'>Today</span>
            </Link>
          </div>
          {
            this.state.pathName === ROOT
              ? <Link className='get-quote-link' to='/order'>Get a quote</Link>
              : <a className='back-link' onClick={back}>
                <i className='material-icons'>keyboard_return</i>
                <span>Back</span>
              </a>
          }
        </div>
      </header>
    )
  }
}
const back = () => {
  window.history.back()
  return false
}
export default Header
