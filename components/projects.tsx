"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Expense Tracker App",
      description:
        "A comprehensive expense tracking application with AI-powered receipt scanning and advanced analytics.",
      image: "/expense-project.jpg",
      aspectRatio: "aspect-square",
      technologies: ["Spring Boot", "React Native", "MySQL", "AWS", "Apache Kafka", "JWT", "Docker"],
      achievements: [
        "50% increase in uptime and fault tolerance",
        "80% reduction in manual data entry through Mistral AI API integration",
        "25% reduction in server costs",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "E-Commerce Web Application",
      description: "A full-featured e-commerce platform with secure payment processing and optimized image delivery.",
      image: "/ecomm.jpg",
      aspectRatio: "aspect-[16/9]",
      technologies: ["MongoDB", "Express", "React.js", "Node.js", "Cloudinary", "Razorpay"],
      achievements: [
        "50% boost in user engagement",
        "40% reduction in image load times",
        "Successfully processed over 500 secure transactions",
      ],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and expertise in full-stack development.
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col lg:flex-row gap-8 items-center"
            >
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <GlowingCard containerClassName="p-0 overflow-hidden">
                  <div className={`relative w-full ${project.aspectRatio} max-w-[500px] mx-auto`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
                      priority={index === 0}
                    />
                  </div>
                </GlowingCard>
              </div>

              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <GlowingCard>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl md:text-3xl">{project.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="px-0 pt-4">
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default" size="sm" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </GlowingCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

