import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield, TrendingUp, Zap, Award } from 'lucide-react'

export default function CoreEngineering() {
  const technologies = [
    {
      name: "Java",
      level: 95,
      color: "bg-cyber-accent"
    },
    {
      name: "Spring Boot",
      level: 90,
      color: "bg-cyber-tertiary"
    },
    {
      name: "React",
      level: 88,
      color: "bg-cyber-secondary"
    },
    {
      name: "Redux-Saga",
      level: 85,
      color: "bg-cyber-accent"
    },
    {
      name: "Python",
      level: 82,
      color: "bg-cyber-tertiary"
    },
    {
      name: "Microservices",
      level: 87,
      color: "bg-cyber-secondary"
    }
  ]

  const experience = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Galileo Financial Technologies",
      description: "Senior Software Engineer leading full-stack development and microservices architecture for financial solutions",
      achievements: [
        "Technical Leadership & Design of large-scale applications",
        "Scalable microservices architecture with Spring Boot",
        "Mentorship and code reviews for junior developers",
        "CI/CD pipeline implementation and automation"
      ],
      tech: ["Java", "Spring Boot", "React", "Redux-Saga", "Microservices"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Banco Internacional Ecuador",
      description: "Programmer Analyst developing core banking systems and satellite applications for banking core updates",
      achievements: [
        "IEEE 830 standard compliance for requirements",
        "Banking core satellite applications development",
        "SOAP/REST web services with Java 7",
        "Mobile authentication and authorization services"
      ],
      tech: ["Java EE", "SOAP", "REST", "Windows Server", "MySQL", "Oracle"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AlterBios",
      description: "Software Developer creating electronic billing systems and inventory management solutions",
      achievements: [
        "Complete electronic billing system development",
        "Custom inventory management system",
        "Native Android applications with MVVM",
        "SQL and NoSQL database integration"
      ],
      tech: ["Java EE", "Android", "Backbone.js", "SQLite", "MongoDB"]
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
    <section id="core-engineering" className="relative py-20 overflow-hidden">
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
            <Code className="w-5 h-5 text-cyber-secondary" />
            <span className="text-sm font-mono text-cyber-secondary">CORE ENGINEERING</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cyber-secondary">7+ Years</span> Enterprise Experience
          </h2>
          
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto font-mono">
            Senior Software Engineer with proven expertise in banking, fintech, and full-stack development using Java, Spring Boot, and React
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="glass p-6 rounded-lg text-center cyber-border">
            <TrendingUp className="w-8 h-8 text-cyber-accent mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-1">$50B+</div>
            <div className="text-sm text-cyber-muted font-mono">Transactions Processed</div>
          </div>
          <div className="glass p-6 rounded-lg text-center cyber-border">
            <Zap className="w-8 h-8 text-cyber-tertiary mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-1">&lt;100ms</div>
            <div className="text-sm text-cyber-muted font-mono">Response Time</div>
          </div>
          <div className="glass p-6 rounded-lg text-center cyber-border">
            <Database className="w-8 h-8 text-cyber-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-1">10M+</div>
            <div className="text-sm text-cyber-muted font-mono">Daily Active Users</div>
          </div>
          <div className="glass p-6 rounded-lg text-center cyber-border">
            <Shield className="w-8 h-8 text-cyber-accent mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-1">100%</div>
            <div className="text-sm text-cyber-muted font-mono">Security Compliance</div>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-8 rounded-xl cyber-border hover-lift"
            >
              <div className="text-cyber-secondary mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-cyber-text">{item.title}</h3>
              <p className="text-cyber-muted mb-6 font-mono text-sm">{item.description}</p>
              
              <div className="space-y-2 mb-6">
                {item.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber-accent rounded-full" />
                    <span className="text-sm text-cyber-text font-mono">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyber-secondary/10 border border-cyber-secondary/30 rounded-full text-xs font-mono text-cyber-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-cyber-text">Technology Proficiency</h3>
            <p className="text-cyber-muted font-mono">Core technologies powering enterprise solutions</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
