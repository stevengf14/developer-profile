import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, X } from 'lucide-react'
import { useState } from 'react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/stevengf14",
      color: "hover:text-cyber-accent"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/stevengf14",
      color: "hover:text-cyber-accent"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: "mailto:stevengf14@gmail.com",
      color: "hover:text-cyber-tertiary"
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Contact Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-cyber-accent rounded-full flex items-center justify-center shadow-lg cyber-border"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-cyber-bg" />
        ) : (
          <Mail className="w-6 h-6 text-cyber-bg" />
        )}
      </motion.button>

      {/* Contact Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-16 right-0 glass p-4 rounded-lg cyber-border min-w-[200px]"
        >
          <div className="text-center mb-3">
            <p className="text-sm font-mono text-cyber-text">Contact Me</p>
          </div>
          <div className="space-y-2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 p-2 rounded-lg text-cyber-muted transition-colors ${link.color}`}
              >
                {link.icon}
                <span className="text-sm font-mono">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
