'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Enhanced navigation scroll effect
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Email Invite Form Handler
    const inviteForm = document.getElementById('inviteForm') as HTMLFormElement | null
    if (inviteForm) {
      inviteForm.addEventListener('submit', function(e) {
        e.preventDefault()
        
        const friendEmail = (document.getElementById('friendEmail') as HTMLInputElement)?.value
        const yourName = (document.getElementById('yourName') as HTMLInputElement)?.value
        const personalMessage = (document.getElementById('personalMessage') as HTMLTextAreaElement)?.value
        
        // Construct email
        const subject = encodeURIComponent(`${yourName} invited you to read: Democratic Containment`)
        const defaultMessage = `I thought you'd find this analytical framework valuable. It's a new report that names and maps the system holding Nigeria's democracy in place — and the specific strategies that can break it.`
        const body = encodeURIComponent(`Hi,

${personalMessage || defaultMessage}

Read the report here: https://mandate4.org/democratic-containment

Democratic Containment: The Architecture of Managed Democracy
A 59-page analytical framework by Mandate 4

Best regards,
${yourName}`)
        
        // Open email client
        window.location.href = `mailto:${friendEmail}?subject=${subject}&body=${body}`
        
        // Show success message
        const status = document.getElementById('inviteStatus')
        if (status) {
          status.style.display = 'block'
          status.style.color = 'var(--emerald)'
          status.innerHTML = '✓ Email invitation opened in your email client. Please send it to complete the invitation.'
          
          // Reset form after a delay
          setTimeout(() => {
            inviteForm.reset()
            status.style.display = 'none'
          }, 5000)
        }
      })
    }

    // Make functions globally available
    (window as any).showHome = () => {
      const home = document.getElementById('home')
      if (home) home.classList.add('active')
      document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'))
      window.scrollTo(0, 0)
    }

    (window as any).showPage = (pageId: string) => {
      const home = document.getElementById('home')
      if (home) home.classList.remove('active')
      document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'))
      const page = document.getElementById(pageId)
      if (page) page.classList.add('active')
      window.scrollTo(0, 0)
    }

    (window as any).copyLink = () => {
      const linkInput = document.getElementById('reportLink') as HTMLInputElement
      if (linkInput) {
        linkInput.select()
        linkInput.setSelectionRange(0, 99999)
        
        navigator.clipboard.writeText(linkInput.value).then(() => {
          const status = document.getElementById('copyStatus')
          if (status) {
            status.style.display = 'block'
            setTimeout(() => {
              status.style.display = 'none'
            }, 3000)
          }
        })
      }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        if (this.getAttribute('onclick')) return
        e.preventDefault()
        const href = this.getAttribute('href')
        if (href) {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
