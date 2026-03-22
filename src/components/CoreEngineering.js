import { motion } from 'framer-motion'
import { Database, Cloud, Shield, Code } from 'lucide-react'

export default function CoreEngineering() {
  const experience = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Galileo Financial Technologies",
      roles: [
        { title: "Senior Software Engineer", period: "Sep 2025 - Present" },
        { title: "Full Stack Developer", period: "Mar 2022 - Sep 2025" }
      ],
      description: "Leading full-stack development and microservices architecture for large-scale financial solutions.",
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
      roles: [
        { title: "Programmer Analyst", period: "Jan 2020 - Mar 2022" }
      ],
      description: "Developed core banking systems and satellite applications for banking core updates.",
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
      roles: [
        { title: "Software Developer", period: "Mar 2019 - Jan 2020" }
      ],
      description: "Created electronic billing systems and inventory management solutions.",
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

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-8 rounded-xl cyber-border hover-lift"
            >
              <div className="text-cyber-secondary mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-cyber-text">{item.title}</h3>
              <div className="mb-6 space-y-3">
                {item.roles.map((role, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-l-2 border-cyber-secondary/50 pl-4">
                    <span className="text-cyber-accent font-semibold">{role.title}</span>
                    <span className="text-xs font-mono text-cyber-muted">{role.period}</span>
                  </div>
                ))}
              </div>
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
      </div>
    </section>
  )
}
