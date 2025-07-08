"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Comprehensive analytics platform using machine learning to provide predictive insights for business intelligence.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.Js", "Python", "TensorFlow", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/leonislam-dev/ai-dashboard",
    featured: true,
  },
  {
    id: 2,
    title: "Deep Learning Image Classifier",
    description:
      "Advanced computer vision system for real-time image classification with 95% accuracy using CNN architecture.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "PyTorch", "OpenCV", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/leonislam-dev/image-classifier",
    featured: true,
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on Ethereum blockchain with smart contracts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Solidity", "Web3.js", "React", "Node.js"],
    liveUrl: null,
    githubUrl: "https://github.com/leonislam-dev/blockchain-voting",
    featured: false,
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "Scalable chat application with WebSocket support, file sharing, and end-to-end encryption.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/leonislam-dev/chat-app",
    featured: false,
  },
]

export function WorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing expertise in AI, web development, and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <div className={`relative ${project.featured ? "md:flex" : ""}`}>
                  <div className={`relative overflow-hidden ${project.featured ? "md:w-1/2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent
                    className={`p-6 ${project.featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 boder leading-relaxed">{project.description}</p>

                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/work">
              View All Projects
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
