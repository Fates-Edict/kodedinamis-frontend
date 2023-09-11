import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavigationBar() {
	const router = useRouter()
  const lists = [
    { label: 'About Us', url: 'about-us' },
    { label: 'Services', url: 'services' },
    { label: 'Products', url: 'products' },
    { label: 'Career', url: 'career' }
  ]
  return (
    <nav className="flex items-center justify-between flex-wrap container mx-auto py-6">
      <div onClick={() => router.push('/')} className="flex items-center flex-shrink-0 text-primary mr-6 cursor-pointer">
        <img src="/logo_kode.png" width={59} />
        <span className="font-semibold text-xl tracking-tight">kodedinamis</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right">
        <div className="text-lg lg:flex-grow">
          { lists.map(item => 
            <Link href={item.url} key={item.label} className="text-primary block mt-4 lg:inline-block lg:mt-0 mr-4">
              {item.label}
            </Link>) 
          }
        </div>
      </div>
    </nav>
  )
}