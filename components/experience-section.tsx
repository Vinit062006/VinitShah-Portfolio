"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react"

const experience = {
  title: "Frontend Engineer",
  company: "Rite Technologies",
  location: "Mumbai, India",
  duration: "May 2024 – June 2024",
  type: "Internship",
  achievements: [
    "Contributed to automation tasks, streamlining development and testing processes",
    "Developed and maintained Android features using Kotlin",
    "Resolved bugs in existing codebase to improve app performance and stability",
    "Collaborated with the team on real-world software projects using Git and Agile methodologies",
    "Gained exposure to REST APIs, and production-level debugging",
  ],
  technologies: ["Kotlin", "Android", "Git", "REST APIs", "Agile", "Debugging"],
}

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedAchievements, setAnimatedAchievements] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate achievements one by one
          experience.achievements.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedAchievements((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="font-open-sans text-lg text-gray-400 max-w-2xl mx-auto">
            Real-world experience building scalable applications and collaborating with development teams using modern
            technologies and methodologies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-cyan-400"></div>

          {/* Experience Card */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>

            <div className="ml-20">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-violet-400/50 transition-all duration-300 scale-on-hover">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="font-montserrat font-bold text-2xl text-white mb-2">{experience.title}</h3>
                      <div className="flex items-center gap-2 text-violet-400 mb-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-open-sans font-semibold">{experience.company}</span>
                        <Badge variant="secondary" className="bg-violet-400/20 text-violet-400 ml-2">
                          {experience.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-open-sans text-sm">{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-open-sans text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-montserrat font-semibold text-lg text-white mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className={`flex items-start gap-3 transition-all duration-500 ${
                            animatedAchievements.includes(index)
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-4"
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="font-open-sans text-gray-300 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 ${
                            isVisible ? "animate-pulse" : ""
                          }`}
                          style={{ animationDelay: `${index * 100}ms`, animationDuration: "2s" }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Future placeholder */}
          <div
            className={`relative mt-12 transition-all duration-1000 delay-600 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-900 z-10"></div>

            <div className="ml-20">
              <Card className="bg-gray-800/30 border-gray-700 border-dashed">
                <CardContent className="p-8 text-center">
                  <h3 className="font-montserrat font-bold text-xl text-gray-400 mb-2">Next Opportunity</h3>
                  <p className="font-open-sans text-gray-500">
                    Ready to contribute to innovative projects and grow as a full-stack developer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
        >
          <p className="font-open-sans text-gray-400 mb-6">
            Interested in working together? Let's discuss how I can contribute to your team.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="gradient-primary hover:opacity-90 transition-all duration-300 font-open-sans font-medium px-8 py-3 rounded-lg scale-on-hover"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  )
}
