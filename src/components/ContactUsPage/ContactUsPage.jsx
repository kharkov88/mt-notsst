import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import formProps from '../hoc/formProps'

// script bg-2
// import three from './bg-2-js/three.min.js'
import linesAnimation from '../../utilities/bg-2-js/3d-lines-animation'
import projector from '../../utilities/bg-2-js/projector'
import canvasRenderer from '../../utilities/bg-2-js/canvas-renderer'

let config = {
  style: {
    width: '70%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingRight: '15px'
  }
}

class ContactUsPage extends Component {
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
      <div className='contact-us-page bg-2'>
        <Header url={url}/>
        <main className='container main'>
          <h1 className='title animated zoomIn'>Contact us</h1>
          <section className='contact-us-form animated zoomIn'>
            <CustomForm />
            <div className='addres-column'>
              <ul>
                <li>
                  <i className='material-icons'>location_on</i>
                  <p><span>USA - Mobile Web Solutions, Inc. </span><br /> Foundation: December, 2010 <br />
                    <a href='mailto:info@mobilizetoday.com' target='_blank'>info@mobilizetoday.com</a> <br /></p>
                </li>
                <li>
                  <i className='material-icons'>location_on</i>
                  <p><span>Japan - i3DESIGN Co., Ltd.</span> <br /> Foundation: July 26, 2006 <br />
                    <a href='mailto:info@i3design.co.jp' target='_blank'>info@i3design.co.jp</a> <br /> (81) 3-6419-7700 <br /></p>
                </li>
                <li>
                  <i className='material-icons'>location_on</i>
                  <p><span>CIS - Ampersand, LLC</span><br /> Foundation: December, 2010 <br />
                    <a href='mailto:info@mobilizetoday.ru' target='_blank'>info@mobilizetoday.ru</a><br /> 7 (495) 640-8862 <br /></p>
                </li>
              </ul>
            </div>
          </section>

        </main>
        <div id='canvas' className='gradient' />
        <Footer url={url} />
      </div>
    )
  }
}
let ContactUsForm = (props) => {
  let {response, startFetch, valueName, valueEmail, valuePhone, valueMsg} = props
  let {handleChangeName, handleChangeEmail, handleChangePhone, handleChangeMsg, handleSubmit} = props

  return (
    response
      ? <h1 style={config.style}>{response}</h1>
      : startFetch
        ? <h1 style={config.style}>loading...</h1>
        : <div className='form-column'>
          <form id='contact-us-form' onSubmit={handleSubmit}>
            <div className='form-input'>
              <span className='form-text'>Hey <span className='color-name'>MobilizeToday</span> team, my name is</span>
              <input
                type='text'
                id='contact-us-name'
                name='contact-us-name'
                className='form-control'
                placeholder='Name'
                value={valueName}
                onChange={handleChangeName}
              />
            </div>
            <div className='form-input'>
              <span className='form-text'>Please, contact me via</span>
              <input
                type='email'
                id='contact-us-email'
                name='contact-us-email'
                className='form-control'
                placeholder='Email'
                value={valueEmail}
                onChange={handleChangeEmail}
              />
              <span className='form-text ml'>or</span>
              <input
                type='tel'
                id='contact-us-phone'
                name='contact-us-phone'
                className='form-control'
                placeholder='Phone'
                value={valuePhone}
                onChange={handleChangePhone}
              />
            </div>
            <div className='form-textarea'>
              <textarea
                id='contact-us-message'
                name='contact-us-message'
                className='form-control'
                placeholder="I'd like to speak with you about:"
                value={valueMsg}
                onChange={handleChangeMsg}
              />
            </div>
            <div className='form-button'>
              <input id='contact-us-submit' type='submit' value='Send' className='form-submit' />
            </div>
          </form>
        </div>

  )
}

let CustomForm = formProps(ContactUsForm)

export default ContactUsPage
