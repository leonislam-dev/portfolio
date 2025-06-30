"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const allProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "A comprehensive analytics platform using machine learning to provide predictive insights for business intelligence.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    category: "AI/ML",
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
    category: "AI/ML",
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
    category: "Blockchain",
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
    category: "Web App",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/leonislam-dev/chat-app",
    featured: false,
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    category: "Web App",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/leonislam-dev/ecommerce",
    featured: false,
  },
  {
    id: 6,
    title: "Neural Network Visualizer",
    description: "Interactive tool for visualizing neural network architectures and training processes in real-time.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["D3.js", "Python", "Flask", "TensorFlow"],
    category: "AI/ML",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/leonislam-dev/nn-visualizer",
    featured: false,
  },
]

const categories = ["All", "AI/ML", "Web App", "Blockchain"]

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI, web development, and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="min-w-[100px]"
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{project.description}</p>

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
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
