export const metadata = {
  title: "N'ZASSA",
  description: 'Le réseau de Macassi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: '#000', 
        color: '#fff', 
        fontFamily: 'sans-serif' 
      }}>
        {children}
      </body>
    </html>
  )
}
