"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Rocket, Users } from "lucide-react"
import Image from "next/image"

const skills = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expert in modern web and technologies including React, Next.js, Node.js, and cloud platforms.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Specialized in deep learning, neural networks, and AI-powered application development.",
  },
  {
    icon: Rocket,
    title: "Innovation & Research",
    description: "Passionate about exploring technologies, and implementing innovative solutions.",
  },
  // {
  //   icon: Users,
  //   title: "Leadership",
  //   description: "Experienced in leading teams and mentoring.",
  // },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate software developer with a vision for the future of AI and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-2xl" />
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Ashraful Islam Leon"
                width={400}
                height={500}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Building the Future with AI</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a professional software developer, I'm deeply passionate about the transformative power of artificial
              intelligence and deep learning. I believe we're on the cusp of a technological revolution that will
              reshape how we interact with digital systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology spans full-stack development, machine learning, and AI research. I'm particularly
              excited about the potential of neural networks, natural language processing, and computer vision to solve
              complex real-world problems.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-2 text-primary">AI's Impact on Our Future</h4>
              <p className="text-sm text-muted-foreground">
                "The convergence of AI and human creativity will unlock unprecedented possibilities. From personalized
                healthcare to sustainable energy solutions, AI will be the catalyst for solving greatest
                challenges."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg border mb-2 underline">{skill.title}</h4>
                  <p className="text-md text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
