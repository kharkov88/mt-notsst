import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'

import config from '../../../configs/portfolio-data.js'

let links = []

function getLinks() {
  config.category.map(item => {
    return item.imgs.map(item => {
      return links.push(item.title)
    })
  })  
}
console.log('links:',links)

class ExamplePage extends Component {
  constructor (props) {
  	super(props)
  	this.state = {
  		pathname: ''
  	}
  }

  componentDidMount () {
  	this.setState({
  		pathname: window.location.pathname
  	})
    getLinks()
    //let a = document.querySelectorAll('.navigation a')
    //console.log('aaaaaaa:',a)
    //a.forEach( item => item.classList.remove('bounceInLeft'))
  }

  render () {
    let data = this.getData()
    //console.log('pathname:', pathname)
    console.log('data:', data)

    return (
      <div className='portfolio-example bg-1'>
        <Header />
        <main className='container main'>
          <h1 className='title animated zoomIn'>Portfolio | {data.category} | {data.title}</h1>
          <div className='portfolio-example-info'>
            <div className='example-image-wrapper'>
              <div className='info-image'>
                <img src={data.href} alt='href'/>
                <a className='example-link animated zoomInLeft' href={data.ampUrl} target='_blank'>
                  <span className='overlay'>
                    <span className='example-link animated zoomInLeft'>Open website</span>
                  </span>
                </a>
              </div>
            </div>
            <div className='example-description'>
              <div className='example-description-column'>
                <p className='parameter-title'>
                  <i className='material-icons'>phone_iphone</i>
                  <span>MOBILE</span> <br /> load speed
                </p>
                <br />
                <p className='parameter-value'>{data.mobileSpeed} sec</p>
              </div>
              <div className='example-description-column'>
                <p className='parameter-title'>
                  <i className='material-icons'>flash_on</i>
                  <span>AMP</span><br /> load speed
                </p>
                <p className='parameter-value'>{data.ampSpeed} sec</p>
              </div>
              <div className='example-qr'>
                <a href={data.ampUrl} target='_blank'>
                  <img src={data.qrcode} alt='eco-skovoroda.ru' />
                </a>
                <div className='qr-description'>
                  <p className='qr-description-title'>AMP URL:</p>
                  <p className='example-link'>
                    <a className='example-link animated zoomInLeft' href={data.ampUrl} target='_blank'>
                      {data.ampUrl}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='example-order-block'>
              <Navigator url={this.props.url} title={data.title} />
              <Link className='example-order-link' to='/order'>Order now</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  getData() {
    let {pathname} = this.state
    let a = decodeURI(pathname).split('/')
    let clientName = (a[a.length - 1])
    console.log('client name:', clientName)
    let categoryTitle = null
    let {category} = config
    let data = {}

    category.map(item => {
      categoryTitle = item.title
      return item.imgs.map(item => {
        if (item.title === clientName) {
          data = item
          let a = categoryTitle
          console.log(a)
          data.category = a
        }
        return data
      })
    })
    return data 
  }
}
const Navigator = (props) => {
  console.log('props:', props)
  let current = links.includes(props.title) && links.indexOf(props.title)
  if (current === 0) {
    let href = document.querySelector('.prev-example a')
    href.classList.add('disabled')
  }
  if (current === 15) {
    let href = document.querySelector('.next-example a')
    href.classList.add('disabled')
  }
  return (
    <div className='navigation-block'>
      <div className='prev-example'>
        <Link to={`${props.url}/${links[current - 1]}`}>
          <span className='btn-icon'><i className='material-icons'>keyboard_arrow_left</i></span>
          <span>Previous</span>
        </Link>
      </div>
      <div className='next-example'>
        <Link to={`${props.url}/${links[current + 1]}`}>
          <span className='btn-icon'><i className='material-icons'>keyboard_arrow_right</i></span>
          <span>Next</span>
        </Link>
      </div>
    </div>
  )
}
export default ExamplePage
