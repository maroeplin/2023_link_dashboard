import './globals.css'
import { Archivo } from 'next/font/google'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata = {
  title: 'Multimediasysteme | Informationsmanagement',
  description: 'Multimediasysteme | Informationsmanagement',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
