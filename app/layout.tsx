import './globals.css'
import { Fira_Sans } from 'next/font/google'

const fira_sans = Fira_Sans({ subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: "Łukaszs Portfolio",
  description: "Welcome to this AWESOME website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira_sans.className}>{children}</body>
    </html>
  )
}
