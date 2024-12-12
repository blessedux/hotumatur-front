import { Satisfy } from 'next/font/google'
 
const satisfy = Satisfy({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-satisfy',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={satisfy.variable}>
        {children}
      </body>
    </html>
  )
}

