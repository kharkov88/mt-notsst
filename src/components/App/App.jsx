import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'

import NotFound from '../NotFound'
import IndexPage from '../IndexPage'
import LearnPage from '../LearnPage'
import OrderPage from '../OrderPage'
import ContactUsPage from '../ContactUsPage'
import PortfolioPage from '../SharePages/PortfolioPage'
import ForFreePage from '../ForFreePage'

import TermsOfService from '../Footer/TermsOfService'
import PrivacyPolicy from '../Footer/PrivacyPolicy'

import './App.css'

class App extends Component {
  componentDidMount () {
    let pre = document.querySelector('#preloader')
    if(pre) {
      setTimeout(() => {
        document.body.removeChild(pre)
      }, 600)
    }
    ReactGA.initialize('UA-121315535-1', {
      debug: true,
      titleCase: false
    })
    ReactGA.event({
      category: 'spa-mtcom',
      action: 'view',
      label: 'path:'+window.location.pathname,
      nonInteraction: true
    })
  }
  render () {
    let { url } = this.props
    console.log(this.props)
    return (
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/learn' component={LearnPage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route path='/order' component={OrderPage} />
        <Route path='/contact-us' component={ContactUsPage} />
        <Route path='/public-offer' component={TermsOfService} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/for-free' component={ForFreePage} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App
// <Route path='/portfolio' component={PortfolioPage} />
