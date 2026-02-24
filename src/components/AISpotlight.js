import { motion } from 'framer-motion'
import { Brain, Eye, Code, Award, BookOpen, ExternalLink } from 'lucide-react'

export default function AISpotlight() {
  const publications = [
    {
      title: "Vehicle Counting System in Urban Areas: A Practical Case",
      venue: "IEEE 7th International Conference for Convergence in Technology (I2CT)",
      year: "2022",
      authors: "Almeida J, Guamán S, Gunn Yoo S",
      doi: "10.1109/I2CT54291.2022.9823982",
      url: "https://ieeexplore.ieee.org/document/9823982",
      description: "Computer vision system for vehicle detection and counting using iterative development methodology for urban traffic management.",
      citations: "79 citations",
      views: "Full text views available"
    },
    {
      title: "Device Control System for a Smart Home using Voice Commands: A Practical Case",
      venue: "ACM Conference: 2018 10th International Conference (ICIME)",
      year: "2018",
      authors: "Guamán S, Calvopiña A, Orta P, Tapia F, Gunn Yoo S",
      doi: "10.1145/3285957.3285977",
      url: "https://dl.acm.org/doi/10.1145/3285957.3285977",
      description: "Practical case of device control through voice recognition, using Amazon Echo Dot, Raspberry Pi, and Amazon Cloud with an ngrok server.",
      citations: "17 citations",
      views: "ResearchGate full-text available"
    }
  ]

  const expertise = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Applied AI Research",
      description: "Master's in Applied AI completed with focus on practical implementations and real-world solutions",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "CNN", "Bio-inspired Computing"]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Specialized in object detection, image recognition, and facial recognition systems using YOLO, OpenCV",
      skills: ["Object Detection", "Facial Recognition", "YOLO", "OpenCV", "FaceNet"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Senior Full Stack Engineer",
      description: "Expert-level full-stack development using AI-powered tools like Cursor, Windsurf, and MCPs for enhanced productivity",
      skills: ["React", "Spring Boot", "Redux", "Microservices", "REST APIs", "AI Assistants"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <section id="ai-spotlight" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Brain className="w-5 h-5 text-cyber-accent" />
            <span className="text-sm font-mono text-cyber-accent">AI SPOTLIGHT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Applied AI</span> Expertise
          </h2>
          
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto font-mono">
          Leading research in Computer Vision and Smart Home technologies with publications in premier IEEE/ACM venues and completed Master&apos;s in Applied AI
        </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-8 rounded-xl cyber-border hover-lift"
            >
              <div className="text-cyber-accent mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-cyber-text">{item.title}</h3>
              <p className="text-cyber-muted mb-6 font-mono text-sm">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyber-accent/10 border border-cyber-accent/30 rounded-full text-xs font-mono text-cyber-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-cyber-tertiary" />
              <span className="text-sm font-mono text-cyber-tertiary">ACADEMIC CONTRIBUTIONS</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-cyber-tertiary">IEEE/ACM</span> Publications
            </h3>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass p-6 rounded-lg cyber-border hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-cyber-text">
                      {pub.title}
                    </h4>
                    <p className="text-cyber-muted font-mono text-sm mb-3">
                      {pub.authors} • {pub.venue} • {pub.year}
                    </p>
                    <p className="text-cyber-text mb-4">{pub.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-cyber-muted">
                        DOI: {pub.doi}
                      </span>
                      {pub.url && (
                        <motion.a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-cyber-surface rounded-full text-xs font-mono text-cyber-accent hover-lift"
                        >
                          <ExternalLink className="w-3 h-3" />
                          VIEW PAPER
                        </motion.a>
                      )}
                      {pub.citations && (
                        <span className="text-xs font-mono text-cyber-tertiary ml-2">
                          {pub.citations}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyber-accent" />
                    <span className="text-sm font-mono text-cyber-accent">PEER REVIEWED</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
