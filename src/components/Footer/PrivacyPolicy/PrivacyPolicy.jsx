import React, { Component } from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

class PrivacyPolicy extends Component {
  componentDidMount () {
    let $ = window.$
    this.elem = document.querySelector('#particles-js')
    this.elem.style.display = 'none'
    let scrollbar = $('#scrollbar1')
    scrollbar.tinyscrollbar()
  }
  componentWillUnmount () {
    this.elem.style.display = 'block'
  }
  render () {
    let {url} = this.props.match
    return (
      <div className='static-page bg-2'>
        <Header />
        <main className='container main'>
          <div id='scrollbar1'>
            <div className='scrollbar'>
              <div className='track'>
                <div className='thumb'>
                  <div className='end' />
                </div>
              </div>
            </div>
            <div className='viewport'>
              <div className='overview'>
                <h1>Privacy</h1>
                <p>At Mobile Web Solutions, Inc. ("MWS") d/b/a MobilizeToday.com we recognize that privacy is important. This Policy applies to all of the products, services and websites offered by MobilizeToday.com.</p>
                <h2>What information do we collect?</h2>
                <h3>Information you provide</h3>
                <p>When you sign up for a MobilizeToday.com Account or other MobilizeToday.com service or promotion that requires registration, we will ask you for personal information (such as your name, email address and an account password).</p>
                <h3>Cookies</h3>
                <p>When you visit MobilizeToday.com, we send one or more cookies - a small file containing a string of characters - to your computer that uniquely identifies your browser. We use cookies to improve the quality of our service by storing user preferences and tracking user trends, such as how people search. Most browsers are initially set up to accept cookies, but you can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, some MobilizeToday.com features and services may not function properly if your cookies are disabled.</p>
                <h3>Log information</h3>
                <p>When you use MobilizeToday.com services, our servers automatically record information that your browser sends whenever you visit a website. These server logs may include information such as your web request, Internet Protocol address, browser type, browser language, the date and time of your request and one or more cookies that may uniquely identify your browser.</p>
                <h3>User communications</h3>
                <p>When you send email or other communication to MobilizeToday.com, we may retain those communications in order to process your inquiries, respond to your requests and improve our services.</p>
                <h3>Links</h3>
                <p>MobilizeToday.com may present links in a format that enables us to keep track of whether these links have been followed. We use this information to improve the quality of our search technology, customized content and advertising.</p>
                <h3>Other sites</h3>
                <p>This Privacy Policy applies to web sites and services that are owned and operated by MobilizeToday.com. We do not exercise control over the sites displayed as search results or links from within our various services.</p>
                <h2>What do we use your information for?</h2>
                <p>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</p>
                <h2>How do we protect your information?</h2>
                <p>We offer the use of a secure communication option (through the use of SSL certificates) to keep the all communication secured while it passes through our services.</p>
                <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order.</p>
                <p>All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential. After a transaction, your private information (credit cards, social security numbers, financial, etc.) will not be stored on our servers.</p>
                <h2>Do we disclose any information to outside parties?</h2>
                <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
                <h2>Children Online Privacy Protection Act Compliance</h2>
                <p>We are in compliance with the requirements of COPPA (Children Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.</p>
                <h2>Online Privacy Policy Only</h2>
                <p>This online privacy policy applies only to information collected through our website and not to information collected offline.</p>
                <h2>Terms and Conditions</h2>
                <p>Please also visit our Terms and Conditions section [<a href='#terms-of-service'>www.mobilizetoday.com/offer</a>] establishing the use, disclaimers, and limitations of liability governing the use of our website at www.mobilizetoday.com/</p>
                <h2>Your Consent</h2>
                <p>By using our site and/or services, you consent to our privacy policy.</p>
                <h2>Changes to our Privacy Policy</h2>
                <p>If we decide to change our privacy policy, we will update the Privacy Policy modification date below. This policy was last modified on December 17, 2010</p>
                <h2>Contacting Us</h2>
                <p>If there are any questions regarding this privacy policy you may contact us using the information below.<br />Postal mail:<br />Mobile Web Solutions, Inc.<br />1201 N. Orange St, #762<br />Wilmington, New Castle, DE, 19801<br />Email: support@mobilizetoday.com</p>
                <br />
              </div>
            </div>
          </div>
        </main>
        <Footer url={url} />
      </div>
    )
  }
}

export default PrivacyPolicy
