"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "HealthHub",
    subtitle: "AI Powered Health Companion",
    description:
      "Designed and developed HealthHub, an all-in-one healthcare app integrating AI-based symptom analysis, medical history management, doctor appointment booking, telemedicine, emergency services, and medicine-related tools, with a strong focus on user experience, data security, and accessibility.",
    technologies: ["Flutter", "Firebase", "Jupyter Notebook", "Railway"],
    features: [
      "AI-based symptom analysis",
      "Medical history management",
      "Doctor appointment booking",
      "Telemedicine integration",
      "Emergency services",
      "Medicine-related tools",
    ],
    image: "/images/healthhub-logo.png",
    color: "from-pink-500 to-red-500",
    category: "Mobile App",
    codeUrl: "https://github.com/dakshgopani/Health-Hub", // Replace with your GitHub repo
    demoUrl: "https://healthhub-diplomaproject.netlify.app/", // Replace with your live demo
  },
  {
    id: 2,
    title: "AI-VERSITY",
    subtitle: "Versatile AI Platform",
    description:
      "Built AI-VERSITY, a versatile AI-powered platform leveraging multiple APIs to deliver features like weather forecasting, news updates, dynamic presentation generation, image creation, cryptocurrency tracking, and chatbot interactions—designed for a global audience to redefine user experience through intelligent automation.",
    technologies: ["Streamlit", "Gemini", "Python"],
    features: [
      "Weather forecasting",
      "News updates",
      "Dynamic presentation generation",
      "Image creation",
      "Cryptocurrency tracking",
      "Chatbot interactions",
    ],
    image: "/images/ai-versity-logo.png",
    color: "from-purple-500 to-blue-500",
    category: "Web Platform",
    codeUrl: "https://github.com/rudraparmar76/AI-VERSITY", // Replace with your GitHub repo
    demoUrl: "https://www.youtube.com/watch?v=P3yKBbvZd7Q", // Replace with your live demo
  },
  {
    id: 3,
    title: "SVKM Student Portal",
    subtitle: "Academic Management System",
    description:
      "A collaborative effort by a team of passionate developers, designed to simplify your academic journey at SVKM institutions. This Java application offers a user-friendly interface and essential features, ensuring a seamless experience for students.",
    technologies: ["Java"],
    features: [
      "User-friendly interface",
      "Academic journey management",
      "Essential student features",
      "Seamless user experience",
      "Institution-specific tools",
      "Collaborative development",
    ],
    image: "/images/svkm-logo.png",
    color: "from-green-500 to-teal-500",
    category: "Desktop App",
    codeUrl: "https://github.com/Vinit062006/Student-Portal", // Replace with your GitHub repo
    demoUrl: "https://drive.google.com/file/d/1304lANThOIJxCBOHS8j60TDJGMsZc77y/view", // Replace with your live demo
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
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

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="font-open-sans text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions I've built, from AI-powered healthcare apps to versatile platforms that
            demonstrate my full-stack development capabilities and passion for creating impactful technology.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-violet-400/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="p-8 cursor-pointer group" onClick={() => toggleProject(project.id)}>
                    <div className="flex items-start gap-6">
                      {/* Project Icon */}
                      <div className="p-2 rounded-xl bg-gray-700/50 flex-shrink-0 group-hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-violet-400/20">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={`${project.title} project icon`}
                          className="w-16 h-16 text-white object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-montserrat font-bold text-2xl text-white">{project.title}</h3>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                            {project.category}
                          </Badge>
                        </div>
                        <p className="font-open-sans text-violet-400 mb-4">{project.subtitle}</p>
                        <p className="font-open-sans text-gray-300 leading-relaxed mb-6">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Expand Button */}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-600 hover:border-violet-400 hover:bg-violet-400/10 bg-transparent"
                              onClick={() => window.open(project.codeUrl, "_blank")}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                              onClick={() => window.open(project.demoUrl, "_blank")}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            {expandedProject === project.id ? "Less Details" : "More Details"}
                            <ChevronRight
                              className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                                expandedProject === project.id ? "rotate-90" : ""
                              }`}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedProject === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-8 border-t border-gray-700">
                      <div className="pt-6">
                        <h4 className="font-montserrat font-semibold text-lg text-white mb-4">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={feature}
                              className={`flex items-center gap-3 transition-all duration-300 ${
                                expandedProject === project.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                              }`}
                              style={{ transitionDelay: `${featureIndex * 100}ms` }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                              <span className="font-open-sans text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? "fade-in-up animate" : "fade-in-up"}`}
        >
          <p className="font-open-sans text-gray-400 mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-primary hover:opacity-90 transition-all duration-300 font-open-sans font-medium px-8 py-3 scale-on-hover">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 font-open-sans font-medium px-8 py-3 bg-transparent"
              onClick={() => {
                const element = document.getElementById("contact")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
