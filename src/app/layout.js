import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '株式会社ぐらで 公式ホームページ',
  description: '株式会社ぐらで (Gurade Inc.) について知りたい方はこちら',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}