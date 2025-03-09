"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, Laptop, Server, Terminal, Wrench } from "lucide-react"
import { GlowingCard, GlowingTabs } from "@/components/ui/glowing-card"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      id: "languages",
      name: "Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: ["Java", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Laptop className="h-5 w-5" />,
      skills: ["React", "React Native", "Redux", "Material-UI", "Tailwind CSS", "Next.js", "Responsive Design"],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Spring Boot", "Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT", "OAuth"],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Database Design", "ORM"],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Kubernetes", "Nginx"],
    },
    {
      id: "tools",
      name: "Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Postman", "Kafka", "Jira", "Figma", "VS Code", "IntelliJ IDEA"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans across various technologies, frameworks, and methodologies.
          </p>
        </div>

        <div ref={ref}>
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category, categoryIndex) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        {category.icon}
                        {category.name}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                            className="bg-muted/50 rounded-lg p-3 text-center hover:bg-muted transition-colors"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

