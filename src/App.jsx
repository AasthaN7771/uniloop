import React, { useState, useEffect } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const [registeredEvents, setRegisteredEvents] = useState([
    { id: 1, title: "Smart India Hackathon Internal Round", date: "2026-09-15", category: "Coding", status: "Confirmed" }
  ]);
  
  const [events, setEvents] = useState([
    { id: 1, title: "Smart India Hackathon Internal Round", category: "Coding", date: "2026-09-15", desc: "Showcase your prototype solutions to faculty judges.", registered: true },
    { id: 2, title: "Annual Fine Arts Canvas Workshop", category: "Creative", date: "2026-10-05", desc: "Explore mandala artistry and custom poster illustration techniques.", registered: false },
    { id: 3, title: "ESports Gaming Tournament", category: "Gaming", date: "2026-10-20", desc: "Inter-batch competitive gaming tournament organized by the gaming club.", registered: false }
  ]);

  const [clubs, setClubs] = useState([
    { id: 1, name: "Gaming Club", desc: "Organizes esports tournaments, game dev jams, and interactive booth workshops.", joined: true, badge: "Core Lead" },
    { id: 2, name: "Fine Arts Society", desc: "Painting, digital character design concepts, canvas workshops, and mandala artistry.", joined: false, badge: "Member" },
    { id: 3, name: "Tech & Coding Cell", desc: "Hackathons, web development sprints, and open-source contribution sessions.", joined: true, badge: "Active" }
  ]);

  const [lostItems, setLostItems] = useState([
    { id: 1, item: "Wireless Earbuds (Sony WF-1000XM4)", location: "ICT Department Lab 3", date: "Nov 4, 2026", status: "Lost" },
    { id: 2, item: "Scientific Calculator Casio FX-991ES", location: "Central Library Reading Room", date: "Nov 2, 2026", status: "Found" }
  ]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    setIsLoggedIn(true);
    showToast("Welcome back, Aastha! Signed in successfully.");
  };

  const handleRegisterEvent = (eventId) => {
    setEvents(events.map(ev => {
      if (ev.id === eventId) {
        const newRegState = !ev.registered;
        if (newRegState) {
          setRegisteredEvents(prev => [...prev, ev]);
          showToast("Successfully registered for " + ev.title + "!");
        } else {
          setRegisteredEvents(prev => prev.filter(item => item.id !== eventId));
          showToast("Cancelled registration for " + ev.title + ".");
        }
        return { ...ev, registered: newRegState };
      }
      return ev;
    }));
  };

  const handleToggleClub = (clubId) => {
    setClubs(clubs.map(c => {
      if (c.id === clubId) {
        const newJoined = !c.joined;
        showToast(newJoined ? "Joined " + c.name + " successfully!" : "Left " + c.name + ".");
        return { ...c, joined: newJoined };
      }
      return c;
    }));
  };

  if (!isLoggedIn) {
    return (
      <div className="auth-wrapper">
        <div className="auth-card">
          <div style={{ marginBottom: "28px" }}>
            <h1 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "6px" }}>UniVerse 🎓</h1>
            <p style={{ fontSize: "14px", color: "var(--text-light)" }}>Smart Campus Life & Academic Platform</p>
          </div>
          <form onSubmit={handleLogin}>
            <label style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--text-light)", display: "block", marginBottom: "6px" }}>Campus Email</label>
            <input
              type="email"
              placeholder="aastha.nanda@student.edu"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--text-light)", display: "block", marginBottom: "6px" }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" style={{ width: "100%", marginTop: "10px", padding: "14px" }}>
              Login to Portal
            </button>
          </form>
          <div style={{ marginTop: "20px", textAlign: "center", fontSize: "11px", color: "var(--text-light)", fontFamily: "monospace" }}>
            ICT Dept · Roll: 24BIT026
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {toastMessage && <div className="toast">✨ {toastMessage}</div>}

      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <h2>UniVerse</h2>
          <ul className="nav-links">
            {[
              { id: 'dashboard', label: '📊 Dashboard' },
              { id: 'events', label: '⚡ Campus Events' },
              { id: 'clubs', label: '🏛️ Clubs & Community' },
              { id: 'lostfound', label: '🔍 Lost & Found' },
            ].map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? 'active' : ''}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "white", fontSize: "12px" }}>
              AN
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "700" }}>Aastha Nanda</div>
              <div style={{ fontSize: "11px", color: "var(--text-light)", fontFamily: "monospace" }}>24BIT026 (ICT)</div>
            </div>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("isAuthenticated");
              setIsLoggedIn(false);
            }}
            style={{ width: "100%", backgroundColor: "#ef4444", padding: "10px", fontSize: "12px", boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)" }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        <header className="top-bar">
          <div>
            <input
              type="text"
              placeholder="Search campus features, events, clubs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-box"
              style={{ margin: 0 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "13px", color: "var(--text-light)" }}>
              Welcome, <strong style={{ color: "var(--primary)" }}>Aastha Nanda</strong>
            </span>
            <button
              onClick={() => setIsDark(!isDark)}
              style={{ padding: "10px 16px", fontSize: "12px", background: "var(--border)", color: "var(--text)", boxShadow: "none" }}
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </header>

        <div className="content-body">
          
          {activeTab === 'dashboard' && (
            <div>
              <h1 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "4px", letterSpacing: "-0.02em" }}>Personalized Dashboard</h1>
              <p style={{ fontSize: "14px", color: "var(--text-light)", marginBottom: "24px" }}>Overview of your academic journey and active campus engagements.</p>

              {/* Berry-Style Bento Grid Stats */}
              <div className="bento-grid">
                <div className="hero-card-purple" style={{ gridColumn: "span 4" }}>
                  <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.8 }}>My Registrations</div>
                  <div style={{ fontSize: "44px", fontWeight: "900", fontFamily: "monospace", margin: "12px 0 6px 0" }}>{registeredEvents.length}</div>
                  <div style={{ fontSize: "12px", opacity: 0.8 }}>Upcoming registered campus events</div>
                </div>

                <div className="hero-card-blue" style={{ gridColumn: "span 4" }}>
                  <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.8 }}>Active Announcements</div>
                  <div style={{ fontSize: "44px", fontWeight: "900", fontFamily: "monospace", margin: "12px 0 6px 0" }}>3</div>
                  <div style={{ fontSize: "12px", opacity: 0.8 }}>Mid-term timetable released</div>
                </div>

                <div className="card" style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--primary)", letterSpacing: "0.05em" }}>Campus Clubs</div>
                    <div style={{ fontSize: "44px", fontWeight: "900", fontFamily: "monospace", margin: "12px 0 6px 0", color: "var(--text)" }}>{clubs.filter(c => c.joined).length} / {clubs.length}</div>
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-light)" }}>Active student chapter memberships</div>
                </div>
              </div>

              <div style={{ marginTop: "36px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "16px" }}>Your Registered Events</h3>
                {registeredEvents.length === 0 ? (
                  <p style={{ fontSize: "14px", color: "var(--text-light)" }}>No events registered yet. Browse the Campus Events tab!</p>
                ) : (
                  <div className="bento-grid">
                    {registeredEvents.map(ev => (
                      <div key={ev.id} className="card" style={{ gridColumn: "span 6" }}>
                        <span style={{ fontSize: "11px", fontFamily: "monospace", padding: "3px 10px", borderRadius: "6px", background: "rgba(99, 102, 241, 0.1)", color: "var(--primary)", fontWeight: "700" }}>{ev.category}</span>
                        <h4 style={{ fontSize: "16px", fontWeight: "800", margin: "12px 0 6px 0" }}>{ev.title}</h4>
                        <div style={{ fontSize: "12px", color: "var(--text-light)", marginBottom: "16px" }}>📅 {ev.date}</div>
                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#10b981", background: "rgba(16, 185, 129, 0.1)", padding: "4px 10px", borderRadius: "8px" }}>Confirmed ✓</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <div>
                  <h1 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "4px", letterSpacing: "-0.02em" }}>Campus Events</h1>
                  <p style={{ fontSize: "14px", color: "var(--text-light)" }}>Explore workshops, hackathons, and tournaments.</p>
                </div>
              </div>

              <div className="bento-grid">
                {events.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase())).map(ev => (
                  <div key={ev.id} className="card" style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span style={{ fontSize: "11px", fontFamily: "monospace", padding: "3px 10px", borderRadius: "6px", background: "rgba(99, 102, 241, 0.1)", color: "var(--primary)", fontWeight: "700" }}>{ev.category}</span>
                        <span style={{ fontSize: "11px", color: "var(--text-light)" }}>{ev.date}</span>
                      </div>
                      <h3 style={{ fontSize: "18px", fontWeight: "800", margin: "8px 0" }}>{ev.title}</h3>
                      <p style={{ fontSize: "13px", color: "var(--text-light)", lineHeight: "1.6" }}>{ev.desc}</p>
                    </div>
                    <div style={{ marginTop: "24px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
                      <button
                        onClick={() => handleRegisterEvent(ev.id)}
                        style={{ width: "100%", backgroundColor: ev.registered ? "#10b981" : "var(--primary)" }}
                      >
                        {ev.registered ? 'Registered ✓' : 'Register Now'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'clubs' && (
            <div>
              <h1 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "4px", letterSpacing: "-0.02em" }}>Clubs & Community</h1>
              <p style={{ fontSize: "14px", color: "var(--text-light)", marginBottom: "24px" }}>Connect with student chapters, core teams, and interest groups.</p>

              <div className="bento-grid">
                {clubs.map(club => (
                  <div key={club.id} className="card" style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                        <span style={{ fontSize: "24px" }}>🏛️</span>
                        <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "3px 10px", borderRadius: "10px", background: "rgba(168, 85, 247, 0.15)", color: "#a855f7", fontWeight: "800" }}>{club.badge}</span>
                      </div>
                      <h3 style={{ fontSize: "18px", fontWeight: "800", margin: "8px 0" }}>{club.name}</h3>
                      <p style={{ fontSize: "13px", color: "var(--text-light)", lineHeight: "1.6" }}>{club.desc}</p>
                    </div>
                    <div style={{ marginTop: "24px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
                      <button
                        onClick={() => handleToggleClub(club.id)}
                        style={{ width: "100%", backgroundColor: club.joined ? "#ef4444" : "var(--primary)", boxShadow: club.joined ? "0 4px 12px rgba(239, 68, 68, 0.3)" : "0 6px 15px -3px rgba(99, 102, 241, 0.3)" }}
                      >
                        {club.joined ? 'Leave Club' : 'Join Club'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'lostfound' && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <div>
                  <h1 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "4px", letterSpacing: "-0.02em" }}>Lost & Found</h1>
                  <p style={{ fontSize: "14px", color: "var(--text-light)" }}>Report misplaced items or find things left around campus.</p>
                </div>
                <button onClick={() => showToast("Report item modal opened!")}>+ Report Item</button>
              </div>

              <div className="bento-grid">
                {lostItems.map(item => (
                  <div key={item.id} className="card" style={{ gridColumn: "span 6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "3px 10px", borderRadius: "6px", background: item.status === 'Lost' ? "rgba(245, 158, 11, 0.15)" : "rgba(16, 185, 129, 0.15)", color: item.status === 'Lost' ? "#f59e0b" : "#10b981", fontWeight: "800" }}>
                        {item.status}
                      </span>
                      <h4 style={{ fontSize: "16px", fontWeight: "800", margin: "10px 0 6px 0" }}>{item.item}</h4>
                      <div style={{ fontSize: "12px", color: "var(--text-light)" }}>📍 {item.location} · 📅 {item.date}</div>
                    </div>
                    <button onClick={() => showToast("Claim request sent for " + item.item)} style={{ padding: "10px 16px", fontSize: "12px" }}>
                      Claim Item
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}