import React, { useState, useEffect } from 'react'

const Form = () => {
  const [textInputValue, setTextInputValue] = useState('')
  const [formVisibility, setFormVisibility] = useState(true)
  const [isLoading, setLoading] = useState(false)

  let form = null

  useEffect(() => {
    const script2 = document.createElement('script')
    script2.src = 'https://static.mailerlite.com/js/w/webforms.min.js?936104'
    document.body.appendChild(script2)

    form = document.querySelector('#form')
  })

  const handleSubmit = () => {
    setLoading(true)

    fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    }).then(res => {
      console.log('res: ', res)
      setLoading(false)

      if (res.status === 200) {
        setFormVisibility(false)
      }
    })
  }
  const handleChange = e => setTextInputValue(e.target.value)

  return (
    <div className="columns section">
      <div className="column"></div>
      <div className="post column is-four-fifths">
        <div
          id="mlb2-936104"
          className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-936104 columns is-vcentered is-half form-container"
        >
          <div className="column" style={{ display: formVisibility ? 'block' : 'none' }}>
            <h1 className="form-title">Stay informed about newest articles!</h1>
            <p className="form-subtitle">Join the newsletter to receive weekly blog updates.</p>
          </div>
          <div className="column" style={{ display: !formVisibility ? 'block' : 'none' }}>
            <h1 className="form-title">Confirmatiom email has been sent!</h1>
            <p className="form-subtitle">
              Check your email and confirm your subscription to weekly newsletter.
            </p>
          </div>
          <div className="column">
            <form
              id="form"
              className="ml-block-form columns"
              action="https://app.mailerlite.com/webforms/submit/r2v5f2"
              data-code="r2v5f2"
              method="post"
              target="_blank"
              onSubmit={handleSubmit}
              style={{ display: formVisibility ? 'flex' : 'none' }}
            >
              <div className="field column">
                <div className={`control ${isLoading ? 'is-loading' : ''}`}>
                  <input
                    type="email"
                    className="form-control input is-black"
                    data-inputmask=""
                    name="fields[email]"
                    value={textInputValue}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="column">
                <button type="submit" className="button is-primary">
                  <p className="post-container">Subscribe</p>
                </button>
                <button
                  disabled="disabled"
                  style={{ display: 'none' }}
                  type="button"
                  className="loading"
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="column"></div>
    </div>
  )
}

export default Form
