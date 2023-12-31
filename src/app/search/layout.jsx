import Footer from '@/components/Footer'
import SearchHeader from '@/components/SearchHeader'
export const metadata = {
  title: 'Searching...',
  description: 'Generated by create next app',
}

export default function SearchLayout({ children }) {
  return (
    <div className=' relative min-h-screen'>
      <SearchHeader/>
      {children}
      <Footer/>
    </div>
  )
}
