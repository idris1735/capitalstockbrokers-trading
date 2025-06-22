"use client"

import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('/bg-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Glass Container Card */}
      <div className="w-full max-w-sm bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 p-6 space-y-4 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center p-2 border border-white/40">
            <Image
              src="/csl-logo.jpg"
              alt="CSL Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Title and Description */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold text-white">Create an account</h1>
          <p className="text-white/80 text-sm">
            Join Gambia&apos;s first licensed stockbroking platform
          </p>
        </div>

        {/* Form */}
        <form className="space-y-3">
          {/* Full Name Input */}
          <Input
            type="text"
            placeholder="Full Name"
            className="h-10 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder:text-white/60 focus:ring-[#006B4F] focus:border-[#006B4F] text-sm"
          />

          {/* Email Input */}
          <Input
            type="email"
            placeholder="Email Address"
            className="h-10 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder:text-white/60 focus:ring-[#006B4F] focus:border-[#006B4F] text-sm"
          />

          {/* Password Input */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="h-10 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder:text-white/60 focus:ring-[#006B4F] focus:border-[#006B4F] text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="h-10 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder:text-white/60 focus:ring-[#006B4F] focus:border-[#006B4F] text-sm"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Sign Up Button */}
          <Button className="w-full h-10 bg-[#006B4F] hover:bg-[#006B4F]/90 text-white rounded-lg font-medium transition-colors text-sm">
            Create Account
          </Button>
        </form>

        {/* Social Login */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/30"></div>
            <p className="text-white/80 text-xs">Or sign up with</p>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>
          <div className="flex justify-center gap-3">
            <button className="w-10 h-10 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg flex items-center justify-center hover:bg-[#006B4F]/20 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#FFFFFF"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FFFFFF"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#FFFFFF"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg flex items-center justify-center hover:bg-[#006B4F]/20 transition-colors">
              <svg className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg flex items-center justify-center hover:bg-[#006B4F]/20 transition-colors">
              <svg className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 24 24">
                <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2.5a4.38 4.38 0 0 0-3 1.52 4.09 4.09 0 0 0-1 3 3.62 3.62 0 0 0 2.94-1.83zm2 7.07a4.51 4.51 0 0 1 2.16-3.78 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .92-3.83.92-.83 0-2.12-.89-3.48-.87a4.92 4.92 0 0 0-4.14 2.53c-1.77 3.07-.46 7.63 1.27 10.13.84 1.22 1.85 2.59 3.17 2.54 1.27-.05 1.75-.82 3.28-.82s2 .82 3.33.79c1.38-.03 2.25-1.25 3.09-2.47a11 11 0 0 0 1.4-2.87 4.41 4.41 0 0 1-2.69-4.1z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-white/80 text-sm">
            Already have an account?{" "}
            <Link href="/signin" className="text-[#FFA500] hover:text-[#FFA500]/90 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 