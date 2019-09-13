import React, { useState, useEffect } from 'react'

const Form = () => {
  const [state, setState] = useState({
    name: '',
    email: ''
  })
  const [formVisibility, setFormVisibility] = useState(true)
  const [isLoading, setLoading] = useState(false)
  const { name, email } = state
  console.log('email: ', email)

  console.log('name: ', name)
  let form = null

  useEffect(() => {
    const script2 = document.createElement('script')
    script2.src = 'https://static.mailerlite.com/js/w/webforms.min.js?936104'
    document.body.appendChild(script2)

    form = document.querySelector('#form')
  })

  const handleSubmit = () => {
    setLoading(true)
    if (name.length || email.lenght > 0) {
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
  }
  const handleChangeName = e => {
    setState({ name: e.target.value, email })
  }

  const handleChangeEmail = e => {
    setState({ email: e.target.value, name })
  }

  return (
    <div className="columns section">
      <div className="post column  container">
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
                <input
                  type="text"
                  className="form-control input is-black"
                  name="fields[name]"
                  value={name}
                  placeholder="Name"
                  onChange={handleChangeName}
                />
              </div>
              <div className="field column">
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
    </div>
  )
}

export default Form
