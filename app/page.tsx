'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <>
<div id="home" className="page active">
  <section className="hero">
    <div className="hero-content">
      <h1>
        Why Nothing Changes in 
        <span>Nigerian Democracy</span>
      </h1>
      <p className="subtitle">
        Not corruption. Not culture. Not apathy. <strong>Democratic Containment.</strong> The deliberate architecture that absorbs protest, manages elections, and blocks reform—while keeping the system stable enough to survive.
      </p>
      <div className="hero-cta">
        <Link href="/key-findings" className="cta-primary">Key Findings</Link>
        <Link href="/download" className="cta-secondary">Download Report</Link>
      </div>
    </div>
  </section>

  {/* DEMOCRATIC CONTAINMENT CONCEPT SECTION */}
  <section style={{ background: 'linear-gradient(135deg, var(--forest-green) 0%, var(--emerald) 100%)', padding: '4rem 1.5rem', margin: '0', position: 'relative', overflow: 'hidden' }}>
    {/* Background pattern */}
    <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: '0.05', background: 'url(\'data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2060%200%20L%200%200%200%2060%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%221%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%2260%22%20height%3D%2260%22%20fill%3D%22url(%2523grid)%22%2F%3E%3C%2Fsvg%3E\')', pointerEvents: 'none' }}></div>
    
    <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: '1' }}>
      {/* New Concept Badge */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--warm-black)', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(255, 184, 28, 0.4)' }}>
          ⚡ New Analytical Framework
        </span>
      </div>

      {/* Main Heading */}
      <h2 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '900', color: 'white', textAlign: 'center', lineHeight: '1.1', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
        Democratic Containment
      </h2>

      {/* Subheading */}
      <p style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'rgba(255,255,255,0.95)', textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem', lineHeight: '1.6', fontWeight: '500' }}>
        The name for what you've been feeling but couldn't define
      </p>

      {/* Core Definition Box */}
      <div style={{ background: 'rgba(255, 255, 255, 0.98)', borderRadius: '16px', padding: '2rem 1.5rem', maxWidth: '1000px', margin: '0 auto 2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', borderLeft: '8px solid var(--gold)' }}>
        <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', lineHeight: '1.8', color: 'var(--charcoal)', marginBottom: '0', fontWeight: '500', fontStyle: 'italic' }}>
          "The intentional structuring of political, economic, and social institutions to limit citizens' ability to convert collective will into real power and durable outcomes. It is not the abolition of democracy—it is the sustained <em style={{ color: 'var(--emerald)', fontWeight: '700' }}>management</em> of democracy so that its most threatening implications are neutralized before they take effect."
        </p>
      </div>

      {/* Three Key Insights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', fontFamily: '\'Fraunces\', serif' }}>Not Broken. Contained.</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', margin: '0', fontSize: '1.05rem' }}>
            What looks like chaos is actually a stable equilibrium engineered to absorb pressure without permitting transformation.
          </p>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', fontFamily: '\'Fraunces\', serif' }}>Designed, Not Accidental</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', margin: '0', fontSize: '1.05rem' }}>
            Seven interconnected mechanisms work together to ensure participation without power, reform without change.
          </p>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', fontFamily: '\'Fraunces\', serif' }}>A New Framework</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', margin: '0', fontSize: '1.05rem' }}>
            This report introduces the concept of democratic containment as a distinct analytical category—different from authoritarianism, different from state capture.
          </p>
        </div>
      </div>

      {/* Why This Matters */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'white', lineHeight: '1.8', marginBottom: '2rem', fontWeight: '500' }}>
          You can't dismantle what you can't name. <strong style={{ color: 'var(--gold)' }}>Democratic containment</strong> gives us the language to describe the system—and the blueprint to break it.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/key-findings" style={{ background: 'var(--gold)', color: 'var(--warm-black)', padding: '1.2rem 3rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 6px 25px rgba(255, 184, 28, 0.5)', transition: 'all 0.3s', display: 'inline-block', fontSize: '1rem' }}>
            Understand the Framework
          </Link>
          <a href="#audiences" style={{ background: 'transparent', color: 'white', padding: '1.2rem 3rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', border: '3px solid white', transition: 'all 0.3s', display: 'inline-block', fontSize: '1rem' }}>
            Find Your Role
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* REPORT SHOWCASE SECTION */}
  <section className="report-showcase">
    <div className="showcase-container">
      <div className="showcase-content">
        <div className="showcase-text">
          <span className="showcase-tag">NEW REPORT · APRIL 2026</span>
          <h2>The System Has a Name.<br />Now We Have the Blueprint to Break It.</h2>
          <p>
            59 pages of rigorous analysis mapping the seven mechanisms, eleven-actor ecosystem, and constitutional architecture that power democratic containment in Nigeria—and the nine counter-systemic strategies that dismantle it.
          </p>
          <div className="showcase-stats">
            <div className="stat">
              <div className="stat-number">7</div>
              <div className="stat-label">Containment Mechanisms</div>
            </div>
            <div className="stat">
              <div className="stat-number">11</div>
              <div className="stat-label">Actor Ecosystem</div>
            </div>
            <div className="stat">
              <div className="stat-number">9</div>
              <div className="stat-label">Counter-Systemic Strategies</div>
            </div>
            <div className="stat">
              <div className="stat-number">24</div>
              <div className="stat-label">Month Pressure Framework</div>
            </div>
          </div>
          <Link href="/key-findings" className="showcase-cta">View Report Key Findings</Link>
        </div>
        
        <div className="showcase-visual">
          <div className="report-preview">
            <img src="/images/report-cover.jpg" alt="Democratic Containment Report Cover" className="report-cover-image" />
            
            {/* Background democratic imagery */}
            <div className="democracy-symbols">
              <div className="symbol ballot-box">🗳️</div>
              <div className="symbol fist">✊🏾</div>
              <div className="symbol megaphone">📢</div>
              <div className="symbol scales">⚖️</div>
              <div className="symbol people">👥</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* NEW POWERFUL SECTION: Why Your Efforts Struggle */}
  <section style={{ background: 'var(--ivory)', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: '1' }}>
      
      {/* Main Question */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '800', color: 'var(--charcoal)', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          Why Your Efforts to Change Nigeria<br/>
          <span style={{ color: 'var(--emerald)' }}>Struggle to Materialise</span>
        </h2>
        <p style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', color: 'var(--slate)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', fontWeight: '400' }}>
          You've protested. You've voted. You've organized. You've demanded reform.<br/>
          <strong style={{ color: 'var(--charcoal)' }}>Nothing fundamental changes. Why?</strong>
        </p>
      </div>

      {/* The Answer Box */}
      <div style={{ background: 'linear-gradient(135deg, var(--forest-green) 0%, var(--emerald) 100%)', borderRadius: '16px', padding: '3rem 2rem', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 135, 81, 0.25)' }}>
        
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 184, 28, 0.2) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
        
        <div style={{ position: 'relative', zIndex: '1' }}>
          {/* Badge */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--warm-black)', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(255, 184, 28, 0.5)' }}>
              🔍 A New Framework
            </span>
          </div>

          {/* Main Content */}
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '700', color: 'white', textAlign: 'center', lineHeight: '1.2', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            Democratic Containment
          </h3>
          
          <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', color: 'rgba(255, 255, 255, 0.95)', textAlign: 'center', lineHeight: '1.8', marginBottom: '3rem', fontWeight: '400' }}>
            An analytical framework that examines how <strong style={{ fontWeight: '700' }}>entrenched elite actors capture democratic institutions</strong> and deliberately deny citizens the power to determine their political future.
          </p>

          {/* Three Key Points */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎭</div>
              <h4 style={{ color: 'var(--gold)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', fontFamily: '\'Fraunces\', serif' }}>Not Corruption</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0' }}>
                The system isn't broken—it's working exactly as designed to absorb pressure without transformation.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
              <h4 style={{ color: 'var(--gold)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', fontFamily: '\'Fraunces\', serif' }}>Not Culture</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0' }}>
                Seven interconnected mechanisms engineered to give you participation without power.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
              <h4 style={{ color: 'var(--gold)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', fontFamily: '\'Fraunces\', serif' }}>Not Apathy</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0' }}>
                Understanding the architecture is the first step to dismantling it strategically.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/key-findings" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'white', color: 'var(--forest-green)', padding: '1.25rem 3rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s ease' }} onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 30px rgba(0, 0, 0, 0.4)'; }} onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 20px rgba(0, 0, 0, 0.3)'; }}>
              Explore the Framework
              <span style={{ fontSize: '1.25rem' }}>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Subtitle below */}
      <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.05rem', color: 'var(--slate)', fontStyle: 'italic' }}>
        This paper names what you've been feeling. Now you can fight it.
      </p>
    </div>
  </section>

  <section className="audience-grid" id="audiences">
    <h2 className="section-title">This Report Is For You</h2>
    <p className="section-subtitle">Find yourself in the story. Understand why your efforts haven't worked. Learn what actually breaks the system.</p>
    
    <div className="grid">
      <Link href="/audiences/endsars" className="audience-card">
        <h3>#EndSARS Protesters</h3>
        <p className="hook">
          If you risked everything at Lekki Tollgate and watched the movement collapse into "judicial panels" that changed nothing—this report explains why.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/voters" className="audience-card">
        <h3>2023 Voters</h3>
        <p className="hook">
          You queued for hours. You watched them rig it in real-time. You tweeted the evidence. Nothing happened. This report shows you the architecture of managed democracy and what it actually takes to break it.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/reformers" className="audience-card">
        <h3>Electoral Reform Advocates</h3>
        <p className="hook">
          You've drafted bills. Testified before NASS. Built coalitions. Watched reforms get watered down, delayed, or abandoned. This report explains why reform-from-within keeps losing.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/donors" className="audience-card">
        <h3>International Donors</h3>
        <p className="hook">
          You've invested hundreds of millions of dollars in Nigerian democracy programs since 2015. Turnout is down. Violence is up. This report shows you what you're actually paying for and why the theory of change needs to change.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/civilsociety" className="audience-card">
        <h3>Civil Society Leaders</h3>
        <p className="hook">
          You've built the credible coalitions. Documented the violations. Advocated the policies. And you're exhausted because nothing structural changes. This report explains why the math doesn't work.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/diaspora" className="audience-card">
        <h3>Nigerian Diaspora</h3>
        <p className="hook">
          You left because "nothing works." You send remittances. You wonder why 60 years post-independence, basic governance still fails. This isn't corruption or culture—it's democratic containment.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/youth" className="audience-card">
        <h3>Young Nigerians (18-35)</h3>
        <p className="hook">
          You don't vote because "it doesn't matter anyway." You're not wrong—you're responding rationally to a system designed to make your participation irrelevant. But containment only works if you stay out.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/journalists" className="audience-card">
        <h3>Journalists & Media</h3>
        <p className="hook">
          You've covered every scandal. Broken every story. Published every exposé. And watched the news cycle move on while the system stays the same. This report explains why great journalism inside a containment system doesn't produce accountability.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/academics" className="audience-card">
        <h3>Political Scientists & Academics</h3>
        <p className="hook">
          Your conferences discuss "democratic backsliding." Your frameworks explain the symptoms. But Nigerian democracy isn't sliding—it was built contained. This report reframes the entire analytical problem.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/political-class" className="audience-card">
        <h3>Values-Based Political Class</h3>
        <p className="hook">
          You entered politics to serve. You've watched good people get absorbed, compromise their values, or burn out. This report explains why the system converts reformers into participants—and what it takes to govern differently.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/business-leaders" className="audience-card">
        <h3>Business Leaders & Private Sector</h3>
        <p className="hook">
          You navigate the dysfunction. Pay the rents. Price in the risk. Wonder why an economy this large stays this fragile. This report explains the political settlement that blocks the market-building reforms you need.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/religious-leaders" className="audience-card">
        <h3>Religious & Community Leaders</h3>
        <p className="hook">
          Your congregations and communities look to you for moral leadership. Some of your peers have been captured by patronage. This report shows how faith leadership can be a force for accountability instead of co-option.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>

      <Link href="/audiences/students-educators" className="audience-card">
        <h3>Students & Educators</h3>
        <p className="hook">
          You're preparing the next generation for citizenship in a broken system. This report gives you the analytical framework to teach them what they're actually up against—and how to build what comes next.
        </p>
        <span className="cta-link">Read more →</span>
      </Link>
    </div>
  </section>

  {/* ABOUT MANDATE4 SECTION */}
  <section className="about-mandate4">
    <div className="about-container">
      <div className="about-content">
        <div className="about-logo">
          <img src="/images/mandate4-logo.jpg" alt="Mandate 4" className="about-logo-img" />
        </div>
        
        <h2>About Mandate 4</h2>
        <p className="about-lead">A nation-building civic startup on a mission to elevate the quality of politics, strengthen democracy, ensure accountability, and unlock Africa's potential—starting with Nigeria.</p>
        
        <div className="about-mission">
          <p>We work toward a democratic space that consistently meets the expectations and aspirations of citizens, and a continent where governance works, institutions deliver, and prosperity is shared.</p>
          <p>This report is a product of Mandate 4's <strong>Political Research and Civic Strategy Unit</strong>—analytical work designed to inform strategy, build counter-power, and support the critical mass of engaged stakeholders required for democratic transformation.</p>
        </div>
        
        <div className="about-cta-group">
          <a href="https://mandate4.org" target="_blank" className="about-link">Visit Mandate4.org →</a>
          <a href="mailto:research@mandate4.org" className="about-link">research@mandate4.org</a>
        </div>
      </div>
    </div>
  </section>
