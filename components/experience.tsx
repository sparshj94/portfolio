"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Zap, Code, Server, Smartphone } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experienceItems = [
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "High-Performance UI",
      description:
        "Engineered responsive interfaces that improved load times by 35% and increased user engagement by 40%.",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: "Cross-Platform Development",
      description: "Spearheaded application development across platforms that boosted user retention by 25%.",
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Client Collaboration",
      description: "Translated requirements into intuitive designs, achieving a 30% rise in client satisfaction.",
    },
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "Modular Components",
      description:
        "Developed with React (hooks, Redux, Context API) and optimized with code splitting and lazy loading.",
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: "API Integration",
      description:
        "Integrated RESTful APIs ensuring 99.9% system uptime through seamless frontend-backend communication.",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: "Mobile-First Design",
      description: "Designed mobile-first applications that increased mobile traffic by 40%.",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a Remote Frontend Developer and Full-Stack Engineer, I've delivered impactful solutions across various
            projects.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowingCard containerClassName="h-full">
                <div className="flex flex-row items-center gap-2 pb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <GlowingCard containerClassName="border-0">
            <div className="flex items-start gap-4">
              <Briefcase className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Remote Frontend Developer & Full-Stack Engineer</h3>
                <p className="text-muted-foreground mt-2">
                  I've worked remotely with clients across different industries, delivering high-quality solutions that
                  combine technical excellence with business value. My experience spans the entire development lifecycle,
                  from initial concept and design to deployment and maintenance.
                </p>
              </div>
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  )
}

