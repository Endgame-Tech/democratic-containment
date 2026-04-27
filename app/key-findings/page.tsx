'use client'

import Link from 'next/link'

export default function KeyFindingsPage() {
  return (
    <div className="findings-page">
  <Link href="/" className="back-btn">Back to Home</Link>
  
  <div className="findings-hero">
    <h1>Democracy Is Not Broken.<br />It Is Contained.</h1>
    <p className="findings-lead">
      Democratic containment is the systematic engineering of democratic procedures so that their transformative potential is reliably neutralized. Elections happen, institutions function, civil society operates—and power remains structurally undisturbed.
    </p>
  </div>

  <div className="introduction-section">
    <div className="intro-text">
      <p className="intro-opening">You can feel it.</p>
      <p>You know something is wrong—but it is difficult to name.</p>
      <p>Some call it Nigeria's drift towards a one-party state. Others describe it as citizen fatigue and disengagement after years of broken promises. Some see it as the rise of civilian authoritarianism—leaders who rule indefinitely, directly or by proxy, under the guise of democracy.</p>
      <p className="intro-insight"><strong>But these are symptoms, not the system.</strong></p>
      <p className="intro-conclusion">We call it <span className="highlight-term">Democratic Containment</span>.</p>
    </div>
  </div>

  {/* Framework Introduction Section */}
  <section style={{ background: 'linear-gradient(135deg, rgba(13, 92, 61, 0.95) 0%, rgba(0, 135, 81, 0.9) 100%)', padding: '5rem 2rem', margin: '4rem 0', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
    {/* Background pattern */}
    <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: '0.05', background: 'url(\'data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid-kf%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2060%200%20L%200%200%200%2060%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%221%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%2260%22%20height%3D%2260%22%20fill%3D%22url(%2523grid-kf)%22%2F%3E%3C%2Fsvg%3E\')', pointerEvents: 'none' }}></div>
    
    <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: '1' }}>
      {/* New Concept Badge */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--warm-black)', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(255, 184, 28, 0.4)' }}>
          🔍 Core Framework
        </span>
      </div>

      {/* Main Heading */}
      <h2 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '900', color: 'white', textAlign: 'center', lineHeight: '1.1', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
        What is Democratic Containment?
      </h2>

      {/* Subheading */}
      <p style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', color: 'rgba(255,255,255,0.95)', textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem', lineHeight: '1.6', fontWeight: '500' }}>
        A condition where democracy's form persists while its substance is systematically denied
      </p>

      {/* Core Definition Box */}
      <div style={{ background: 'rgba(255, 255, 255, 0.98)', borderRadius: '16px', padding: '3rem', maxWidth: '1000px', margin: '0 auto 3rem', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', borderLeft: '8px solid var(--gold)' }}>
        <div style={{ fontFamily: '\'DM Sans\', sans-serif', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--emerald)', fontWeight: '700', marginBottom: '1rem' }}>CORE DEFINITION</div>
        <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', lineHeight: '1.8', color: 'var(--charcoal)', marginBottom: '0', fontWeight: '500', fontStyle: 'italic' }}>
          Democratic containment is the <strong style={{ color: 'var(--emerald)' }}>intentional structuring</strong> of political, economic, and social institutions to limit citizens' ability to convert collective will into real power and durable outcomes. It is not the abolition of democracy—it is the sustained <em style={{ color: 'var(--emerald)', fontWeight: '700' }}>management</em> of democracy so that its most threatening implications are neutralized before they take effect.
        </p>
      </div>

      {/* Three Key Insights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
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
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💪</div>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', fontFamily: '\'Fraunces\', serif' }}>Breakable Through Pressure</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', margin: '0', fontSize: '1.05rem' }}>
            Sustained, multi-front citizen pressure is the precondition for all structural change—and the one thing the system cannot absorb.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="symptoms-section">
    <h2 style={{ textAlign: 'center' }}>Symptoms of Democratic Containment</h2>
    <p className="section-intro">Democratic containment does not announce itself. It reveals itself through persistent patterns—recurring features of political life that individually might be explained away, but in aggregate describe a coherent and designed system.</p>
    
    <div className="symptoms-grid">
      <div className="symptom-card">
        <div className="symptom-number" style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3rem', fontWeight: '700', color: 'rgba(0, 135, 81, 0.15)', lineHeight: '1', marginBottom: '0.5rem' }}>01</div>
        <div className="symptom-icon">🗳️</div>
        <h3>Participation Without Power</h3>
        <p>Citizens vote, protest, petition, and engage across all available channels of civic participation—yet political outcomes remain remarkably stable across cycles of mobilization. The efforts are real; the effects are absorbed.</p>
        <div className="symptom-example">
          <strong>NIGERIA, 2023:</strong> The highest-ever deployment of civic technology (BVAS, IReV) produced the lowest voter turnout since 1999—just 26.72%. Official results were announced under contested circumstances. The tools worked; the system absorbed them.
        </div>
      </div>

      <div className="symptom-card">
        <div className="symptom-number" style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3rem', fontWeight: '700', color: 'rgba(0, 135, 81, 0.15)', lineHeight: '1', marginBottom: '0.5rem' }}>02</div>
        <div className="symptom-icon">🎭</div>
        <h3>Cycles of Hope and Disillusionment</h3>
        <p>Moments of exceptional civic energy are followed, reliably, by collapse into apathy. These cycles are not accidents of political psychology. They are predictable products of a system designed to exhaust citizen energy without yielding structural change.</p>
        <div className="symptom-example">
          <strong>NIGERIA, 2020 — #ENDSARS:</strong> One of the most significant spontaneous civic mobilizations in Nigerian history. Within weeks of Lekki, the movement had fragmented. No structural reform of the security apparatus followed. No officer was prosecuted. The energy was real; the outcome confirmed the pattern.
        </div>
      </div>

      <div className="symptom-card">
        <div className="symptom-number" style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3rem', fontWeight: '700', color: 'rgba(0, 135, 81, 0.15)', lineHeight: '1', marginBottom: '0.5rem' }}>03</div>
        <div className="symptom-icon">⚔️</div>
        <h3>Fragmented and Neutralized Opposition</h3>
        <p>Opposition forces exist in sufficient number to satisfy democratic form, but are prevented through strategic division, co-option, and selective institutional pressure from accumulating the coherent power that could actually threaten the governing equilibrium.</p>
        <div className="symptom-example">
          <strong>2022-2026:</strong> ADC remains locked in severe internal convulsions. Labour Party subjected to sustained post-election destabilization. PDP consumed by leadership disputes. The registration process for genuinely new parties is calibrated to advantage established parties with existing machinery.
        </div>
      </div>

      <div className="symptom-card">
        <div className="symptom-number" style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3rem', fontWeight: '700', color: 'rgba(0, 135, 81, 0.15)', lineHeight: '1', marginBottom: '0.5rem' }}>04</div>
        <div className="symptom-icon">⚖️</div>
        <h3>Institutional Performance Without Accountability</h3>
        <p>Courts hear cases; they simply resolve the consequential ones in ways that protect those in power. Electoral commissions administer elections; they administer them in ways that limit competitive threat. Institutions perform their functions visibly—except in precisely the moments when accountability would be most consequential.</p>
      </div>

      <div className="symptom-card">
        <div className="symptom-number" style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3rem', fontWeight: '700', color: 'rgba(0, 135, 81, 0.15)', lineHeight: '1', marginBottom: '0.5rem' }}>05</div>
        <div className="symptom-icon">📋</div>
        <h3>Electoral Reform as Managed Performance</h3>
        <p>Following each contested election cycle, reform processes are initiated, legislation is debated, civil society is consulted, and amendments are passed—calibrated to appear responsive while preserving every mechanism of incumbency advantage that structurally matters.</p>
        <div className="symptom-example">
          <strong>2022 ELECTORAL ACT:</strong> Significant procedural improvements (BVAS, electronic transmission, early primaries). Did not meaningfully alter the structural mechanisms of political engineering (petition timeline, INEC autonomy, result manipulation incentives)—and the 2023 elections demonstrated precisely that.
        </div>
      </div>

      <div className="symptom-card">
        <div className="symptom-number" style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3rem', fontWeight: '700', color: 'rgba(0, 135, 81, 0.15)', lineHeight: '1', marginBottom: '0.5rem' }}>06</div>
        <div className="symptom-icon">💡</div>
        <h3>Persistent Policy Failure Without Political Cost</h3>
        <p>In a functioning democracy, policy failure eventually produces electoral punishment. In a contained democracy, the mechanisms that should translate citizen experience into political consequence are themselves neutralized.</p>
        <div className="symptom-example">
          <strong>ELECTRICITY SECTOR:</strong> Despite billions in investment and World Bank loans since 1999—including ₦2.3 trillion from CBN and a €2.3 billion Siemens contract—available generation capacity actually decreased by 15% between 2020 and 2025. Not one administration has faced meaningful electoral consequence.
        </div>
      </div>

      <div className="symptom-card">
        <div className="symptom-number" style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3rem', fontWeight: '700', color: 'rgba(0, 135, 81, 0.15)', lineHeight: '1', marginBottom: '0.5rem' }}>07</div>
        <div className="symptom-icon">🌫️</div>
        <h3>Normalization of Dysfunction</h3>
        <p>After enough cycles of failed mobilization and unmet expectation, citizens revise their prior beliefs about what democratic governance can deliver. The acceptance of dysfunction as the natural condition of governance is not a cultural failing—it is a produced outcome of sustained containment.</p>
      </div>

      <div className="symptom-card">
        <div className="symptom-number" style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3rem', fontWeight: '700', color: 'rgba(0, 135, 81, 0.15)', lineHeight: '1', marginBottom: '0.5rem' }}>08</div>
        <div className="symptom-icon">✈️</div>
        <h3>Migration as the Dominant Exit Strategy</h3>
        <p>When internal change appears systematically impossible, the most capable and resourced citizens choose exit. Nigeria's "japa" wave has reached a scale that survey data now renders impossible to dismiss as anecdote.</p>
        <div className="symptom-example">
          <strong>AFROBAROMETER 2024:</strong> 56% of Nigerians have considered leaving the country—up 20 points since 2017. Among the most educated: 71%. Among youth 18-35: 60%. These are the numbers of a citizenry that has quietly concluded that exit is more rational than voice.
        </div>
      </div>
    </div>
  </section>

  <section className="mechanisms-section">
    <h2>Seven Layered Mechanisms</h2>
    <p className="section-intro">Democratic containment operates through interconnected mechanisms that create a system robust against single-point interventions.</p>
    
    <div className="mechanisms-grid">
      <div className="mechanism-card">
        <div className="mechanism-number">01</div>
        <h3>Political Engineering</h3>
        <p>Manipulation of electoral processes, timelines, and legal frameworks—executed in active collaboration with compromised actors embedded within electoral bodies, the judiciary, party structures, and legislative committees.</p>
      </div>

      <div className="mechanism-card">
        <div className="mechanism-number">02</div>
        <h3>Narrative Control</h3>
        <p>Media capture, information flooding with propaganda and noise, and the systematic reframing of failure as progress or as the inevitable result of external constraints beyond political control.</p>
      </div>

      <div className="mechanism-card">
        <div className="mechanism-number">03</div>
        <h3>Elite Co-option</h3>
        <p>Absorbing credible critics through appointments, contracts, or proximity to power—creating dependency structures that convert potential opponents into invested stakeholders in the system's continuation.</p>
      </div>

      <div className="mechanism-card">
        <div className="mechanism-number">04</div>
        <h3>Strategic Fragmentation</h3>
        <p>Actively encouraging division within opposition groups, movements, and civil society. The goal is not to defeat opposition but to ensure it never becomes coherent enough to accumulate critical mass.</p>
      </div>

      <div className="mechanism-card">
        <div className="mechanism-number">05</div>
        <h3>Institutional Weaponization</h3>
        <p>Courts, security agencies, and regulatory bodies deployed selectively against opponents—not through crude takeover but through the placement of reliable actors in key positions who exercise discretion in consistently asymmetric ways.</p>
      </div>

      <div className="mechanism-card">
        <div className="mechanism-number">06</div>
        <h3>Controlled Repression</h3>
        <p>Targeted intimidation, digital surveillance, and reputational attacks calibrated to induce compliance without provoking the backlash that mass repression would invite.</p>
      </div>

      <div className="mechanism-card">
        <div className="mechanism-number">07</div>
        <h3>Time Dilution</h3>
        <p>Endless committees, dialogues, and reform processes that consume advocate energy without producing structural outcomes—managed exhaustion rather than managed change.</p>
      </div>
    </div>
  </section>

  <section className="ecosystem-section">
    <h2>The Eleven-Actor Ecosystem</h2>
    <p className="section-intro">Democratic containment is powered by a rich and interlocking ecosystem of individuals, networks, and institutions, each playing a distinct role.</p>
    
    <div className="ecosystem-grid">
      <div className="actor-card">
        <div className="actor-icon">🎯</div>
        <h4>Political Operators</h4>
        <p>Specialists in result management, delegate procurement, and the technical choreography of contested outcomes.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">💰</div>
        <h4>Financiers</h4>
        <p>Political businessmen whose commercial survival is structurally dependent on political access.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">🏦</div>
        <h4>Money Intermediaries</h4>
        <p>Bankers and financial actors who enable the movement of funds from government coffers into private pockets.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">📋</div>
        <h4>Compromised Civil Servants</h4>
        <p>Career officials who collaborate with political principals to redirect national programmes toward partisan ends.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">⚖️</div>
        <h4>Captured Institutional Actors</h4>
        <p>Judicial, electoral, and security officials whose discretion consistently bends toward power.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">⚡</div>
        <h4>Coercion Networks</h4>
        <p>Security agencies, political thugs, and organised crime providing violence-for-hire.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">⛪</div>
        <h4>Sections of Religious Leadership</h4>
        <p>Faith leaders incorporated through state patronage who deliver congregational endorsements.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">📰</div>
        <h4>Captured Media</h4>
        <p>Media ownership concentrated in politically connected hands whose editorial positions reflect political relationships.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">💬</div>
        <h4>Digital Mercenaries</h4>
        <p>Contracted influencer networks that manufacture trends and flood information spaces.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">👑</div>
        <h4>Traditional Gatekeepers</h4>
        <p>Traditional rulers incorporated through financial allocations who mobilize communities for electoral purposes.</p>
      </div>

      <div className="actor-card">
        <div className="actor-icon">🌍</div>
        <h4>Diaspora Enablers</h4>
        <p>Foreign-registered companies and international facilitators enabling the round-tripping of public funds.</p>
      </div>
    </div>
  </section>

  <section className="asymmetry-section">
    <h2>The Core Asymmetry: Why Reform Efforts Fail</h2>
    <p className="section-intro">At the heart of democratic containment is a structural imbalance that explains the persistent failure of reform efforts, however energetic, well-resourced, or morally serious.</p>
    
    <div className="asymmetry-visual">
      <div className="asymmetry-comparison">
        <div className="comparison-label">THE IMBALANCE</div>
        
        <div className="comparison-sides">
          <div className="asymmetry-side system-side">
            <div className="side-header">
              <h3>The System</h3>
              <div className="side-subtitle">Containment Architecture</div>
            </div>
            <div className="traits-list">
              <span className="trait">Coordinated</span>
              <span className="trait">Strategic</span>
              <span className="trait">Sustained</span>
              <span className="trait">Networked</span>
              <span className="trait">Adaptive</span>
              <span className="trait">Persistent</span>
            </div>
          </div>
          
          <div className="asymmetry-side response-side">
            <div className="side-header">
              <h3>The Response</h3>
              <div className="side-subtitle">Reform Efforts</div>
            </div>
            <div className="traits-list">
              <span className="trait">Fragmented</span>
              <span className="trait">Reactive</span>
              <span className="trait">Temporary</span>
              <span className="trait">Siloed</span>
              <span className="trait">Episodic</span>
              <span className="trait">Donor-led</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="reform-failures">
      <h3>How Each Reform Actor Category Fails</h3>
      <p className="failures-intro">Each category of reform actor has its own structural failure mode—and each is, in different ways, instrumentalized by the containment ecosystem it seeks to challenge.</p>
      
      <div className="failure-accordion">
        <div className="failure-item">
          <div className="failure-header">
            <span className="failure-icon">🏛️</span>
            <h4>Opposition Parties</h4>
            <span className="failure-tag">The Structural Trap</span>
          </div>
          <div className="failure-content">
            <p><strong>The Pattern:</strong> Opposition parties face a structural trap: to contest power they must operate within a system whose rules are designed to prevent them from winning. Registration barriers, primary process manipulation, judicial exposure, and funding asymmetries all constrain their ability to build genuine challenge.</p>
            
            <p><strong>When They Break Through:</strong> The system's response is not to concede but to absorb—through post-election attrition, strategic defection offers, and the redirection of party energy into litigation that produces exhaustion rather than reform.</p>
            
            <p><strong>The Deeper Problem:</strong> Many opposition parties, once they acquire a foothold, begin to replicate the patronage and containment logic of incumbency rather than genuinely contest it. <em>The game changes the players faster than the players change the game.</em></p>
            
            <div className="case-example">
              <strong>CASE:</strong> The African Democratic Congress, Labour Party, and PDP crises (2022-2026). Each party capable of mounting a viable challenge has been subjected to the same cycle of destabilization—leadership disputes, defection campaigns, and litigation that diverts organizational energy from building electoral capacity.
            </div>
          </div>
        </div>

        <div className="failure-item">
          <div className="failure-header">
            <span className="failure-icon">🤝</span>
            <h4>Civil Society</h4>
            <span className="failure-tag">The Fire Brigade Paradox</span>
          </div>
          <div className="failure-content">
            <p><strong>The Contribution:</strong> Civil society in Nigeria has played an indispensable role—it has repeatedly and consistently helped prevent the complete breakdown of democratic governance. When elections have been most brazenly manipulated, civil society monitoring has created friction. When abuses have been most egregious, civil society documentation has created accountability pressure.</p>
            
            <p><strong>The Paradox:</strong> In performing this function, civil society has also—perhaps unintentionally—helped maintain the conditions in which democratic containment thrives. By preventing breakdown, it has helped sustain a system that is worse than breakdown in one important sense: it is stable enough to endure, legitimate enough to deflect radical challenge, and functional enough to resist transformation.</p>
            
            <p><em>The fire brigade that keeps the building from burning down also keeps people living in it.</em></p>
            
            <p><strong>The Managed Performance:</strong> Reform actors are offered sufficient institutional access, stakeholder consultation, and symbolic cooperation to remain invested in the process. Personal relationships are cultivated between system actors and civil society leaders—making direct confrontation feel like betrayal and softening advocacy into the shape of polite request.</p>
            
            <div className="case-example">
              <strong>INSIGHT:</strong> Civil society working to drive reform without simultaneously building genuine counter-power—the capacity to impose costs on non-compliance—will continue to find itself a useful prop in performances it did not script and cannot control.
            </div>
          </div>
        </div>

        <div className="failure-item">
          <div className="failure-header">
            <span className="failure-icon">🌍</span>
            <h4>International Donors</h4>
            <span className="failure-tag">The Challenge of Timescales</span>
          </div>
          <div className="failure-content">
            <p><strong>The Investment:</strong> International donors have invested substantially in Nigerian democratic governance across two decades: electoral observation, civic education, institutional capacity building, and anti-corruption programming. Much of this work has produced real outputs.</p>
            
            <p><strong>The Challenge:</strong> The timescale mismatch between donor funding cycles and the long-horizon work that systemic change requires creates a fundamental tension. Donor-funded reform operates within timelines, accountability frameworks, and political constraints that don't always align with what structural transformation demands.</p>
            
            <ul className="mismatch-list">
              <li><strong>Funding cycles</strong> require results within 3-5 years → <strong>Systemic change</strong> operates across decades</li>
              <li><strong>Program requirements</strong> favor politically neutral approaches → <strong>Structural reform</strong> is inherently political</li>
              <li><strong>Bilateral relationships</strong> require maintaining government partnerships → <strong>Real accountability</strong> sometimes requires confrontation</li>
            </ul>
            
            <p><strong>The Path Forward:</strong> Shifting a meaningful proportion of democracy support from short-term program funding to long-term institutional grants—supporting organizations building the permanent civic infrastructure this paper argues for, with success measured in organizational durability and citizen reach rather than project deliverables.</p>
            
            <div className="case-example">
              <strong>OPPORTUNITY:</strong> International support for permanent, citizen-funded civic organizations—not as traditional "projects" but as infrastructure investments—could help bridge the gap between episodic mobilization and sustained counter-power.
            </div>
          </div>
        </div>

        <div className="failure-item">
          <div className="failure-header">
            <span className="failure-icon">✊🏾</span>
            <h4>Movements</h4>
            <span className="failure-tag">Energy Without Infrastructure</span>
          </div>
          <div className="failure-content">
            <p><strong>The Power:</strong> Movements generate genuine popular energy—mass mobilization, spontaneous coordination, and the kind of civic passion that formal organizations struggle to replicate.</p>
            
            <p><strong>The Problem:</strong> They lack the organizational infrastructure to sustain it through the long cycles that structural change requires. The most energetic mobilizations are inherently episodic: they peak, and the energy dissipates, leaving no lasting organizational residue.</p>
            
            <p><strong>The System's Response:</strong> The containment system, which operates continuously, simply waits them out.</p>
            
            <div className="case-example">
              <strong>CASE:</strong> The #EndSARS movement of 2020 and the "Obidient" mobilization of 2022-2023 both illustrate this pattern at scale: enormous citizen energy, no durable organizational infrastructure, rapid dissipation.
            </div>
            
            <p><strong>The Disconnect:</strong> Movements generate the legitimacy and social energy that politics requires; political organizations possess the formal power that movements cannot directly access. Where these remain structurally disconnected, containment exploits the gap systematically.</p>
          </div>
        </div>

        <div className="failure-item">
          <div className="failure-header">
            <span className="failure-icon">👥</span>
            <h4>Individual Citizens</h4>
            <span className="failure-tag">The Asymmetry of Engagement</span>
          </div>
          <div className="failure-content">
            <p><strong>The Challenge:</strong> Individual citizens engaging the system through voting, petition, protest, and civic participation face the most fundamental asymmetry: they engage episodically and individually against a system that operates continuously and collectively.</p>
            
            <p><strong>The Rational Response:</strong> Withdrawal, emigration, resignation. Each response further depletes the human capital available for future contestation.</p>
            
            <p><strong>The Participation Trap:</strong> Citizens who remain engaged often find themselves in the position of fuelling reform processes that absorb their energy without delivering their goals, or of making the rational choice to participate in the patronage economy rather than bear the costs of resistance alone.</p>
            
            <p><strong>What Breaking This Requires:</strong> Not moral exhortation but structural change—the creation of permanent civic organisations that make sustained engagement rational and rewarded rather than exceptional and exhausting.</p>
            
            <div className="case-example">
              <strong>PSYCHOLOGY:</strong> Learned helplessness is not weakness. It is a rational adaptation to a system that has consistently punished civic engagement and rewarded withdrawal. The person who protested in 2020, voted in 2023, donated to a movement and watched it fragment—that person has evidence. Their disengagement is not apathy. It is the conclusion of experience.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="asymmetry-conclusion">
      <div className="conclusion-quote-mark">"</div>
      <h3 className="conclusion-statement">The system holds because the response has not yet matched it</h3>
      <div className="conclusion-body">
        <p>When sustained multi-front citizen pressure coordinates across polling-unit organization, civic infrastructure, economic disruption, legal challenges, and narrative control—the arithmetic changes.</p>
        <p className="conclusion-emphasis">The system is not held together by its strength. It is held together by the absence of the thing that would break it.</p>
      </div>
    </div>
  </section>

  <section className="strategies-section">
    <h2>Nine Counter-Systemic Strategies</h2>
    <p className="section-intro">Breaking democratic containment requires matching its systemic character with systemic organization.</p>
    
    <div className="strategies-list">
      <div className="strategy-item">
        <div className="strategy-number">1</div>
        <div className="strategy-content">
          <h3>Build Permanent Civic Infrastructure</h3>
          <p>The single most important structural shift required is from episodic mobilization to permanent organization. This means building institutions—not campaigns—that exist, function, and accumulate capacity between electoral cycles and protest moments.</p>
        </div>
      </div>

      <div className="strategy-item">
        <div className="strategy-number">2</div>
        <div className="strategy-content">
          <h3>Organize at the Polling Unit Level</h3>
          <p>Nigeria has approximately 176,000 polling units. A national civic infrastructure built from the polling unit upward, with ward-level coordinators and community issue-tracking, would transform the relationship between citizen energy and electoral outcomes.</p>
        </div>
      </div>

      <div className="strategy-item">
        <div className="strategy-number">3</div>
        <div className="strategy-content">
          <h3>Align Disconnected Forces</h3>
          <p>Build the connective tissue between existing nodes of organized citizen energy: movements, religious institutions, community associations, professional networks, student unions, and diaspora organizations.</p>
        </div>
      </div>

      <div className="strategy-item">
        <div className="strategy-number">4</div>
        <div className="strategy-content">
          <h3>Build Citizen-Led Funding Models</h3>
          <p>Funding dependency is a sovereignty problem. Building citizen-funded civic organizations through mass small-donation models and membership structures is a precondition for strategic independence.</p>
        </div>
      </div>

      <div className="strategy-item">
        <div className="strategy-number">5</div>
        <div className="strategy-content">
          <h3>Deploy Technology as Infrastructure</h3>
          <p>Build community accountability platforms, secure coordination tools, civic education systems, and evidence-gathering infrastructure that operates continuously, not episodically.</p>
        </div>
      </div>

      <div className="strategy-item">
        <div className="strategy-number">6</div>
        <div className="strategy-content">
          <h3>Operate on a Long-Horizon Timeline</h3>
          <p>Democratic containment has been built and refined over decades. Counter-systemic strategy must plan for a ten-to-twenty year horizon—treating each election and mobilization as one data point in a longer arc.</p>
        </div>
      </div>

      <div className="strategy-item">
        <div className="strategy-number">7</div>
        <div className="strategy-content">
          <h3>Build Counter-Power, Not Just Advocacy</h3>
          <p>The shift from advocacy—asking those in power for change—to counter-power: the organized capacity to compel change by imposing political costs on those who resist it.</p>
        </div>
      </div>

      <div className="strategy-item">
        <div className="strategy-number">8</div>
        <div className="strategy-content">
          <h3>Disrupt the Financial Ecosystem</h3>
          <p>Raise the systemic cost of moving political money to the point where the financial infrastructure of containment becomes unreliable, expensive, and risky for those who depend on it.</p>
        </div>
      </div>

      <div className="strategy-item">
        <div className="strategy-number">9</div>
        <div className="strategy-content">
          <h3>Build a New Generation of Political Leadership</h3>
          <p>Invest in leadership development programs that combine political education with practical organizing skills, creating pathways for civic leaders to enter formal politics without surrendering to patronage logic.</p>
        </div>
      </div>
    </div>
  </section>

  {/* ABOUT MANDATE4 SECTION */}
  <section className="about-mandate4-findings">
    <div className="findings-about-container">
      <div className="findings-about-header">
        <div className="about-logo-compact">
          <img src="/images/mandate4-logo.jpg" alt="Mandate 4" className="findings-logo-img" />
          <span className="logo-subtitle-findings">Political Research & Civic Strategy Unit</span>
        </div>
      </div>
      
      <div className="findings-about-body">
        <p>Mandate 4 is a nation-building civic startup working to elevate the quality of politics, strengthen democracy, and unlock Africa's potential. This report represents our commitment to rigorous analysis that informs counter-systemic strategy and supports the critical mass of actors required for democratic transformation.</p>
        
        <div className="findings-about-links">
          <a href="https://mandate4.org" target="_blank" className="findings-link">mandate4.org</a>
          <span className="link-separator">·</span>
          <a href="mailto:research@mandate4.org" className="findings-link">research@mandate4.org</a>
          <span className="link-separator">·</span>
          <a href="#" className="findings-link">@mandate4hq</a>
        </div>
      </div>
    </div>
  </section>

  {/* THE PATH FORWARD SECTION */}
  <section className="path-forward-section" style={{ background: 'linear-gradient(to bottom, #f8f9fa 0%, white 100%)', padding: '4rem 0', margin: '4rem 0 0 0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
      <h2 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--charcoal)', marginBottom: '2rem', textAlign: 'center' }}>The Path Forward</h2>
      
      <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: 'var(--emerald)', marginBottom: '2rem', textAlign: 'center' }}>Permanent Civic Infrastructure is the Antithesis to Democratic Containment</h3>
      
      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', marginBottom: '2rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
        Every argument in this paper points to a single structural conclusion. Democratic containment is durable not because it commands genuine popular consent, not because it is morally superior, and not because it is immune to challenge. It is durable because of its organisational properties.
      </p>
      
      <div style={{ background: 'rgba(0, 135, 81, 0.05)', borderLeft: '5px solid var(--emerald)', padding: '2rem', margin: '2.5rem 0', borderRadius: '8px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', fontStyle: 'italic', color: 'var(--forest-green)', margin: '0' }}>
          Permanent civic infrastructure, operating with the same continuity and coordination as the containment system it confronts, can make accountability politically necessary rather than politically optional.
        </p>
      </div>
      
      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', marginBottom: '3rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
        The table below maps the full antithesis: what the containment system currently is, what current reform efforts have been, and what permanent civic infrastructure must become to close the organisational gap.
      </p>
      
      <div style={{ overflowX: 'auto', margin: '3rem 0', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', minWidth: '800px' }}>
          <thead>
            <tr style={{ background: 'var(--charcoal)' }}>
              <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)', width: '18%' }}>Dimension</th>
              <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)', width: '27%' }}>Containment System</th>
              <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)', width: '27%' }}>Reform Efforts<br/><span style={{ fontSize: '0.75rem', fontWeight: '400', opacity: '0.9' }}>(Current)</span></th>
              <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: 'white', width: '28%' }}>Permanent Civic Infrastructure<br/><span style={{ fontSize: '0.75rem', fontWeight: '400', opacity: '0.9' }}>(Required)</span></th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e5e5e5', transition: 'background 0.2s' }}>
              <td style={{ padding: '1.25rem', fontWeight: '700', background: '#f8f8f8', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Coordination</td>
              <td style={{ padding: '1.25rem', color: '#555', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Networked across political, economic, and social domains</td>
              <td style={{ padding: '1.25rem', color: '#999', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Siloed -- organisations operate independently without coordination</td>
              <td style={{ padding: '1.25rem', fontWeight: '600', color: 'var(--emerald)', lineHeight: '1.6' }}>Structurally aligned -- shared platforms, joint positioning, coordinated action</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e5e5', transition: 'background 0.2s' }}>
              <td style={{ padding: '1.25rem', fontWeight: '700', background: '#f8f8f8', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Time horizon</td>
              <td style={{ padding: '1.25rem', color: '#555', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Persistent -- operates continuously across decades</td>
              <td style={{ padding: '1.25rem', color: '#999', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Episodic -- organised around elections and crisis moments</td>
              <td style={{ padding: '1.25rem', fontWeight: '600', color: 'var(--emerald)', lineHeight: '1.6' }}>Permanent -- exists and functions between cycles as much as during them</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e5e5', transition: 'background 0.2s' }}>
              <td style={{ padding: '1.25rem', fontWeight: '700', background: '#f8f8f8', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Strategic orientation</td>
              <td style={{ padding: '1.25rem', color: '#555', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Strategic -- pursues defined outcomes with long-horizon planning</td>
              <td style={{ padding: '1.25rem', color: '#999', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Reactive -- responds to events rather than shaping them</td>
              <td style={{ padding: '1.25rem', fontWeight: '600', color: 'var(--emerald)', lineHeight: '1.6' }}>Proactive -- builds pressure in advance of the moments that require it</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e5e5', transition: 'background 0.2s' }}>
              <td style={{ padding: '1.25rem', fontWeight: '700', background: '#f8f8f8', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Adaptability</td>
              <td style={{ padding: '1.25rem', color: '#555', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Adaptive -- evolves in response to every challenge it faces</td>
              <td style={{ padding: '1.25rem', color: '#999', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Rigid -- repeats models that have not produced structural change</td>
              <td style={{ padding: '1.25rem', fontWeight: '600', color: 'var(--emerald)', lineHeight: '1.6' }}>Learning -- accumulates institutional knowledge across every cycle</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e5e5', transition: 'background 0.2s' }}>
              <td style={{ padding: '1.25rem', fontWeight: '700', background: '#f8f8f8', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Resourcing</td>
              <td style={{ padding: '1.25rem', color: '#555', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Well-funded through independent and diverted public resources</td>
              <td style={{ padding: '1.25rem', color: '#999', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Mostly donor-dependent -- priorities shaped by external funding cycles</td>
              <td style={{ padding: '1.25rem', fontWeight: '600', color: 'var(--emerald)', lineHeight: '1.6' }}>Citizen-funded -- financially sovereign and accountable to its base</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e5e5', transition: 'background 0.2s' }}>
              <td style={{ padding: '1.25rem', fontWeight: '700', background: '#f8f8f8', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Geographic reach</td>
              <td style={{ padding: '1.25rem', color: '#555', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Embedded at every level -- national, state, LGA, ward, polling unit</td>
              <td style={{ padding: '1.25rem', color: '#999', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Concentrated nationally and at state level -- thin at the base</td>
              <td style={{ padding: '1.25rem', fontWeight: '600', color: 'var(--emerald)', lineHeight: '1.6' }}>Base-built -- organised from the polling unit upward</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e5e5', transition: 'background 0.2s' }}>
              <td style={{ padding: '1.25rem', fontWeight: '700', background: '#f8f8f8', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Response to pressure</td>
              <td style={{ padding: '1.25rem', color: '#555', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Absorbs and neutralises -- converts reform energy into legitimacy</td>
              <td style={{ padding: '1.25rem', color: '#999', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Dissipates -- energy peaks and disperses without organisational residue</td>
              <td style={{ padding: '1.25rem', fontWeight: '600', color: 'var(--emerald)', lineHeight: '1.6' }}>Compounds -- each cycle of pressure builds on the last</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e5e5', transition: 'background 0.2s' }}>
              <td style={{ padding: '1.25rem', fontWeight: '700', background: '#f8f8f8', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Accountability</td>
              <td style={{ padding: '1.25rem', color: '#555', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Accountable to elite interests and ecosystem incentives only</td>
              <td style={{ padding: '1.25rem', color: '#999', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Accountable to donors and external reporting requirements</td>
              <td style={{ padding: '1.25rem', fontWeight: '600', color: 'var(--emerald)', lineHeight: '1.6' }}>Accountable to citizens -- membership-based, transparent, mandate-driven</td>
            </tr>
            <tr style={{ background: 'rgba(0, 135, 81, 0.03)' }}>
              <td style={{ padding: '1.5rem', fontWeight: '700', background: '#f0f0f0', borderRight: '1px solid #e5e5e5', color: 'var(--charcoal)' }}>Effect on power</td>
              <td style={{ padding: '1.5rem', fontWeight: '700', color: '#333', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Makes power accountable to no one</td>
              <td style={{ padding: '1.5rem', fontWeight: '700', color: '#666', borderRight: '1px solid #e5e5e5', lineHeight: '1.6' }}>Asks power to be accountable</td>
              <td style={{ padding: '1.5rem', fontWeight: '700', color: 'var(--emerald)', fontSize: '1.05rem', lineHeight: '1.6' }}>Makes accountability politically necessary rather than politically optional</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <div className="findings-conclusion" style={{ background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFAED 100%)', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(255, 184, 28, 0.15)', borderLeft: '5px solid var(--gold)' }}>
    <h2>The System Holds Because the Response Has Not Yet Matched It</h2>
    <p>When sustained multi-front citizen pressure coordinates across polling-unit organization, civic infrastructure, economic disruption, legal challenges, and narrative control—the arithmetic changes.</p>
    <p><strong>The system is not held together by its strength. It is held together by the absence of the thing that would break it.</strong></p>
  </div>

  {/* CALL TO SPECIFIC ACTION SECTION */}
  <section style={{ padding: '4rem 0', margin: '4rem 0 0 0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
      <h2 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--charcoal)', marginBottom: '1.5rem', textAlign: 'center', borderBottom: '3px solid var(--gold)', paddingBottom: '1rem' }}>A Call to Specific Action: What Each Stakeholder Can Do Now</h2>
      
      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', marginBottom: '3rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', color: '#555' }}>
        The nine strategies in the preceding section describe what the counter-systemic response must build. This section translates that framework into concrete, specific actions for each of the stakeholder groups whose participation is essential. Democratic containment is sustained by many actors playing different roles. Breaking it requires the same: many actors, each contributing what they uniquely can.
      </p>

      {/* Stakeholder Cards Grid */}
      <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
        
        {/* #EndSARS Protesters and Movement Veterans */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--emerald)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--emerald)', marginBottom: '1.5rem' }}>#EndSARS Protesters and Movement Veterans</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            You demonstrated in 2020 that spontaneous, horizontal, digitally coordinated civic energy at scale is possible in Nigeria. The system absorbed that energy because there was no permanent organisational structure to receive it. Your specific task now is to convert that network into permanent infrastructure: register your local coordinating groups as formal organisations; maintain the ward-level relationships built during the protests; document what you learned about coordination, logistics, and resilience under pressure; and connect with organisations building the permanent civic infrastructure this paper argues for. The #EndSARS moment was not a failure — it was a proof of concept. The proof now needs a structure. You are the people who hold the social capital and the lived credibility to build it.
          </p>
        </div>

        {/* 2023 Election Voters and the Disillusioned */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--gold)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--amber)', marginBottom: '1.5rem' }}>2023 Election Voters and the Disillusioned</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            You voted, watched the technology fail, followed the tribunal, and received a verdict that confirmed what the system had already decided. The specific temptation now is permanent disengagement — the conclusion that the system cannot be beaten and that the rational response is exit or compliance. That conclusion is exactly what the containment ecosystem needs you to reach. Your specific task is to resist it — not through blind optimism but through the specific cognitive reframe this paper argues for: your disengagement is not withdrawal from the system. It is active participation in sustaining it. The 2023 election was not proof that change is impossible; it was proof that change requires more organised power than was assembled. Organised numbers at the polling unit, maintained between elections, change the arithmetic. Find your ward. Know your polling unit. Stay.
          </p>
        </div>

        {/* Electoral Reform Advocates */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--forest-green)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '1.5rem' }}>Electoral Reform Advocates</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            You have produced the analysis, attended the consultations, submitted the proposals, and watched them absorbed. The specific insight this paper offers your work is not that it is wrong but that it is incomplete without organised citizen pressure behind it. Your specific task is to pair every reform proposal with an organised citizen constituency that has the numbers and the sustained commitment to impose electoral costs if the reform is blocked. Identify the two or three constitutional and legislative provisions that most directly protect the containment architecture — the petition timeline, the result override provisions, the INEC funding structure — and build a coalition with the explicit goal of removing them, with a timeline, and with escalating pressure built in from the start. Reform without a plan to impose consequences for non-reform is a petition. This work needs to become a campaign.
          </p>
        </div>

        {/* International Donors and Development Partners */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--emerald)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--emerald)', marginBottom: '1.5rem' }}>International Donors and Development Partners</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            Your resources have produced real outputs across two decades of Nigeria programming. The structural problem is the mismatch between your funding cycles and the timescale of the change you are trying to produce. Your specific task is threefold. First, shift a meaningful proportion of your Nigeria portfolio from programme funding to institutional funding — multi-year, core-cost grants to organisations building the permanent civic infrastructure this paper argues for, with success measured in organisational durability and citizen reach rather than project deliverables. Second, actively support Nigerian organisations to build citizen-funded income streams rather than creating permanent donor dependency — your greatest contribution may be funding the transition away from your funding. Third, use your bilateral relationships with the Nigerian government to introduce reputational and diplomatic costs for the specific electoral and constitutional provisions that protect the containment architecture. Your leverage is real; the question is whether it is used transactionally or structurally.
          </p>
        </div>

        {/* Civil Society Leaders */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--gold)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--amber)', marginBottom: '1.5rem' }}>Civil Society Leaders</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            This paper has named the structural trap honestly: civil society has helped prevent democratic breakdown while inadvertently sustaining a more durable form of dysfunction. Your specific task is to make the internal assessment this paper describes publicly — to ask, of your own organisation: are we building power or performing advocacy? Are we measuring success in outputs or outcomes? Are we dependent on funders whose interests conflict with the structural changes we nominally seek? Are we being managed through the consultation process rather than driving it? These are uncomfortable questions, and the paper does not expect every civil society organisation to arrive at the same answer. But the ones that do — the ones prepared to make the shift from consultation to confrontation, from outputs to organised power — are the organisations that need to be identified, connected, and supported as the civic backbone of the counter-systemic response.
          </p>
        </div>

        {/* Young Nigerians Aged 18 to 35 */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--forest-green)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '1.5rem' }}>Young Nigerians Aged 18 to 35</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            You are the demographic majority, the most digitally capable cohort, and the generation with no nostalgia for the system. You have already demonstrated the capacity for rapid, horizontal, cross-ethnic organisation. The specific task now is structural conversion: take the group chats, the Twitter spaces, the WhatsApp networks, and the informal coordination that already exists — and build permanent organisations from them. Register. Elect officers. Open bank accounts. Develop a one-year plan. Connect to other groups doing the same. The energy is not the problem; the structure is. Find your polling unit. The 176,000 polling units that determine electoral outcomes in Nigeria are, in the majority, unorganised from a citizen perspective. The specific, achievable, actionable task for this generation is to change that — one ward, one unit, one sustained presence at a time. You do not need permission. You need structure.
          </p>
        </div>

        {/* Journalists and Independent Media */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--emerald)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--emerald)', marginBottom: '1.5rem' }}>Journalists and Independent Media</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            The media ownership concentration described in this paper means that the most important journalism in Nigeria is increasingly produced by independent outlets, investigative platforms, and individual journalists operating outside the captured proprietor ecosystem. Your specific task is to treat financial flows as the primary beat of democratic accountability — not as a specialist anti-corruption niche but as the central lens through which all political coverage should be structured. Every government contract, every primary election, every appointment should be tracked against the financial ecosystem of containment described in this paper. Build the documentation capacity that makes financial accountability journalism possible across election cycles rather than only in response to individual scandals. Develop source protection infrastructure. Connect with international investigative networks that have both the protection and the amplification reach that individual Nigerian journalists often lack. Your independence from the captured media ecosystem is both your vulnerability and your most important asset.
          </p>
        </div>

        {/* Political Scientists, Academics, and Researchers */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--gold)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--amber)', marginBottom: '1.5rem' }}>Political Scientists, Academics, and Researchers</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            The concept of democratic containment introduced in this paper is a framework, not a completed theory. Your specific task is to test it, challenge it, refine it, and extend it with the rigour of peer-reviewed scholarship. The six companion research areas named in this paper's future research note — constitutional architecture, security sector dynamics, ethnicity as fragmentation, digital political economy, media ownership, and NASS capture mechanics — each represents a substantive research agenda that would strengthen the analytical foundation for the counter-systemic response. Beyond the research itself, your specific contribution is the legitimisation function: when political analysis is produced by credentialed researchers at recognised institutions, it is harder for the containment ecosystem to dismiss as partisan advocacy. The academy has been largely absent from the specific analytical work this paper represents. That absence has consequences for the quality of civic strategy in Nigeria. Engage.
          </p>
        </div>

        {/* Values-Based Political Actors */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--forest-green)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '1.5rem' }}>Values-Based Political Actors</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            If you are a political actor who entered or intends to enter formal politics on different terms than the containment ecosystem offers — without buying delegates, without selling appointments, without accepting the patronage logic that conditions access — your specific challenge is that the system is designed to make your entry prohibitively expensive and your success structurally unlikely. Your specific task is therefore not primarily electoral but organisational: before you contest, build the citizen base that can finance your campaign without creating the financial dependencies that compromise your independence once you win. The polling-unit organisation strategy described in this paper is your most important pre-campaign investment. Connect with other values-based actors across party lines and build the coordination infrastructure that prevents the system from isolating and defeating you individually. And be honest with yourself about the absorption risk: the containment ecosystem is at its most sophisticated precisely in the period after a counter-systemic actor wins — when the incentives to accommodate, co-opt, and gradually normalise are at their strongest.
          </p>
        </div>

        {/* Business Leaders and the Private Sector */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--emerald)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--emerald)', marginBottom: '1.5rem' }}>Business Leaders and the Private Sector</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            The Nigerian private sector has a direct material interest in democratic transformation that it has rarely exercised as organised political pressure. The power failure that costs the economy an estimated $25 billion annually is not a technical problem; it is a political problem produced by the same containment system that allocates contracts, licences, and regulatory forbearance based on political loyalty rather than productive capacity. Your specific task is to make this argument publicly, in your own voice, through your own associations — the Manufacturers Association of Nigeria, the Nigerian Association of Chambers of Commerce, Industry, Mines and Agriculture, the Lagos Chamber of Commerce — and to use the collective economic leverage those bodies represent to advocate for the specific structural changes that would alter the political allocation of economic opportunity. The private sector's silence on democratic accountability is not neutrality. It is a political choice that sustains the system that extracts from you. Organised private sector voice, directed at specific structural reforms rather than general business-climate advocacy, is an underdeployed asset in the counter-systemic toolkit.
          </p>
        </div>

        {/* Religious Communities and Faith Leaders */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--gold)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--amber)', marginBottom: '1.5rem' }}>Religious Communities and Faith Leaders</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            This paper has named the capture of sections of religious leadership as a containment mechanism. It has also noted that many faith leaders have been among the most courageous voices for accountability. The specific task for religious communities and uncaptured faith leaders is to use the moral authority, the organised constituency, and the institutional infrastructure that Nigerian religious institutions represent — the largest organised networks in the country — for explicit civic education: on patronage as theft of public resources; on electoral manipulation as a violation of community interests; on the connection between political accountability and the lived conditions of congregations. Religious institutions reach millions of Nigerians who are not reached by civil society, media, or academic engagement. That reach, directed toward the civic reframe this paper argues for — disengagement as political participation in the system's continuation — would be among the most powerful forces for mass attitude change available in the Nigerian context.
          </p>
        </div>

        {/* Students and Educators */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '5px solid var(--forest-green)' }}>
          <h3 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.75rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '1.5rem' }}>Students and Educators</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
            Nigerian universities and secondary schools are the recruitment ground for the containment ecosystem's talent pipeline — student union politics, party youth wings, and the networks of obligation and patronage that begin on campus and extend into professional and political life. Your specific task is to disrupt this pipeline at the point of formation: by building student organisations that are explicitly oriented toward civic accountability rather than toward career networking within the political system; by developing civic education curricula that name democratic containment and equip students with the analytical framework to understand what they are entering; and by creating the campus cultures in which values-based political ambition is more socially rewarded than patronage participation. Educators specifically carry the responsibility of introducing the next generation of Nigerian political actors to a framework for understanding their country that goes beyond the inherited narratives of ethnic division and developmental failure. The ideas in this paper, taught in Nigerian classrooms, would change the formation of the generation that will govern Nigeria in the 2030s and 2040s.
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* Master Power Section: 10 Million Voter Infrastructure */}
  <section style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, #1a3a2e 100%)', padding: '6rem 2rem', margin: '4rem 0', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
    {/* Decorative elements */}
    <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 184, 28, 0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
    <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(0, 135, 81, 0.2) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
    
    <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: '1' }}>
      {/* Power Icon & Badge */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚡</div>
        <span style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--warm-black)', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', boxShadow: '0 6px 20px rgba(255, 184, 28, 0.4)' }}>
          Master Power Section
        </span>
      </div>

      {/* Main Statement */}
      <div style={{ background: 'rgba(255, 255, 255, 0.98)', borderRadius: '16px', padding: '3.5rem', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)', borderLeft: '8px solid var(--gold)', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800', color: 'var(--charcoal)', lineHeight: '1.2', marginBottom: '2rem', textAlign: 'center' }}>
          A 10 Million-Voter-Strong,<br/>Permanent Civic Infrastructure is Critical
        </h2>
        
        <div style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', lineHeight: '1.8', color: 'var(--slate)', fontWeight: '400' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--emerald)', fontWeight: '700' }}>Change requires shifting political costs.</strong> Currently, blocking reform costs politicians nothing while conceding it risks elite backlash.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            A permanent civic infrastructure with <strong style={{ color: 'var(--emerald)', fontWeight: '700' }}>organised 10 million voters</strong> who coordinate to apply pressure on this system on critical issues—from electoral reform to government accountability—reverses this calculus by making containment politically expensive.
          </p>
          
          <p style={{ margin: '0', fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', color: 'var(--emerald)', fontWeight: '700', textAlign: 'center', paddingTop: '1rem', borderTop: '2px solid rgba(0, 135, 81, 0.2)' }}>
            This is what we propose building.
          </p>
        </div>
      </div>

      {/* Visual Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '2rem', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3.5rem', fontWeight: '800', color: 'var(--gold)', lineHeight: '1', marginBottom: '0.5rem' }}>10M</div>
          <div style={{ fontFamily: '\'DM Sans\', sans-serif', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Organized Voters</div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '2rem', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3.5rem', fontWeight: '800', color: 'var(--gold)', lineHeight: '1', marginBottom: '0.5rem' }}>∞</div>
          <div style={{ fontFamily: '\'DM Sans\', sans-serif', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Permanent Structure</div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '2rem', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3.5rem', fontWeight: '800', color: 'var(--gold)', lineHeight: '1', marginBottom: '0.5rem' }}>⚖️</div>
          <div style={{ fontFamily: '\'DM Sans\', sans-serif', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Reversed Calculus</div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '2rem', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div style={{ fontFamily: '\'Fraunces\', serif', fontSize: '3.5rem', fontWeight: '800', color: 'var(--gold)', lineHeight: '1', marginBottom: '0.5rem' }}>💪</div>
          <div style={{ fontFamily: '\'DM Sans\', sans-serif', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Sustained Pressure</div>
        </div>
      </div>
    </div>
  </section>

  {/* Stakeholder Collaboration Section */}
  <section style={{ background: 'linear-gradient(135deg, rgba(255, 184, 28, 0.08) 0%, rgba(0, 135, 81, 0.08) 100%)', padding: '5rem 2rem', margin: '4rem 0', borderRadius: '8px', border: '2px solid rgba(0, 135, 81, 0.15)' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      {/* Section Badge */}
      <div style={{ marginBottom: '2rem' }}>
        <span style={{ display: 'inline-block', background: 'var(--emerald)', color: 'white', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(0, 135, 81, 0.3)' }}>
          🤝 Operationalizing These Findings
        </span>
      </div>

      {/* Main Heading */}
      <h2 style={{ fontFamily: '\'Fraunces\', serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', color: 'var(--charcoal)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
        Partner with Mandate 4
      </h2>

      {/* Subheading */}
      <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'var(--slate)', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: '1.7', fontWeight: '400' }}>
        This framework is not just an analytical exercise—it's a blueprint for action. Mandate 4 is open to working with relevant stakeholders to translate these findings into concrete interventions, strategic programs, and coordinated pressure campaigns.
      </p>

      {/* Key Areas Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem', textAlign: 'left' }}>
        <div style={{ background: 'white', padding: '1.75rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', borderLeft: '4px solid var(--emerald)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
          <h4 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.15rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '0.5rem' }}>Strategic Design</h4>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', margin: '0' }}>Developing multi-front pressure campaigns grounded in the containment framework</p>
        </div>

        <div style={{ background: 'white', padding: '1.75rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', borderLeft: '4px solid var(--gold)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🏛️</div>
          <h4 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.15rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '0.5rem' }}>Permanent Civic Infrastructure</h4>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', margin: '0' }}>Join in building institutions and systems that sustain citizen power beyond electoral cycles</p>
        </div>

        <div style={{ background: 'white', padding: '1.75rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', borderLeft: '4px solid var(--emerald)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎓</div>
          <h4 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.15rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '0.5rem' }}>Civic Education</h4>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', margin: '0' }}>Translating the framework into accessible curricula and training programs</p>
        </div>

        <div style={{ background: 'white', padding: '1.75rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', borderLeft: '4px solid var(--gold)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌐</div>
          <h4 style={{ fontFamily: '\'Fraunces\', serif', fontSize: '1.15rem', fontWeight: '700', color: 'var(--forest-green)', marginBottom: '0.5rem' }}>Coalition Building</h4>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', margin: '0' }}>Supporting coordination across civil society, media, and reform organizations</p>
        </div>
      </div>

      {/* CTA Text */}
      <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '2rem', fontWeight: '500' }}>
        If you represent an organization, coalition, donor institution, or movement interested in operationalizing these findings:
      </p>

      {/* CTA Button */}
      <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'linear-gradient(135deg, var(--emerald) 0%, var(--forest-green) 100%)', color: 'white', padding: '1.25rem 3rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 6px 20px rgba(0, 135, 81, 0.35)', transition: 'all 0.3s ease' }} onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 30px rgba(0, 135, 81, 0.5)'; }} onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 20px rgba(0, 135, 81, 0.35)'; }}>
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        Submit Partnership Inquiry
      </a>

      {/* Footer Note */}
      <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '2rem', fontStyle: 'italic' }}>
        We're particularly interested in partnerships that prioritize sustained pressure over performative reform.
      </p>
    </div>
  </section>

  <div className="download-box" style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <div style={{ flex: '0 0 300px', maxWidth: '300px' }}>
      <img src="/images/report-cover-kf.jpg" alt="Democratic Containment Report Cover" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }} />
    </div>
    <div style={{ flex: '1', minWidth: '300px' }}>
      <h3>Read the Full 59-Page Analysis</h3>
      <p>Download the complete Democratic Containment report with detailed case studies, empirical documentation, and the strategic roadmap for transformation.</p>
      <div className="download-buttons">
        <Link href="/key-findings" className="download-btn">Key Findings</Link>
        <a href="#" className="download-btn-outline">Download Free Report (PDF)</a>
      </div>
    </div>
  </div>
    </div>
  )
}
