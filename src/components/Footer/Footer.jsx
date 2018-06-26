import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../configs/footer-links'

const ROOT = '/'
const PORTFOLIO = 'portfolio'
const PORTFOLIO_ID = '/portfolio/id'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ROOT
    }
  }

  componentDidMount() {
    this.setState({
      url: window.location.pathname
    })
  }

  render () {
    let { url } = this.state
    let params = this.getParams()
    return (
      url === ROOT
      ? <footer>
          <div className='copyright'>© 2018 Mobile Web Solutions, Inc.
            <span className='m-hide'>All rights reserved.</span></div>
        </footer>
      : <DinamicFooter params={params} />
    )
  }
  getParams() {
    let url = this.state.url
    let a = url.split('/')
    if ((a[1] === PORTFOLIO) && (typeof(a[2]) === 'string')) {
      url = PORTFOLIO_ID
    }
    //console.log(url)
    let params = config[url]
    return params
  }
}

const DinamicFooter = ({params}) => {
  params = params || config.template
  let { hrefs, text } = params
  return (
    <footer>
      <div className='navigation'>
        <div className='container'>
          {
            hrefs.map((item, id) => {
              let href = `/${item}`
              let name = `navigation-item ${item}-item animated bounceInLeft`
              return (
                <Link to={href} key={id} className={name}>
                  <span>{text[id]}</span>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className='container'>
        <div className='footer-links'>
          <Link to='/public-offer'>Terms of Service</Link>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </div>
        <div className='copyright'>© 2018 Mobile Web Solutions, Inc.</div>
      </div>
    </footer>
  )
}
export default Footer
