"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative animate-pulse">
        <Image
          src="/csl-logo.jpg"
          alt="CSL Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="absolute inset-0 border-t-4 border-[#006B4F] rounded-full animate-spin"></div>
      </div>
    </div>
  )
} 