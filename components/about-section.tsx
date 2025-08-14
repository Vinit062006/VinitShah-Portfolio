"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Brain, Award, GraduationCap } from "lucide-react"

const skills = [
  { category: "Languages & Frameworks", items: ["C", "Java", "Python", "JavaScript", "React"], icon: Code },
  { category: "Tools & Platforms", items: ["GitHub", "AWS", "Linux"], icon: Database },
  { category: "Databases & Interests", items: ["MongoDB", "SQL", "Firebase", "ML", "OS", "DSA"], icon: Brain },
]

const achievements = [
  { title: "GPA: 3.9/4.0", description: "Consistent academic excellence", icon: Award },
  { title: "Full-Stack Development", description: "Frontend & Backend expertise", icon: Code },
  { title: "Mobile Development", description: "Flutter & Android (Kotlin)", icon: Smartphone },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="font-open-sans text-lg text-gray-400 max-w-3xl mx-auto">
            Passionate about building seamless digital experiences with a creative edge in UI/UX. Strong grasp of core
            data structures and networking, eager to learn, collaborate, and make an impact through technology.
          </p>
        </div>

        {/* Education Card */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
        >
          <Card className="bg-gray-800/50 border-gray-700 hover:border-violet-400/50 transition-all duration-300 scale-on-hover">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg gradient-primary">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                    Diploma in Computer Science & Engineering
                  </h3>
                  <p className="font-open-sans text-violet-400 mb-2">Shri SVKM's Bhagubhai Mafatlal Polytechnic</p>
                  <p className="font-open-sans text-gray-400 mb-4">August 2022 – May 2025 | GPA: 3.9/4.0</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "Mobile App Development (Flutter)",
                      "Database Management",
                      "Machine Learning Basics",
                    ].map((course) => (
                      <Badge key={course} variant="secondary" className="bg-gray-700 text-gray-300">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
        >
          <h3 className="font-montserrat font-bold text-2xl text-center mb-8 gradient-text">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={skillGroup.category}
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 scale-on-hover"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <skillGroup.icon className="w-5 h-5 text-cyan-400" />
                    <h4 className="font-montserrat font-semibold text-white">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}>
          <h3 className="font-montserrat font-bold text-2xl text-center mb-8 gradient-text">Key Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="bg-gray-800/50 border-gray-700 hover:border-violet-400/50 transition-all duration-300 scale-on-hover"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-lg gradient-primary mb-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-montserrat font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="font-open-sans text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
