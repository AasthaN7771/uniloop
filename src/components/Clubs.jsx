import React from 'react';

export default function Clubs() {
  const activeClubs = [
    { name: 'Gaming & Esports Club', role: 'Fine Arts Core', members: '142 Active' },
    { name: 'Coding & Open Source Cell', role: 'Contributor', members: '230 Active' }
  ];

  return (
    <div className="card glass-panel" style={{ padding: '1.5rem' }}>
      <h3 style={{ color: 'var(--gold-accent)', marginBottom: '1rem', fontFamily: 'serif' }}>Joined Societies</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {activeClubs.map((club, idx) => (
          <div key={idx} style={{ padding: '1rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontWeight: '600', color: '#fff', marginBottom: '0.2rem' }}>{club.name}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--gold-accent)' }}>{club.role}</div>
            <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.5rem' }}>{club.members}</div>
          </div>
        ))}
      </div>
    </div>
  );
}