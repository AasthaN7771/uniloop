import React from 'react';

export default function Announcements() {
  const notices = [
    { id: 1, title: 'Mid-Sem Examination Schedule Released', date: 'Oct 24, 2026', tag: 'Academic' },
    { id: 2, title: 'Annual Tech Fest Registration Open', date: 'Oct 22, 2026', tag: 'Event' },
    { id: 3, title: 'Library Timings Extended for Finals', date: 'Oct 19, 2026', tag: 'Facility' }
  ];

  return (
    <div className="card glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <h3 style={{ color: 'var(--gold-accent)', marginBottom: '1rem', fontFamily: 'serif' }}>Campus Announcements</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {notices.map(notice => (
          <div key={notice.id} style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid var(--gold-accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#888', marginBottom: '0.3rem' }}>
              <span>{notice.tag}</span>
              <span>{notice.date}</span>
            </div>
            <div style={{ fontWeight: '500', color: '#f1f1f1' }}>{notice.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}