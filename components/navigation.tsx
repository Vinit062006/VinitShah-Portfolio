"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-montserrat font-black text-xl gradient-text">Vinit Shah</div>

          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-open-sans text-gray-300 hover:text-white transition-colors duration-200 hover:gradient-text"
              >
                {item}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="gradient-primary hover:opacity-90 transition-opacity font-open-sans font-medium"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  )
}
