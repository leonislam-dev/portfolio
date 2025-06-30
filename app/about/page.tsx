"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Download, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Pandas"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
]

const experience = [
  {
    title: "Senior Software Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading AI-powered web application development and mentoring junior developers.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed scalable web applications and implemented machine learning solutions.",
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    period: "2018 - 2020",
    description: "Built responsive web applications and contributed to product architecture decisions.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building the future through code and artificial intelligence
          </p>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-2xl" />
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Ashraful Islam Leon"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Hello, I'm Leon</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a professional software developer with a deep passion for artificial intelligence and its potential to
              transform our world. With over 6 years of experience in full-stack development, I specialize in creating
              innovative solutions that bridge the gap between cutting-edge AI research and practical applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology began with a fascination for problem-solving and has evolved into a mission to
              harness the power of AI for positive impact. I believe that the convergence of human creativity and
              artificial intelligence will unlock unprecedented possibilities for innovation.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-2 text-primary">My Vision</h3>
              <p className="text-sm text-muted-foreground">
                "To create AI-powered solutions that enhance human capabilities and solve real-world problems, making
                technology more accessible and beneficial for everyone."
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild>
                <Link href="mailto:leon@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="text-sm text-muted-foreground">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Philosophy Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Card className="border-0 bg-gradient-to-br from-primary/5 to-purple-600/5 border border-primary/20">
            <CardContent className="p-8">
              <Brain className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">AI & The Future</h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We stand at the threshold of an AI revolution that will fundamentally transform how we work, create, and
                solve problems. From personalized healthcare and sustainable energy solutions to creative AI assistants
                and autonomous systems, the potential applications are limitless. My goal is to be at the forefront of
                this transformation, building ethical AI solutions that augment human intelligence rather than replace
                it.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
