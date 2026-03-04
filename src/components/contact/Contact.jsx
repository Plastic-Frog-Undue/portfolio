import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')

    // Replace with your EmailJS credentials or Formspree endpoint
    // Option A: Formspree — replace YOUR_FORM_ID
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="section-label">
          <span>04</span>
          <div className="label-line"></div>
          <span>Contact</span>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-heading">
              Let's build<br />
              something<br />
              <span className="heading-accent">together.</span>
            </h2>
            <p className="contact-blurb font-mono">
              I'm available for new projects. If you have an idea,
              need a developer, or just want to say hi — reach out.
            </p>

            <div className="contact-details">
              <a href="mailto:smndr00abd@gmail.com" className="contact-item">
                <span className="item-icon font-mono">@</span>
                <span>smndr00abd@gmail.com</span>
              </a>
              <a href="tel:+821098052504" className="contact-item">
                <span className="item-icon font-mono">#</span>
                <span>+82 10-9805-2504</span>
              </a>
              <div className="contact-item">
                <span className="item-icon font-mono">📍</span>
                <span>Seoul, South Korea</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-link font-mono">GitHub ↗</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-link font-mono">LinkedIn ↗</a>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label font-mono">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label font-mono">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label font-mono">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input form-textarea"
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className={`form-submit ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'idle' && 'Send Message →'}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error' && 'Error — Try Again'}
              </button>

              {status === 'error' && (
                <p className="form-hint font-mono">
                  Set up Formspree: replace YOUR_FORM_ID in Contact.jsx with your ID from formspree.io
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
