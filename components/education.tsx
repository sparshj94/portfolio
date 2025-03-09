"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and educational background.</p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <GraduationCap className="h-6 w-6 text-primary mt-1" />
                <div>
                  <CardTitle className="text-xl">Bachelor of Technology</CardTitle>
                  <p className="text-muted-foreground">Artificial Intelligence and Data Science</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Expected 2026</span>
                  </div>
                  <p>Poornima College Of Engineering, Jaipur</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Relevant Coursework:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Data Structures and Algorithms</li>
                      <li>Database Management Systems</li>
                      <li>Object-Oriented Programming</li>
                      <li>Web Development</li>
                      <li>Machine Learning Fundamentals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

