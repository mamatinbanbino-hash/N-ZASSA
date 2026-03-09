export default function Home() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '60px', color: '#4ade80', margin: '0' }}>N'ZASSA</h1>
      <p style={{ color: '#71717a', fontSize: '20px' }}>Le réseau de Macassi est EN LIGNE !</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        border: '1px solid #27272a', 
        borderRadius: '12px' 
      }}>
        <p style={{ color: '#4ade80', fontWeight: 'bold' }}>● Statut : Opérationnel</p>
        <p>Développeur : N’diaye Adama</p>
      </div>
    </div>
  )
}
