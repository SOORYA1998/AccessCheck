
import { useState } from 'react'
import './App.css'

function App() {
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [error, setError] = useState('')
  const [scanMessage, setScanMessage] = useState('')

  const handleScan = () => {
  setError('')
  setScanMessage('')

  if (!websiteUrl.trim()) {
    setError('Please enter a website URL.')
    return
  }

  try {
    const formattedUrl = websiteUrl.startsWith('http')
      ? websiteUrl
      : `https://${websiteUrl}`

    const url = new URL(formattedUrl)

    if (!['http:', 'https:'].includes(url.protocol)) {
      setError('Please enter a valid website URL.')
      return
    }

    setWebsiteUrl(url.href)
    setScanMessage(`URL validated successfully: ${url.hostname}`)
  } catch {
    setError('Please enter a valid website URL.')
  }
}

  return (
    <div className="app">
      <header className="navbar">
        <a href="/" className="brand">
          <span className="brand-icon">A</span>
          AccessCheck
        </a>

        <nav>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </nav>

        <button className="nav-button">Get Started</button>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <span className="eyebrow">WEBSITE ACCESSIBILITY ANALYSER</span>

            <h1>
              Make your website
              <br />
              <span>accessible to everyone.</span>
            </h1>

            <p className="hero-description">
              Discover accessibility issues on your website and get
              actionable recommendations to create a better experience
              for every visitor.
            </p>

            <div className="scan-box">
              <input
                type="text"
                placeholder="Enter your website URL (e.g. https://example.com)"
                value={websiteUrl}
                onChange={(event) => setWebsiteUrl(event.target.value)}
              />

              <button onClick={handleScan}>
                Scan Website →
              </button>
            </div>

            {error && <p className="error-message">{error}</p>}
            {scanMessage && <p className="success-message">{scanMessage}</p>}

            <p className="privacy-note">
              <span>✓</span> Free accessibility scan · No registration required
            </p>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-header">
                <span>Accessibility Overview</span>
                <span className="status-dot">● Live Preview</span>
              </div>

              <div className="score-circle">
                <div>
                  <strong>--</strong>
                  <span>Score</span>
                </div>
              </div>

              <div className="visual-stats">
                <div>
                  <strong>--</strong>
                  <span>Critical issues</span>
                </div>
                <div>
                  <strong>--</strong>
                  <span>Warnings</span>
                </div>
                <div>
                  <strong>--</strong>
                  <span>Passed checks</span>
                </div>
              </div>

              <p className="preview-note">
                Your website report will appear here after scanning.
              </p>
            </div>
          </div>
        </section>

        <section className="features-section" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE CHECK</span>
            <h2>Understand your website's accessibility</h2>
            <p>
              Identify common accessibility problems and learn how to fix them.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">◈</div>
              <h3>Image Accessibility</h3>
              <p>Find images that are missing alternative text.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">Aa</div>
              <h3>Colour Contrast</h3>
              <p>Identify text and background contrast problems.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">☷</div>
              <h3>Form Accessibility</h3>
              <p>Check whether form fields have accessible labels.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">↕</div>
              <h3>Page Structure</h3>
              <p>Check heading structure and page organisation.</p>
            </article>
          </div>
        </section>
      </main>

      <footer id="about">
        <p>© 2026 AccessCheck. Built for a more accessible web.</p>
      </footer>
    </div>
  )
}

export default App
