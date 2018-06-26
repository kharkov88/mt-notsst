import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'

const ServicesPage = (props) => {
  let {url} = props.match
  return (
    <div className='services-page bg-1'>
      <Header />
      <main className='container main'>
        <div className='description animated zoomIn'>
          <h1 className='animated zoomIn'>Why order here / Portfolio</h1>
          <ul>
            <li>8 working hours response time with first AMP draft</li>
            <li>1000+ AMP pages launched</li>
            <li>Worldwide presence: US/Canada, Europe, Japan, CIS</li>
          </ul>
        </div>

        <div className='actions row'>
          <div className='grid'>
            <figure className='effect-chico animated bounceInLeft'>
              <Link to='/portfolio'>
                <img src='/assets/img/block-image/portfolio.svg' alt='See portfolio' />
                <figcaption>
                  <h2>See portfolio</h2>
                </figcaption>
              </Link>
            </figure>
            <figure className='effect-chico animated bounceInRight'>
              <Link to='/order'>
                <img src='/assets/img/block-image/order.svg' alt='Get a quote' />
                <figcaption>
                  <h2>Get a quote</h2>
                </figcaption>
              </Link>
            </figure>
          </div>
        </div>
      </main>
      <Footer url={url} />
    </div>
  )
}

export default ({match}) => (
  <Switch>
    <Route exact path={`${match.url}`} component={ServicesPage} />
  </Switch>
)
