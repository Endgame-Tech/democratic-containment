import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-main">
          <h3>Democratic Containment</h3>
          <p>An analytical framework examining how entrenched elite actors capture democratic institutions and deliberately deny citizens the power to determine their political future.</p>
          <p style={{ fontSize: '0.85rem', marginBottom: '0' }}>A Mandate 4 Working Paper · April 2026</p>
        </div>
        
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><Link href="/key-findings">Key Findings</Link></li>
            <li><Link href="/download">Download Report (PDF)</Link></li>
            <li><a href="#">Share This Report</a></li>
            <li><a href="#">Citation Guide</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Mandate 4</h4>
          <ul>
            <li><a href="https://mandate4.org">About</a></li>
            <li><a href="https://mandate4.org/research">Research</a></li>
            <li><a href="mailto:research@mandate4.org">Contact</a></li>
            <li><a href="#">Partnership Inquiry</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Mandate 4. CC BY-NC-SA 4.0</p>
        <div className="footer-social">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="mailto:research@mandate4.org">Email</a>
        </div>
      </div>
    </footer>
  )
}
