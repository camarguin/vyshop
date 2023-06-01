import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'VyShop - Women and Men fashion',
  description:
    "Introducing VyShop, your ultimate destination for men and women's fashion online. Discover an extensive collection of trendy clothing, designed to inspire and empower individuals with style. From tailored suits and chic dresses to casual tees and denim essentials, our store offers a diverse range of high-quality garments to suit every occasion. With a seamless browsing experience, easy navigation, and secure payment options, Fashion Fusion ensures a convenient and enjoyable shopping experience for all fashion enthusiasts. Stay ahead of the fashion curve and redefine your wardrobe with Fashion Fusion today!",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
