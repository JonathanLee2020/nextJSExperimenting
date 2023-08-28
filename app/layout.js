import './styles/globals.css'
import { Inter } from 'next/font/google'
import testLayout from '@/components/testLayout'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
      <div>
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}















  // <>
      //   <testLayout/>
      //   {/* <body className={inter.className}>{children}
      //   </body> */}
      //   {/* <body>
      //     {children}
      //   </body> */}
      // </>