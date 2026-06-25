export default function DevicesIllustration() {
  return (
    <div aria-hidden="true" style={{ display: 'grid', gap: 16 }}>
      <div style={{ background: '#f7f7f7', border: '1px solid #e5e5e5', borderRadius: 16, padding: 16 }}>
        <div style={{ width: '100%', height: 160, background: '#dfe7e4', borderRadius: 12 }} />
        <div style={{ marginTop: 8, height: 12, width: '60%', background: '#cbd5d0', borderRadius: 6 }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: '#f7f7f7', border: '1px solid #e5e5e5', borderRadius: 16, padding: 12 }}>
          <div style={{ width: '100%', height: 140, background: '#e6ece8', borderRadius: 10 }} />
        </div>
        <div style={{ background: '#f7f7f7', border: '1px solid #e5e5e5', borderRadius: 16, padding: 12 }}>
          <div style={{ width: '100%', height: 140, background: '#e6ece8', borderRadius: 10 }} />
        </div>
      </div>
    </div>
  );
}