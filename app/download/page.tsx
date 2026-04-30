'use client'

import { useState } from 'react'
import Link from 'next/link'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const CATEGORY_OPTIONS = [
  '#EndSARS Protesters',
  '2023 Voters',
  'Electoral Reform Advocates',
  'International Donors',
  'Civil Society Leaders',
  'Nigerian Diaspora',
  'Young Nigerians (18-35)',
  'Journalists & Media',
  'Values-Based Political Class',
  'Business Leaders & Private Sector',
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function DownloadPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [collaborationInterest, setCollaborationInterest] = useState<boolean | null>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [submittedEmail, setSubmittedEmail] = useState('')

  // Field-level errors
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    category: false,
    collaboration: false,
  })

  const nameError = touched.fullName && fullName.trim().length < 2
    ? 'Name must be at least 2 characters.'
    : ''
  const emailError = touched.email && !EMAIL_REGEX.test(email.trim())
    ? 'Please enter a valid email address.'
    : ''
  const categoryError = touched.category && !category
    ? 'Please select a category.'
    : ''
  const collaborationError = touched.collaboration && collaborationInterest === null
    ? 'Please indicate your collaboration interest.'
    : ''

  const isFormValid =
    fullName.trim().length >= 2 &&
    EMAIL_REGEX.test(email.trim()) &&
    category !== '' &&
    collaborationInterest !== null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ fullName: true, email: true, category: true, collaboration: true })

    if (!isFormValid) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch(`${API_URL}/api/report/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          category,
          collaborationInterest,
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmittedEmail(email.trim())
        setStatus('success')
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
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
            padding: '3rem 2rem',
            maxWidth: '560px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✉️</div>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 800,
              color: 'var(--charcoal)',
              marginBottom: '1rem',
            }}>
              Report Sent!
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--slate)',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              The report has been sent to <strong style={{ color: 'var(--emerald)' }}>{submittedEmail}</strong>.
              Please check your inbox (and spam folder) within the next few minutes.
            </p>
            <Link href="/" style={{
              display: 'inline-block',
              background: 'var(--emerald)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'all 0.3s',
            }}>
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    )
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
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'var(--gold)',
              color: 'var(--warm-black)',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '0.8rem',
              marginBottom: '1rem',
            }}>
              Free Report
            </span>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 800,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}>
              Download the Democratic Containment Report
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--slate)',
              lineHeight: 1.6,
            }}>
              Fill in your details and we&apos;ll send the full 59-page report directly to your email.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot — hidden from users */}
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Full Name */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="fullName" style={labelStyle}>Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                style={{
                  ...inputStyle,
                  borderColor: nameError ? 'var(--deep-red)' : '#ddd',
                }}
              />
              {nameError && <p style={errorStyle}>{nameError}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="email" style={labelStyle}>Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                style={{
                  ...inputStyle,
                  borderColor: emailError ? 'var(--deep-red)' : '#ddd',
                }}
              />
              <p style={{
                fontSize: '0.8rem',
                color: emailError ? 'var(--deep-red)' : 'var(--slate)',
                marginTop: '0.35rem',
              }}>
                {emailError || 'Report will be sent to this email address. Please ensure it\'s correct.'}
              </p>
            </div>

            {/* Category */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="category" style={labelStyle}>What Best Describes You?</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, category: true }))}
                style={{
                  ...inputStyle,
                  borderColor: categoryError ? 'var(--deep-red)' : '#ddd',
                  color: category ? 'var(--charcoal)' : '#999',
                }}
              >
                <option value="" disabled>Select a category</option>
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {categoryError && <p style={errorStyle}>{categoryError}</p>}
            </div>

            {/* Collaboration Interest */}
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ ...labelStyle, marginBottom: '0.75rem' }}>
                Are you interested in working with Mandate4 to combat democratic containment in Nigeria?
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[true, false].map((val) => (
                  <label
                    key={String(val)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      border: `2px solid ${collaborationInterest === val ? 'var(--emerald)' : '#ddd'}`,
                      background: collaborationInterest === val ? 'rgba(0, 135, 81, 0.06)' : 'white',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      transition: 'all 0.2s',
                      flex: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <input
                      type="radio"
                      name="collaboration"
                      value={String(val)}
                      checked={collaborationInterest === val}
                      onChange={() => {
                        setCollaborationInterest(val)
                        setTouched((t) => ({ ...t, collaboration: true }))
                      }}
                      style={{ accentColor: 'var(--emerald)' }}
                    />
                    {val ? 'Yes' : 'No'}
                  </label>
                ))}
              </div>
              {collaborationError && <p style={errorStyle}>{collaborationError}</p>}
            </div>

            {/* Server error */}
            {status === 'error' && (
              <div style={{
                background: 'rgba(200, 16, 46, 0.08)',
                border: '1px solid var(--deep-red)',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                marginBottom: '1.25rem',
              }}>
                <p style={{ color: 'var(--deep-red)', fontSize: '0.9rem', margin: 0 }}>
                  {errorMessage}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid || status === 'submitting'}
              style={{
                width: '100%',
                padding: '1.1rem',
                background: isFormValid ? 'var(--emerald)' : '#ccc',
                color: isFormValid ? 'white' : '#888',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.05rem',
                fontWeight: 700,
                cursor: isFormValid && status !== 'submitting' ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: isFormValid ? '0 4px 15px rgba(0, 135, 81, 0.3)' : 'none',
                opacity: status === 'submitting' ? 0.7 : 1,
              }}
            >
              {status === 'submitting' ? 'Sending Report...' : 'Send Report to My Email'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.9rem',
  fontWeight: 700,
  color: 'var(--charcoal)',
  marginBottom: '0.4rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.85rem 1rem',
  fontSize: '1rem',
  border: '2px solid #ddd',
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
  background: 'white',
}

const errorStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  color: 'var(--deep-red)',
  marginTop: '0.35rem',
}
