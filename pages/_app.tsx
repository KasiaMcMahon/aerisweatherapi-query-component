import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Open_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const open_sans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <style jsx global>{`
        html {
          font-family: ${open_sans.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>
  )
}
