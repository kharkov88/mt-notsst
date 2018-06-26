import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import formProps from '../hoc/formProps'

// script bg-2
// import three.js from './bg-2-js/three.min.js'
import linesAnimation from '../../utilities/bg-2-js/3d-lines-animation'
import projector from '../../utilities/bg-2-js/projector'
import canvasRenderer from '../../utilities/bg-2-js/canvas-renderer'


let config = {
  style: {
    width: '100%'
  }
}
class OrderPage extends Component {
  constructor (props) {
    super(props)
    global.navigator
      ? this.elem = document.querySelector('#particles-js')
      : this.elem = {}
  }
  componentDidMount () {
    this.elem.style.display = 'none'
    setTimeout(() => {
      projector()
      canvasRenderer()
      linesAnimation()
    }, 0)
  }
  componentWillUnmount () {
    this.elem.style.display = 'block'
  }
  render () {
    let {url} = this.props.match

    return (
      <div className='order-page bg-2'>
        <Header url={url} />
        <main className='container main'>
          <CustomForm />
        </main>
        <div id='canvas' className='gradient' />
        <Footer url={url} />
      </div>
    )
  }
}

let OrderForm = (props) => {
  let {response, startFetch, valueName, valueUrl, valueEmail, valueMsg} = props
  let {handleChangeName, handleChangeUrl, handleChangeEmail, handleChangeMsg, handleSubmit} = props

  return (
    response
      ? <h1 style={config.style}>{response}</h1>
      : startFetch
        ? <h1 style={config.style}>loading...</h1>
        : <div style={config.style}>
          <h1 className='animated zoomIn'>Get a quote</h1>
          <section className='order-form animated zoomIn'>
            <div className='order-form-description'>Successful and profitable projects beginning here</div>
            <form id='order-form' onSubmit={handleSubmit}>
              <div className='input-block'>
                <div className='left-side'>
                  <input
                    type='text'
                    id='order-name'
                    name='order-name'
                    className='form-control'
                    placeholder='Name'
                    value={valueName}
                    onChange={handleChangeName}
                  />
                  <input
                    type='text'
                    id='order-url'
                    name='order-url'
                    className='form-control'
                    placeholder='URL'
                    value={valueUrl}
                    onChange={handleChangeUrl}
                  />
                  <input
                    type='email'
                    id='order-email'
                    name='order-email'
                    className='form-control'
                    placeholder='Email'
                    value={valueEmail}
                    onChange={handleChangeEmail}
                  />
                </div>
                <div className='right-side'>
                  <textarea
                    id='order-message'
                    name='order-message'
                    className='form-control'
                    placeholder='Tell more about if you wish'
                    value={valueMsg}
                    onChange={handleChangeMsg}
                  />
                </div>
              </div>
              <div className='button-block'>
                <button type='submit' id='order-submit' className='order-form-submit'>
                  <span>SUBMIT REQUEST</span>
                  <i className='material-icons'>chevron_right</i>
                </button>
              </div>
            </form>
          </section>
        </div>
  )
}

let CustomForm = formProps(OrderForm)

export default OrderPage
