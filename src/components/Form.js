import React, { useState, useEffect } from 'react'

const Form = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setErrorVisibility] = useState({
    text: '     error',
    isVisible: false,
  })
  const [isFormVisible, setFormVisibility] = useState(true)
  const [isLoading, setLoading] = useState(false)
  let form = null

  useEffect(() => {
    const script2 = document.createElement('script')
    script2.src = 'https://static.mailerlite.com/js/w/webforms.min.js?936104'
    document.body.appendChild(script2)

    form = document.querySelector('#form')
  })

  //eslint-disable-next-line no-useless-escape
  const isValidEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
    email
  )
  const isNameValid = /^[a-zA-Z]*$/g.test(name)

  const handleSubmit = () => {
    if (isNameValid && isValidEmail) {
      setLoading(true)

      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      }).then(res => {
        setLoading(false)

        if (res.status === 200) {
          setFormVisibility(false)
          setErrorVisibility({ text: '', isVisible: false })
        }
      })
    }
    if (!isNameValid) {
      setErrorVisibility({
        text: 'Your name contains invalid characters, please use only letters.',
        isVisible: true,
      })
    }
    if (!isValidEmail) {
      setErrorVisibility({
        text: 'Your email has invalid format.',
        isVisible: true,
      })
    }
  }
  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  return (
    <div className="container">
      <div
        id="mlb2-936104"
        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-936104 columns form-container"
      >
        <div
          className="column"
          style={{
            display: isFormVisible ? 'block' : 'none',
            opacity: isFormVisible ? 1 : 0,
          }}
        >
          <h1 className="form-title">Stay informed about newest articles!</h1>
          <p className="form-subtitle">
            Join the newsletter to receive weekly blog updates.
          </p>
        </div>
        <div
          className="column"
          style={{
            display: !isFormVisible ? 'block' : 'none',
            opacity: !isFormVisible ? 1 : 0,
          }}
        >
          <h1 className="form-title">Confirmatiom email has been sent!</h1>
          <p className="form-subtitle">
            Check your email and confirm your subscription to weekly newsletter.
          </p>
        </div>
        <div className="column form-wrapper">
          <p
            className="form-error"
            style={{ opacity: error.isVisible ? 1 : 0 }}
          >
            {error.text}
          </p>
          <form
            id="form"
            className="ml-block-form"
            action="https://app.mailerlite.com/webforms/submit/r2v5f2"
            data-code="r2v5f2"
            method="post"
            target="_blank"
            onSubmit={handleSubmit}
            style={{ display: isFormVisible ? 'flex' : 'none' }}
          >
            <div className="field">
              <input
                type="text"
                className="form-control input is-black"
                name="fields[name]"
                value={name}
                placeholder="Name"
                onChange={handleChangeName}
              />
            </div>
            <div className="field">
              <div className={`control ${isLoading ? 'is-loading' : ''}`}>
                <input
                  type="email"
                  className="form-control input is-black"
                  name="fields[email]"
                  value={email}
                  placeholder="Email"
                  onChange={handleChangeEmail}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-primary form-button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
