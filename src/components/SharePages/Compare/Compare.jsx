import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'
import formProps from '../../hoc/formProps'

let config = {
  style: {
    width: '100%'
  }
}

const Compare = (props) => {
  let {url} = props.match
  return (
    <div className='compare-page bg-1'>
      <Header />
      <main className='container main'>
        <CustomForm />
      </main>
      <Footer url={url} />
    </div>
  )
}

let CompareForm = (props) => {
  let { response, startFetch, valueUrl, valueEmail } = props
  let { handleChangeUrl, handleChangeEmail, handleSubmit} = props

  return (
    response
      ? <h1 style={config.style}>{response}</h1>
      : startFetch
        ? <h1 style={config.style}>loading...</h1>
        : <div style={config.style}>
          <h1 className='animated zoomIn'>Compare load speed of your webpage with AMP</h1>
          <div className='description animated zoomIn'>
                Get free report about load speed comparison of the specified webpage with AMP page.
            <br /> Please fill in the form fields below.
          </div>

          <form className='animated zoomIn' id='compare-form' onSubmit={handleSubmit}>
            <div>
              <input
                type='email'
                id='compare-email'
                name='compare-email'
                className='form-control'
                placeholder='Email'
                value={valueEmail}
                onChange={handleChangeEmail}
              />
            </div>
            <div>
              <input
                type='text'
                id='compare-url'
                name='compare-url'
                className='form-control'
                placeholder='URL'
                value={valueUrl}
                onChange={handleChangeUrl}
              />
            </div>
            <div>
              <input id='compare-submit' type='submit' value='Get Free Report' className='form-submit' />
            </div>
          </form>
        </div>
  )
}

let CustomForm = formProps(CompareForm)

export default ({match}) => (
  <Switch>
    <Route exact path={`${match.url}`} component={Compare} />
  </Switch>
)
