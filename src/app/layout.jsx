import NextTopLoader from 'nextjs-toploader';
import './globals.css'
import Footer from "@/components/Footer";
import SiteNav from "@/components/SiteNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <NextTopLoader color="#35dea0" height={4} showSpinner={false} speed={500} />
          <SiteNav />
        </div>
        <div className='bg-[#f9fafb] min-h-screen'>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
