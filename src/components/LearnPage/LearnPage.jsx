import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Compare from '../SharePages/Compare'
import Services from './Services'

class LearnPage extends Component {
  render () {
    let {url} = this.props.match
    return (
      <div className='learn-page bg-1'>

        <Header />
        <main className='container main'>
          <h1>Not sure you need AMP?</h1>
          <div className='actions row'>
            <div className='grid'>
              <figure className='effect-chico animated bounceInLeft'>
                <Link to={url + '/compare'}>
                  <img src='/assets/img/block-image/compare.svg' alt='Compare load speed of any webpage with AMP' />
                  <figcaption>
                    <h2>Compare load speed of your webpage with AMP</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated bounceInUp'>
                <Link to={url + '/services'}>
                  <img src='/assets/img/block-image/services.svg' alt='Why order here' />
                  <figcaption>
                    <h2>Why order here / Portfolio</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated bounceInDown'>
                <Link to='/contact-us'>
                  <img src='/assets/img/block-image/contact-expert.svg' alt='Contact expert' />
                  <figcaption>
                    <h2>Contact expert</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated bounceInRight'>
                <Link to='/order'>
                  <img src='/assets/img/block-image/order.svg' alt='Request a quote' />
                  <figcaption>
                    <h2>Request a quote</h2>
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
}

export default ({match}) => (
  <div>
    <Route exact path={`${match.url}`} component={LearnPage} />
    <Route path={`${match.url}/compare`} component={Compare} />
    <Route path={`${match.url}/services`} component={Services} />
  </div>
)
