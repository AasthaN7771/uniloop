"use client";
import * as React from "react";

export function FinanceBento({ title = "UniVerse OS", subtitle = "Smart Campus & Academic Hub" }) {
  return (
    <div style={{ width: "100%", padding: "10px" }}>
      
      {/* Header Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", paddingBottom: "20px", borderBottom: "1px solid var(--border)" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "800", margin: 0, color: "var(--text)" }}>{title}</h1>
          <p style={{ fontSize: "14px", color: "var(--text-light)", margin: "4px 0 0 0" }}>{subtitle}</p>
        </div>
        <div style={{ padding: "8px 16px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--border)", fontSize: "12px", fontFamily: "monospace", fontWeight: "600", color: "var(--primary)" }}>
          Roll: 24BIT026 · ICT Dept
        </div>
      </div>

      {/* Bento Grid Layout using CSS classes */}
      <div className="universe-grid">
        
        {/* Card 1: Main Engagement (Span 8) */}
        <div className="bento-card span-8" style={{ minHeight: "280px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)" }}>Core Metric</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", margin: "4px 0 0 0", color: "var(--text)" }}>Campus Engagement Index</h2>
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "11px" }}>
              <span style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" }}>Attendance</span>
              <span style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(168, 85, 247, 0.15)", color: "#a855f7" }}>Credits</span>
            </div>
          </div>

          <div style={{ margin: "24px 0" }}>
            <div style={{ fontSize: "52px", fontWeight: "900", fontFamily: "monospace", letterSpacing: "-0.03em", color: "var(--text)" }}>92.4%</div>
            <div style={{ fontSize: "13px", color: "#10b981", fontWeight: "600", marginTop: "4px" }}>↑ +4.2% optimized vs last term</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px", alignItems: "flex-end", height: "48px", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
            {[45, 60, 75, 65, 88, 92].map((val, idx) => (
              <div key={idx} style={{ height: "100%", background: "var(--border)", borderRadius: "8px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
                <div style={{ width: "100%", height: `${val}%`, background: "var(--primary)", borderRadius: "6px" }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Module Breakdown (Span 4) */}
        <div className="bento-card span-4">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", margin: 0, color: "var(--text)" }}>Module Breakdown</h3>
              <span style={{ fontSize: "11px", padding: "4px 8px", borderRadius: "6px", background: "var(--border)", color: "var(--primary)", fontFamily: "monospace" }}>Target 85%</span>
            </div>
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div style={{ fontSize: "42px", fontWeight: "900", fontFamily: "monospace", color: "var(--primary)" }}>89%</div>
              <p style={{ fontSize: "12px", color: "var(--text-light)", margin: "2px 0 0 0" }}>Overall Average</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px", borderTop: "1px solid var(--border)", fontSize: "13px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--text)" }}>Theory Lectures</span><span style={{ fontFamily: "monospace", fontWeight: "600", color: "var(--text)" }}>92%</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--text)" }}>Lab Sessions</span><span style={{ fontFamily: "monospace", fontWeight: "600", color: "var(--text)" }}>88%</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--text)" }}>Club Workshops</span><span style={{ fontFamily: "monospace", fontWeight: "600", color: "var(--text)" }}>86%</span></div>
          </div>
        </div>

        {/* Row 2 Cards (Span 3 each) */}
        <div className="bento-card span-3">
          <span style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", color: "#10b981", letterSpacing: "0.05em" }}>Academic Standing</span>
          <div style={{ fontSize: "28px", fontWeight: "900", fontFamily: "monospace", margin: "8px 0 4px 0", color: "var(--text)" }}>9.4 GPA</div>
          <div style={{ fontSize: "11px", color: "#10b981", fontWeight: "600" }}>★ Top 5% in ICT Dept</div>
        </div>

        <div className="bento-card span-3">
          <span style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", color: "var(--primary)", letterSpacing: "0.05em" }}>Reward Balance</span>
          <div style={{ fontSize: "28px", fontWeight: "900", fontFamily: "monospace", margin: "8px 0 4px 0", color: "var(--text)" }}>8,884 pts</div>
          <div style={{ fontSize: "11px", color: "var(--text-light)" }}>Multiplier: 4.2x active</div>
        </div>

        <div className="bento-card span-3">
          <span style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", color: "#f59e0b", letterSpacing: "0.05em" }}>Campus Dues</span>
          <div style={{ fontSize: "24px", fontWeight: "900", fontFamily: "monospace", color: "#f59e0b", margin: "8px 0 4px 0" }}>₹4,550</div>
          <div style={{ fontSize: "11px", color: "var(--text-light)" }}>Hostel Mess (Nov 15)</div>
        </div>

        <div className="bento-card span-3">
          <span style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", color: "#a855f7", letterSpacing: "0.05em" }}>Active Milestones</span>
          <div style={{ fontSize: "20px", fontWeight: "800", margin: "8px 0 4px 0", color: "var(--text)" }}>2 Goals</div>
          <div style={{ fontSize: "11px", color: "#a855f7", fontWeight: "600" }}>SIH 2026 & Fine Arts</div>
        </div>

        {/* Row 3 Panels (Span 6 each) */}
        <div className="bento-card span-6">
          <h3 style={{ fontSize: "16px", fontWeight: "700", margin: "0 0 14px 0", color: "var(--text)" }}>Clubs & Core Teams</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderRadius: "14px", background: "var(--bg)", border: "1px solid var(--border)" }}>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "var(--text)" }}>MindSpark Team (SIH 2026)</div>
                <div style={{ fontSize: "11px", color: "var(--text-light)" }}>Project: Bhumi Praman (SIH26018)</div>
              </div>
              <span style={{ fontSize: "11px", fontFamily: "monospace", padding: "4px 10px", borderRadius: "8px", background: "rgba(99, 102, 241, 0.15)", color: "var(--primary)", fontWeight: "600" }}>Lead</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderRadius: "14px", background: "var(--bg)", border: "1px solid var(--border)" }}>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "var(--text)" }}>Gaming Club - Fine Arts Core</div>
                <div style={{ fontSize: "11px", color: "var(--text-light)" }}>Interactive Booth & Design</div>
              </div>
              <span style={{ fontSize: "11px", fontFamily: "monospace", padding: "4px 10px", borderRadius: "8px", background: "rgba(168, 85, 247, 0.15)", color: "#a855f7", fontWeight: "600" }}>Core Member</span>
            </div>
          </div>
        </div>

        <div className="bento-card span-6">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", margin: 0, color: "var(--text)" }}>Weekly Lab & Coding Hours</h3>
            <span style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "8px", background: "rgba(16, 185, 129, 0.15)", color: "#10b981", fontWeight: "600" }}>On Track</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "14px" }}>
            <span style={{ fontSize: "28px", fontWeight: "900", fontFamily: "monospace", color: "var(--text)" }}>28.5 hrs</span>
            <span style={{ fontSize: "12px", color: "var(--text-light)" }}>Target: 25 hrs/wk</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px", textAlign: "center" }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, idx) => (
              <div key={idx} style={{ padding: "10px 4px", borderRadius: "12px", background: "var(--bg)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "13px", fontWeight: "800", fontFamily: "monospace", color: "var(--primary)" }}>{[5.2, 6.0, 4.5, 7.2, 5.6][idx]}h</div>
                <div style={{ fontSize: "10px", color: "var(--text-light)", marginTop: "2px" }}>{day}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
export default FinanceBento;