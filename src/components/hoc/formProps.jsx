import React, { Component } from 'react'
import axios from 'axios'

function formProps (RComponent) {
  class FormProps extends Component {
    componentDidMount () {
      this.setState({
        pathname: window.location.pathname
      })
    }
    constructor (props) {
      super(props)
      this.state = {
        valueName: '',
        valueEmail: '',
        valueUrl: '',
        valuePhone: '',
        valueMsg: '',
        startFetch: false,
        response: null
      }
      this.handleChangeName = this.handleChangeName.bind(this)
      this.handleChangeUrl = this.handleChangeUrl.bind(this)
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleChangeMsg = this.handleChangeMsg.bind(this)
      this.handleChangePhone = this.handleChangePhone.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event) {
      event.preventDefault()
      let { valueName, valueUrl, valueEmail, valueMsg, pathname } = this.state
      let url = `/send-form${pathname}`
      let body = {}
      let valid = false
      let state = this.state
      
      switch (pathname) {
        case '/learn/compare':
        if (!(valueUrl.length < 10) && !(valueEmail.indexOf('@') === -1)) {
          valid = true
        }
        break
        case '/order':
        if (!(valueName.length < 4) && !(valueEmail.indexOf('@') === -1)) {
          valid = true
        }
        break
        case '/contact-us':
        if (!(valueName.length < 4) && !(valueEmail.indexOf('@') === -1) && !(valueMsg.length < 10)) {
          valid = true
        }
        break
        default:
        break
      }

      if (!valid) {
        alert('incorrect data!')
        return
      }
      for (let key in state) {
        (state[key]) && (!!~key.indexOf('value')) && (body[key] = state[key])
      }
      body.pathname = pathname
      console.log(body)
      this.setState({startFetch: !this.state.startFetch})

      // real request
      axios.post(url, body)
        .then(response => {
      	this.setState({
      		response: response.data,
      		startFetch: !this.state.startFetch
      	})
        })
        .catch(error => {
      	console.log(error)
        })

      // mock request
      /*
      setTimeout(() => {
        this.setState({
          startFetch: !this.state.startFetch
        })
      }, 1500)
      setTimeout(() => {
        document.querySelector('.logo a').click()
      }, 2000)
      */
    }
    handleChangeName (event) {
      this.setState({valueName: event.target.value})
    }
    handleChangeUrl (event) {
      this.setState({valueUrl: event.target.value})
    }
    handleChangeEmail (event) {
      this.setState({valueEmail: event.target.value})
    }
    handleChangePhone (event) {
      this.setState({valuePhone: event.target.value})
    }
    handleChangeMsg (event) {
      this.setState({valueMsg: event.target.value})
    }

    render () {
      return (
        <RComponent
          handleSubmit={this.handleSubmit}
          handleChangeName={this.handleChangeName}
          handleChangeUrl={this.handleChangeUrl}
          handleChangeEmail={this.handleChangeEmail}
          handleChangeMsg={this.handleChangeMsg}
          handleChangePhone={this.handleChangePhone}
          valueName={this.state.valueName}
          valueUrl={this.state.valueUrl}
          valueEmail={this.state.valueEmail}
          valueMsg={this.state.valueMsg}
          valuePhone={this.state.valuePhone}
          response={this.state.response}
          startFetch={this.state.startFetch}
          {...this.props}
        />)
    }
  }
  FormProps.displayName = `formProps(${RComponent.displayName || RComponent.name || 'Component'})`
  return FormProps
}

export default formProps
