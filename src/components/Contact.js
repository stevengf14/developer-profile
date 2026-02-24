import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Globe, Send } from 'lucide-react'

export default function Contact() {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/stevengf14",
      color: "hover:text-cyber-accent"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/stevengf14",
      color: "hover:text-cyber-accent"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: "mailto:stevengf14@gmail.com",
      color: "hover:text-cyber-tertiary"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Portfolio",
      url: "https://thirsty-gates-d5fcad.netlify.app/",
      color: "hover:text-cyber-secondary"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="relative py-20 overflow-hidden">
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
            <Send className="w-5 h-5 text-cyber-accent" />
            <span className="text-sm font-mono text-cyber-accent">CONNECT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto font-mono">
            Open to collaborations, consulting opportunities, and interesting conversations about AI and software engineering
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-xl cyber-border hover-lift text-center group"
            >
              <div className="text-cyber-muted mb-4 group-hover:text-cyber-accent transition-colors">
                {link.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyber-text group-hover:text-cyber-accent transition-colors">
                {link.name}
              </h3>
              <div className="text-sm font-mono text-cyber-muted truncate">
                {link.url.replace('https://', '').replace('mailto:', '')}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="glass p-8 rounded-xl cyber-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-cyber-text">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-cyber-muted mb-6 font-mono">
              Let&apos;s discuss how applied AI and software engineering can transform your ideas into reality
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="cyber-border bg-cyber-surface text-cyber-accent px-8 py-4 rounded-lg font-mono font-semibold hover-lift"
              onClick={() => window.open('mailto:stevengf14@gmail.com')}
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              GET IN TOUCH
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-cyber-surface/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-cyber-muted font-mono text-sm">
              © 2024 Steven Guamán Figueroa. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-cyber-muted font-mono text-sm">
              <span>Built with</span>
              <span className="text-cyber-accent">&lt;3</span>
              <span>using React &amp; AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
