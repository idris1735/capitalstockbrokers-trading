'use client'

import Link from 'next/link'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

export function Navbar() {
  const isMobile = useIsMobile()

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Capital Stockbrokers
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/markets" className="hover:text-primary">Markets</Link>
          <Link href="/trading" className="hover:text-primary">Trading</Link>
          <Link href="/research" className="hover:text-primary">Research</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </div>
        {isMobile && (
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
    </nav>
  )
} 