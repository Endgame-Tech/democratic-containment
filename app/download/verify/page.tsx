'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

type VerifyState = 'loading' | 'valid' | 'expired' | 'invalid' | 'error'

function VerifyContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [state, setState] = useState<VerifyState>('loading')
  const [name, setName] = useState('')
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    if (!token) {
      setState('invalid')
      return
    }

    const verify = async () => {
      try {
        const res = await fetch(`${API_URL}/api/report/verify/${token}`)
        const data = await res.json()

        if (data.valid) {
          setName(data.name)
          setState('valid')
        } else if (data.reason === 'expired') {
          setState('expired')
        } else {
          setState('invalid')
        }
      } catch {
        setState('error')
      }
    }

    verify()
  }, [token])

  const handleDownload = () => {
    if (!token) return
    setDownloading(true)
    window.location.href = `${API_URL}/api/report/download/${token}`
    setTimeout(() => setDownloading(false), 3000)
  }

  return (
    <div className="page">
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--forest-green) 0%, var(--emerald) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 3rem',
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: 'clamp(2rem, 4vw, 3rem)',
          maxWidth: '520px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        }}>

          {/* Loading */}
          {state === 'loading' && (
            <>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⏳</div>
              <h1 style={headingStyle}>Preparing Your Download...</h1>
              <p style={bodyStyle}>Verifying your download link. This will only take a moment.</p>
            </>
          )}

          {/* Valid — ready to download */}
          {state === 'valid' && (
            <>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📄</div>
              <h1 style={headingStyle}>Your Report is Ready{name ? `, ${name.split(' ')[0]}` : ''}!</h1>
              <p style={bodyStyle}>
                The full 59-page Democratic Containment report is ready for you.
              </p>
              <button
                onClick={handleDownload}
                disabled={downloading}
                style={{
                  display: 'inline-block',
                  background: 'var(--emerald)',
                  color: 'white',
                  padding: '1.1rem 2.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  cursor: downloading ? 'wait' : 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 15px rgba(0, 135, 81, 0.3)',
                  transition: 'all 0.3s',
                  opacity: downloading ? 0.7 : 1,
                  marginBottom: '1.5rem',
                }}
              >
                {downloading ? 'Downloading...' : 'Download Report (PDF)'}
              </button>
              <p style={{ fontSize: '0.85rem', color: 'var(--slate)', margin: 0 }}>
                Having trouble? <Link href="/download" style={{ color: 'var(--emerald)', textDecoration: 'underline' }}>Request a new link</Link>
              </p>
            </>
          )}

          {/* Expired */}
          {state === 'expired' && (
            <>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⏰</div>
              <h1 style={headingStyle}>Link Expired</h1>
              <p style={bodyStyle}>
                This download link has expired. Don&apos;t worry — you can request a new one.
              </p>
              <Link href="/download" style={ctaStyle}>
                Request New Link
              </Link>
            </>
          )}

          {/* Invalid */}
          {state === 'invalid' && (
            <>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⚠️</div>
              <h1 style={headingStyle}>Invalid Link</h1>
              <p style={bodyStyle}>
                This download link is not valid. It may have been copied incorrectly.
              </p>
              <Link href="/download" style={ctaStyle}>
                Request the Report
              </Link>
            </>
          )}

          {/* Network error */}
          {state === 'error' && (
            <>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🔌</div>
              <h1 style={headingStyle}>Connection Error</h1>
              <p style={bodyStyle}>
                We couldn&apos;t verify your link. Please check your internet connection and try again.
              </p>
              <button
                onClick={() => window.location.reload()}
                style={ctaStyle}
              >
                Try Again
              </button>
            </>
          )}

        </div>
      </section>
    </div>
  )
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="page">
        <section style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, var(--forest-green) 0%, var(--emerald) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 1.5rem 3rem',
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '3rem 2rem',
            maxWidth: '520px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⏳</div>
            <h1 style={headingStyle}>Preparing Your Download...</h1>
            <p style={bodyStyle}>Verifying your download link. This will only take a moment.</p>
          </div>
        </section>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  )
}

const headingStyle: React.CSSProperties = {
  fontFamily: "'Fraunces', serif",
  fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
  fontWeight: 800,
  color: '#1C1C1C',
  marginBottom: '0.75rem',
  lineHeight: 1.2,
}

const bodyStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#4A5859',
  lineHeight: 1.7,
  marginBottom: '1.5rem',
}

const ctaStyle: React.CSSProperties = {
  display: 'inline-block',
  background: '#008751',
  color: 'white',
  padding: '1rem 2.5rem',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s',
}
