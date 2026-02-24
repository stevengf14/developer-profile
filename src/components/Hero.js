import { motion } from 'framer-motion'
import { ArrowDown, Terminal, Cpu, Brain } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-bg/50 to-cyber-bg" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Status indicators */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-cyber-accent rounded-full animate-pulse" />
            <span className="text-sm font-mono text-cyber-accent">SYSTEM ONLINE</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Terminal className="w-4 h-4 text-cyber-tertiary" />
            <span className="text-sm font-mono text-cyber-tertiary">AI_READY</span>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyber-accent cyber-border mx-auto">
              <Image 
                src="/profile.jpg" 
                alt="Steven GF Profile"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyber-accent rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-cyber-bg rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 font-mono"
        >
          <span className="gradient-text">STEVEN</span>
          <br />
          <span className="text-cyber-text">GUAMÁN FIGUEROA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-light mb-8 text-cyber-muted"
        >
          Senior Engineer & AI Specialist
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-cyber-text mb-12 max-w-3xl mx-auto font-mono"
        >
          <span className="text-cyber-accent">{'>'}</span> Driving innovation with Full Stack & Machine Learning solutions
          <span className="loading-dots"></span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="cyber-border bg-cyber-surface text-cyber-accent px-8 py-4 rounded-lg font-mono font-semibold hover-lift"
            onClick={() => document.getElementById('ai-spotlight')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Brain className="inline-block w-5 h-5 mr-2" />
            EXPLORE AI WORK
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="border border-cyber-secondary/50 text-cyber-secondary px-8 py-4 rounded-lg font-mono font-semibold hover-lift"
            onClick={() => document.getElementById('core-engineering')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Cpu className="inline-block w-5 h-5 mr-2" />
            VIEW ENGINEERING
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass p-6 rounded-lg">
            <div className="text-3xl font-bold gradient-text mb-2">7+</div>
            <div className="text-sm text-cyber-muted font-mono">YEARS EXPERIENCE</div>
          </div>
          <div className="glass p-6 rounded-lg">
            <div className="text-3xl font-bold gradient-text mb-2">IEEE/ACM</div>
            <div className="text-sm text-cyber-muted font-mono">PUBLISHED RESEARCH</div>
          </div>
          <div className="glass p-6 rounded-lg">
            <div className="text-3xl font-bold gradient-text mb-2">MS AI</div>
            <div className="text-sm text-cyber-muted font-mono">COMPLETED</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-cyber-muted"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
