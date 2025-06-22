"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      update: () => void
      draw: () => void
    }> = []
    const particleCount = 50 // Keeping the same count for performance

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.2 // Doubled size range (was 1 + 0.1)
        this.speedX = Math.random() * 2 - 1 // Slightly increased speed range
        this.speedY = Math.random() * 2 - 1 // Slightly increased speed range
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)" // Slightly reduced opacity to balance larger size
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.fillStyle = "rgb(0, 0, 0)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Show content with fade-in
  useEffect(() => {
    // Set a shorter delay to make it more noticeable
    setTimeout(() => {
      setIsVisible(true)
    }, 500)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-12">
        {/* Logo */}
        <div className="w-32 h-32 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center p-4 border border-white/40 animate-fadeIn">
          <Image
            src="/csl-logo.jpg"
            alt="CSL Logo"
            width={120}
            height={120}
            className="rounded-full"
            priority
          />
        </div>

        {/* Coming Soon Text */}
        <div className="relative animate-fadeIn [animation-delay:300ms] pb-4">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text animate-shine"
              style={{
                backgroundImage: "linear-gradient(to right, #006B4F, #FFA500, #006B4F)",
                backgroundSize: "200% auto",
                padding: "0.5rem 0"
              }}>
            Coming Soon !!
          </h1>
          <div className="absolute -inset-1 blur-xl opacity-30"
               style={{
                 background: "linear-gradient(90deg, #006B4F, #FFA500, #006B4F)",
                 backgroundSize: "200% auto",
                 animation: "shine 3s linear infinite"
               }} />
        </div>

        {/* Description with fade-in animation */}
        <p className="text-xl text-white/80 text-center max-w-lg animate-fadeIn [animation-delay:600ms]">
          Gambia&apos;s first licensed stockbroking platform. 
          <br />
          Experience the future of trading.
        </p>

        {/* Auth Links */}
        <div className="flex gap-4 animate-fadeIn [animation-delay:900ms]">
          <Link 
            href="/signin"
            className="px-8 py-3 bg-[#006B4F] hover:bg-[#006B4F]/90 text-white rounded-xl font-medium transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/signup"
            className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white rounded-xl font-medium transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
