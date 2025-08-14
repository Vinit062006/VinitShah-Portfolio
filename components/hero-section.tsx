"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-bg-animated opacity-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-violet-400 rounded-full opacity-20 floating`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}>
          <h1 className="font-montserrat font-black text-4xl sm:text-6xl lg:text-7xl mb-6">
            Hi, I'm <span className="gradient-text">Vinit Shah</span>
          </h1>

          <p className="font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
            I build seamless digital experiences
          </p>

          <p className="font-open-sans text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Diploma graduate in Computer Science & Engineering from Mumbai, passionate about crafting full-stack
            solutions that bring ideas to life.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="font-open-sans text-sm">Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-open-sans text-sm">9867208617</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-600 hover:border-violet-400 hover:bg-violet-400/10 bg-transparent"
              asChild
            >
              <a
                href="https://github.com/Vinit062006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/vinit-shah-2aba49256/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-600 hover:border-violet-400 hover:bg-violet-400/10 bg-transparent"
              asChild
            >
              <a href="mailto:vinit06shah@gmail.com" aria-label="Send Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="gradient-primary hover:opacity-90 transition-all duration-300 font-open-sans font-medium px-8 py-3 scale-on-hover"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-gray-600 hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 font-open-sans font-medium px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
