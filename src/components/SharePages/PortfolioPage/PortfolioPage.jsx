import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'
import ExamplePage from './ExamplePage'

import config from '../../../configs/portfolio-data.js'
import appshowcase from './libs/appshowcase'
import portfolioScript from './libs/portfolio-scripts'

class PortfolioPage extends Component {
  componentDidMount () {
    setTimeout(() => {
      appshowcase()
      portfolioScript()
    }, 0)
  }
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    let {url} = this.props.match
    return (
      <div className='portfolio bg-1'>
        <Header />
        <main className='container main'>
          <div className='tabs'>
            <h1 className='title animated zoomIn'>Portfolio</h1>
            <ul className='tabs__caption animated bounceInRight'>
              <li className='active'>E-Commerce</li>
              <li>Mass media</li>
              <li>Services</li>
              <li>Business card</li>
            </ul>
            {
              config.category.map((item, id) => {
                return <TabContent key={id} {...item} url={url} />
              })
            }
            <div className='prev-btn animated bounceIn'>
              <i className='material-icons'>keyboard_arrow_left</i>
            </div>
            <div className='next-btn animated bounceIn'>
              <i className='material-icons'>keyboard_arrow_right</i>
            </div>
          </div>
        </main>
        <Footer url={url} />
      </div>
    )
  }
}

const TabContent = (props) => {
  let {title, classes, imgs, url} = props
  return (
    <div className={`${classes} ${title}`}>
      <div className='ac-device'>
        <a href='/#'>
          <img src='/assets/img/portfolio/amp-icon.png' alt='amp-icon' />
        </a>
      </div>
      <div className='ac-grid'>
        {
          imgs.map((item, id) => {
            return <Image key={id} {...item} url={url} />
          })
        }
      </div>
    </div>
  )
}
const Image = (props) => {
  let {title, href, url} = props
  return (
    <Link to={url + '/' + title}>
      <img src={href} alt='i-link'/>
      <span className='overlay'>
        <span className='sample-title'>
          <i className='material-icons'>flash_on</i>
          {title}
        </span>
      </span>
    </Link>
  )
}
// export default PortfolioPage
let PortfolioRoute = ({match}) => (
  <div>
    <Route exact path={`${match.url}`} component={PortfolioPage} />
    <Route 
      path={`${match.url}/:id`} 
      component={() => <ExamplePage url={match.url} />}
    />
  </div>
)
export default PortfolioRoute
