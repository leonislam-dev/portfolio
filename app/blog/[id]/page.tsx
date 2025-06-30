"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock blog post data - in a real app, this would come from a CMS or database
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: 1,
      title: "The Future of AI in Web Development",
      content: `
        <p>Artificial Intelligence is rapidly transforming the landscape of web development, ushering in an era of unprecedented innovation and efficiency. As we stand on the brink of this technological revolution, it's crucial to understand how AI will reshape the way we build, deploy, and maintain web applications.</p>

        <h2>The Current State of AI in Web Development</h2>
        <p>Today's web development already incorporates various AI-powered tools and services. From intelligent code completion in IDEs to automated testing frameworks, AI is quietly revolutionizing our development workflows. However, this is just the beginning.</p>

        <h2>Automated Code Generation</h2>
        <p>One of the most exciting developments is AI-powered code generation. Tools like GitHub Copilot and ChatGPT are already helping developers write code faster and more efficiently. In the near future, we can expect even more sophisticated AI assistants that can:</p>
        <ul>
          <li>Generate entire components based on natural language descriptions</li>
          <li>Automatically optimize code for performance and accessibility</li>
          <li>Suggest architectural improvements and refactoring opportunities</li>
          <li>Create comprehensive test suites automatically</li>
        </ul>

        <h2>Intelligent User Interfaces</h2>
        <p>AI will enable the creation of truly intelligent user interfaces that adapt to user behavior in real-time. These interfaces will:</p>
        <ul>
          <li>Personalize content and layout based on user preferences</li>
          <li>Predict user actions and pre-load relevant content</li>
          <li>Provide contextual help and guidance</li>
          <li>Automatically adjust for accessibility needs</li>
        </ul>

        <h2>The Road Ahead</h2>
        <p>As we look to the future, the integration of AI in web development will only deepen. We're moving towards a world where AI doesn't just assist developers—it becomes an integral part of the development process itself.</p>

        <p>The key to success in this AI-driven future will be learning to work alongside these intelligent systems, leveraging their capabilities while maintaining our human creativity and problem-solving skills.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      author: "Ashraful Islam Leon",
    },
    "2": {
      id: 2,
      title: "Deep Learning: From Theory to Production",
      content: `
        <p>Deep learning has evolved from an academic curiosity to a practical tool that powers some of the world's most innovative applications. This comprehensive guide will walk you through the journey from understanding the theoretical foundations to deploying robust deep learning models in production environments.</p>

        <h2>Understanding the Fundamentals</h2>
        <p>Before diving into production considerations, it's essential to have a solid grasp of deep learning fundamentals. Neural networks, at their core, are mathematical models inspired by the human brain's structure and function.</p>

        <h2>From Research to Reality</h2>
        <p>The transition from research prototypes to production-ready systems involves several critical considerations:</p>
        <ul>
          <li><strong>Data Pipeline Architecture:</strong> Designing robust data ingestion and preprocessing systems</li>
          <li><strong>Model Optimization:</strong> Techniques like quantization and pruning for efficient inference</li>
          <li><strong>Scalability:</strong> Ensuring your models can handle production-level traffic</li>
          <li><strong>Monitoring and Maintenance:</strong> Implementing systems to track model performance over time</li>
        </ul>

        <h2>Production Deployment Strategies</h2>
        <p>Deploying deep learning models in production requires careful consideration of various factors:</p>

        <h3>Model Serving Options</h3>
        <ul>
          <li>REST APIs for synchronous predictions</li>
          <li>Message queues for asynchronous processing</li>
          <li>Edge deployment for low-latency applications</li>
          <li>Batch processing for large-scale inference</li>
        </ul>

        <h2>Best Practices and Lessons Learned</h2>
        <p>Through years of deploying deep learning models in production, several best practices have emerged:</p>
        <ul>
          <li>Always version your models and data</li>
          <li>Implement comprehensive logging and monitoring</li>
          <li>Plan for model updates and rollbacks</li>
          <li>Consider the ethical implications of your models</li>
        </ul>

        <p>The journey from deep learning theory to production is challenging but rewarding. By following these guidelines and continuously learning from the community, you can build robust, scalable AI systems that deliver real value.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Machine Learning",
      author: "Ashraful Islam Leon",
    },
  }

  return posts[id as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div>By {post.author}</div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button size="sm" variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="https://github.com/leonislam-dev" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="https://linkedin.com/in/leonislam" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </header>

          <div className="relative mb-12">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        <motion.div
          className="mt-16 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6">
              Follow me for more insights on AI, web development, and technology trends.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="https://github.com/leonislam-dev" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Follow on GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog">More Articles</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
