"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="sm"
      className="fixed bottom-8 right-8 z-50 border-gray-600 hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm"
    >
      <ArrowUp className="w-4 h-4 mr-2" />
      Back to Top
    </Button>
  )
}
