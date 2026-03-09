export default function Home() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'black' 
    }}>
      <h1 style={{ fontSize: '60px', color: '#4ade80', margin: '0' }}>N'ZASSA</h1>
      <p style={{ color: '#71717a', fontSize: '20px' }}>Le réseau de Macassi est EN LIGNE !</p>
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #27272a', borderRadius: '10px' }}>
        <p style={{ color: '#4ade80' }}>● Serveur : Opérationnel</p>
        <p>Propriétaire : N’diaye Adama</p>
      </div>
    </div>
  )
}