</div>

{/* SHARE SECTION */}
<section style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)', padding: '4rem 1.5rem', borderTop: '1px solid #e5e5e5' }}>
  <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
    <h2 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: 'var(--charcoal)', marginBottom: '1rem' }}>
      Share This Report
    </h2>
    <p style={{ fontSize: '1.15rem', color: '#555', marginBottom: '3rem', lineHeight: '1.7' }}>
      Democratic transformation requires critical mass. Help others understand the system by sharing this framework.
    </p>

    {/* Email Invite Section */}
    <div style={{ background: 'white', borderRadius: '12px', padding: '2rem 1.5rem', marginBottom: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--emerald)' }}>
      <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.5rem', fontWeight: '700', color: 'var(--emerald)', marginBottom: '1rem' }}>
        ✉️ Invite Someone to Read
      </h3>
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
        Send a personal invitation to someone who needs to understand democratic containment
      </p>
      
      <form id="inviteForm" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input 
            type="email" 
            id="friendEmail" 
            placeholder="Friend's email address" 
            required
            style={{ flex: '1', minWidth: '250px', padding: '1rem 1.5rem', border: '2px solid #e5e5e5', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s' }}
            onFocus={(e: React.FocusEvent<HTMLElement>) => { e.currentTarget.style.borderColor='var(--emerald)'; }}
            onBlur={(e: React.FocusEvent<HTMLElement>) => { e.currentTarget.style.borderColor='#e5e5e5'; }}
          />
          <input 
            type="text" 
            id="yourName" 
            placeholder="Your name" 
            required
            style={{ flex: '1', minWidth: '200px', padding: '1rem 1.5rem', border: '2px solid #e5e5e5', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s' }}
            onFocus={(e: React.FocusEvent<HTMLElement>) => { e.currentTarget.style.borderColor='var(--emerald)'; }}
            onBlur={(e: React.FocusEvent<HTMLElement>) => { e.currentTarget.style.borderColor='#e5e5e5'; }}
          />
        </div>
        <textarea 
          id="personalMessage" 
          placeholder="Add a personal message (optional)"
          rows={3}
          style={{ padding: '1rem 1.5rem', border: '2px solid #e5e5e5', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical', transition: 'border-color 0.3s' }}
          onFocus={(e: React.FocusEvent<HTMLElement>) => { e.currentTarget.style.borderColor='var(--emerald)'; }}
          onBlur={(e: React.FocusEvent<HTMLElement>) => { e.currentTarget.style.borderColor='#e5e5e5'; }}
        ></textarea>
        <button 
          type="submit"
          style={{ background: 'var(--emerald)', color: 'white', padding: '1.2rem 2.5rem', border: 'none', borderRadius: '50px', fontSize: '1.05rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(0, 135, 81, 0.3)' }}
          onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.background='var(--forest-green)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 6px 25px rgba(0, 135, 81, 0.4)'; }}
          onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.background='var(--emerald)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 15px rgba(0, 135, 81, 0.3)'; }}
        >
          Send Invitation
        </button>
      </form>
      <div id="inviteStatus" style={{ marginTop: '1rem', fontSize: '0.95rem', display: 'none' }}></div>
    </div>

    {/* Social Media Share Section */}
    <div style={{ background: 'white', borderRadius: '12px', padding: '2rem 1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--gold)' }}>
      <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.5rem', fontWeight: '700', color: 'var(--amber)', marginBottom: '1rem' }}>
        📱 Share on Social Media
      </h3>
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
        Spread the framework across your networks
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Twitter Share */}
        <a 
          href="https://twitter.com/intent/tweet?text=Democratic%20Containment%3A%20The%20system%20has%20a%20name.%20Now%20we%20have%20the%20blueprint%20to%20break%20it.%20Read%20this%20new%20analytical%20framework%20on%20Nigeria%27s%20managed%20democracy.&url=https://mandate4.org/democratic-containment" 
          target="_blank"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#1DA1F2', color: 'white', padding: '1rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(29, 161, 242, 0.3)' }}
          onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 25px rgba(29, 161, 242, 0.5)'; }}
          onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 15px rgba(29, 161, 242, 0.3)'; }}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          Share on Twitter
        </a>

        {/* LinkedIn Share */}
        <a 
          href="https://www.linkedin.com/sharing/share-offsite/?url=https://mandate4.org/democratic-containment" 
          target="_blank"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#0A66C2', color: 'white', padding: '1rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(10, 102, 194, 0.3)' }}
          onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 25px rgba(10, 102, 194, 0.5)'; }}
          onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 15px rgba(10, 102, 194, 0.3)'; }}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          Share on LinkedIn
        </a>

        {/* Facebook Share */}
        <a 
          href="https://www.facebook.com/sharer/sharer.php?u=https://mandate4.org/democratic-containment" 
          target="_blank"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#1877F2', color: 'white', padding: '1rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(24, 119, 242, 0.3)' }}
          onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 25px rgba(24, 119, 242, 0.5)'; }}
          onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 15px rgba(24, 119, 242, 0.3)'; }}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Share on Facebook
        </a>

        {/* WhatsApp Share */}
        <a 
          href="https://wa.me/?text=Democratic%20Containment%3A%20The%20system%20has%20a%20name.%20Now%20we%20have%20the%20blueprint%20to%20break%20it.%20https://mandate4.org/democratic-containment" 
          target="_blank"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#25D366', color: 'white', padding: '1rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)' }}
          onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 25px rgba(37, 211, 102, 0.5)'; }}
          onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 15px rgba(37, 211, 102, 0.3)'; }}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Share on WhatsApp
        </a>
      </div>

      {/* Copy Link */}
      <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5' }}>
        <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem' }}>Or copy the link:</p>
        <div style={{ display: 'flex', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          <input 
            type="text" 
            id="reportLink" 
            value="https://mandate4.org/democratic-containment" 
            readOnly
            style={{ flex: '1', padding: '0.85rem 1.25rem', border: '2px solid #e5e5e5', borderRadius: '8px', fontSize: '0.95rem', background: '#f8f9fa' }}
          />
          <button 
            onClick={() => { (window as any).copyLink(); }}
            style={{ background: 'var(--charcoal)', color: 'white', padding: '0.85rem 2rem', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s', whiteSpace: 'nowrap' }}
            onMouseOver={(e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.background='#000'; }}
            onMouseOut={(e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.background='var(--charcoal)'; }}
          >
            Copy Link
          </button>
        </div>
        <div id="copyStatus" style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--emerald)', display: 'none' }}>✓ Link copied to clipboard!</div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
