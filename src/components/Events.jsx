import React from 'react';

export default function Events() {
  const eventsList = [
    { id: 1, title: 'AI & Machine Learning Hackathon', venue: 'Auditorium Hall A', time: '10:00 AM' },
    { id: 2, title: 'Fine Arts Exhibition & Workshop', venue: 'Student Activity Center', time: '02:00 PM' }
  ];

  return (
    <div className="card glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <h3 style={{ color: 'var(--gold-accent)', marginBottom: '1rem', fontFamily: 'serif' }}>Upcoming Events</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {eventsList.map(ev => (
          <div key={ev.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
            <div>
              <div style={{ fontWeight: '600', color: '#fff' }}>{ev.title}</div>
              <div style={{ fontSize: '0.85rem', color: '#aaa' }}>{ev.venue}</div>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--gold-accent)', background: 'rgba(212, 175, 55, 0.1)', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>{ev.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}