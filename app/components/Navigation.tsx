'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import './navigation.css'

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('click', handleClick)
    }
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 1px 12px rgba(0,0,0,0.04)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0.9rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/images/mandate4-logo.jpg" alt="Mandate 4" style={{ height: '40px', width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          <Link href="/" style={{ textDecoration: 'none', color: pathname === '/' ? 'var(--emerald)' : '#333', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Home</Link>
          <Link href="/key-findings" style={{ textDecoration: 'none', color: pathname === '/key-findings' ? 'var(--emerald)' : '#333', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Key Findings</Link>
          <Link href="/#audiences" style={{ textDecoration: 'none', color: '#333', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Audiences</Link>
        </nav>

        <Link
          href="/download"
          className="nav-cta-desktop"
          style={{ background: 'var(--gold)', color: 'var(--warm-black)', padding: '0.75rem 1.75rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', boxShadow: '0 4px 15px rgba(255,184,28,0.3)' }}
        >
          Download Report
        </Link>

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span style={{ display: 'block', width: '24px', height: '2.5px', background: '#333', borderRadius: '2px', transition: 'all 0.3s ease', transform: menuOpen ? 'translateY(7.5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2.5px', background: '#333', borderRadius: '2px', transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2.5px', background: '#333', borderRadius: '2px', transition: 'all 0.3s ease', transform: menuOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '1rem 2rem', textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: 600, borderBottom: '1px solid #f0f0f0' }}>Home</Link>
        <Link href="/key-findings" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '1rem 2rem', textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: 600, borderBottom: '1px solid #f0f0f0' }}>Key Findings</Link>
        <Link href="/#audiences" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '1rem 2rem', textDecoration: 'none', color: '#333', fontSize: '1rem', fontWeight: 600, borderBottom: '1px solid #f0f0f0' }}>Audiences</Link>
        <Link href="/download" onClick={() => setMenuOpen(false)} style={{ display: 'block', margin: '1rem 2rem', padding: '0.9rem 2rem', background: 'var(--gold)', color: 'var(--warm-black)', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '0.5px' }}>Download Report</Link>
      </div>
    </header>
  )
}
