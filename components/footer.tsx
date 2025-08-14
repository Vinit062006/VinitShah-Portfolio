"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-montserrat font-black text-2xl gradient-text mb-4">Vinit Shah</h3>
            <p className="font-open-sans text-gray-400 leading-relaxed">
              Full-stack developer passionate about creating seamless digital experiences. Currently pursuing Computer
              Science & Engineering in Mumbai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase())
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="font-open-sans text-gray-400 hover:text-white hover:gradient-text transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 mb-6">
              <p className="font-open-sans text-gray-400">Mumbai, India</p>
              <a
                href="mailto:vinit.shah@example.com"
                className="font-open-sans text-gray-400 hover:text-white transition-colors duration-200 block"
              >
                vinit06shah@gmail.com
              </a>
              <a
                href="tel:+919867208617"
                className="font-open-sans text-gray-400 hover:text-white transition-colors duration-200 block"
              >
                +91 9867208617
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 hover:border-violet-400 hover:bg-violet-400/10 bg-transparent"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 hover:border-violet-400 hover:bg-violet-400/10 bg-transparent"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="font-open-sans text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Vinit Shah. Made with <Heart className="w-4 h-4 text-red-400" /> using React & Next.js
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-gray-600 hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 mt-4 sm:mt-0 bg-transparent"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
