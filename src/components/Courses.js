import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar, ChevronDown, Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Courses() {
  const [showAllCertifications, setShowAllCertifications] = useState(false)
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "Master of Science in Applied Artificial Intelligence",
      institution: "Universidad Internacional del Ecuador",
      status: "Completed",
      period: "2024 - 2026",
      description: "Advanced specialization in Machine Learning, Deep Learning, Computer Vision, Neural Networks, and AI applications in real-world scenarios. Research focused on practical implementations and industry-relevant solutions.",
      highlights: [
        "Thesis successfully defended",
        "Machine Learning & Deep Learning algorithms",
        "Computer Vision and Image Processing",
        "Neural Networks & Convolutional Networks",
        "Bio-inspired Computing applications",
        "AI-powered development tools integration",
        "Natural Language Processing",
        "Predictive modeling and analytics",
        "Reinforcement Learning systems"
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "Systems and Computing Engineer",
      institution: "Universidad de las Fuerzas Armadas - ESPE",
      status: "Completed",
      period: "2016 - 2020",
      description: "Comprehensive engineering education with focus on software development, database systems, algorithms, and enterprise architecture. Strong foundation in computer science fundamentals and system design.",
      highlights: [
        "Software architecture and design patterns",
        "Database systems and SQL optimization",
        "Full-stack web development",
        "Enterprise software engineering",
        "Java enterprise development",
        "System integration and deployment",
        "Network security and protocols"
      ]
    }
  ]

  const certifications = [
    {
      title: "Botrytis - AI Disease Detection",
      issuer: "Personal Project",
      year: "2023",
      description: "Machine Learning models for detecting Botrytis diseases in flowers using AI.",
      url: "https://github.com/stevengf14/botrytis",
      icon: <Github className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "React Developer Guide 2023",
      issuer: "Practice Repository",
      year: "2023",
      description: "Collection of projects demonstrating various React techniques and modern frontend patterns.",
      url: "https://github.com/stevengf14/react-guide-2023",
      icon: <Github className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Functional Programming with Java",
      issuer: "Course Project",
      year: "2023",
      description: "Exploration and application of functional programming paradigms in Java.",
      url: "https://github.com/stevengf14/functional-programming/tree/main/src/main/java/ec/com/linkedinlearning/functionalprogramming",
      icon: <Github className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Reactive Programming with Spring WebFlux",
      issuer: "Training Project",
      year: "2023",
      description: "Comprehensive implementation of Java reactive programming, Spring WebFlux, and Eureka.",
      url: "https://github.com/stevengf14/springboot-webflux-training",
      icon: <Github className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "SVision - Applied Computer Vision",
      issuer: "Personal Project",
      year: "2024",
      description: "Advanced CV project featuring facial recognition, edge detection, and image scaling.",
      url: "https://github.com/stevengf14/svision",
      icon: <Github className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Executive Leadership",
      issuer: "Universidad Internacional del Ecuador",
      year: "2025",
      description: "Transformative and referential executive leadership program strengthening leadership skills",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "AI Immersion + Google Gemini",
      issuer: "Alura",
      year: "2025",
      description: "Advanced AI integration with Google Gemini technologies",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Java Object-Oriented Programming",
      issuer: "LinkedIn",
      year: "2024",
      description: "Advanced object-oriented programming principles and practices in Java",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Functional Programming",
      issuer: "LinkedIn",
      year: "2024",
      description: "Functional programming paradigms and implementation patterns",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Mastering Java: Collections",
      issuer: "LinkedIn",
      year: "2024",
      description: "Advanced Java collections framework and data structures",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "React: Design Patterns",
      issuer: "LinkedIn",
      year: "2024",
      description: "Advanced React design patterns and best practices",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Angular Essential",
      issuer: "LinkedIn",
      year: "2024",
      description: "Essential Angular framework development concepts",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "React Redux Essential",
      issuer: "LinkedIn",
      year: "2024",
      description: "React Redux state management and middleware patterns",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "REST Assured API Testing",
      issuer: "Udemy",
      year: "2023",
      description: "API test automation using REST Assured framework",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "React: Full Stack WebApp with Spring Boot 2023",
      issuer: "Udemy",
      year: "2023",
      description: "Complete full-stack web application development with React and Spring Boot",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Reactive Programming with Spring Boot and Spring WebFlux",
      issuer: "Udemy",
      year: "2023",
      description: "Reactive programming patterns using Spring Boot and Spring WebFlux",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Unit Testing in Java with JUnit 5 and Mockito",
      issuer: "Udemy",
      year: "2023",
      description: "Comprehensive unit testing in Java using JUnit 5 and Mockito frameworks",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Definitive Guide: 9 Advanced Patterns in ReactJS",
      issuer: "Udemy",
      year: "2023",
      description: "Advanced React patterns and best practices guide",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Reactive Programming in Java using RXJava 3.x - ReactiveX",
      issuer: "Udemy",
      year: "2023",
      description: "Reactive programming patterns using RXJava 3.x and ReactiveX",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Microservices with Spring Boot and Spring Cloud Netflix Eureka",
      issuer: "Udemy",
      year: "2023",
      description: "Microservices architecture with Spring Boot and Netflix Eureka",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Advanced React and Redux",
      issuer: "Udemy",
      year: "2023",
      description: "Advanced React and Redux patterns for complex applications",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "JavaScript Frameworks Master: Angular, React, Vue",
      issuer: "Udemy",
      year: "2022",
      description: "Comprehensive JavaScript frameworks mastery including Angular, React, and Vue",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Testing React with Jest and React Testing Library (RTL)",
      issuer: "Udemy",
      year: "2022",
      description: "React testing strategies using Jest and React Testing Library",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Build React forms using Formik, No more pain!",
      issuer: "Udemy",
      year: "2022",
      description: "Form building in React using Formik library",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "React, React Redux and Redux Saga - Master React State/Hooks",
      issuer: "Udemy",
      year: "2022",
      description: "Master React state management with Redux and Redux Saga",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Advanced JavaScript: Regular Expressions",
      issuer: "LinkedIn",
      year: "2022",
      description: "Advanced JavaScript regular expressions and pattern matching",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Advanced JavaScript: Best Practices",
      issuer: "LinkedIn",
      year: "2022",
      description: "JavaScript best practices and coding standards",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Essential JavaScript",
      issuer: "LinkedIn",
      year: "2022",
      description: "Essential JavaScript fundamentals and core concepts",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Web Development Fundamentals: Full Stack or Front-end",
      issuer: "LinkedIn",
      year: "2022",
      description: "Web development fundamentals and full-stack vs front-end decision",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Python University - OOP, PySide, Tkinter, Django and Flask!",
      issuer: "Udemy",
      year: "2022",
      description: "Comprehensive Python programming with GUI frameworks and web development",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "Project Management for Everyone with PMI Methodology",
      issuer: "Udemy",
      year: "2021",
      description: "Project management fundamentals using PMI methodology",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "EF SET Certificate",
      issuer: "EF International Language Centers",
      year: "2021",
      description: "English language proficiency certification",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    },
    {
      title: "LLAMA CAMP COHORT 2",
      issuer: "Awana",
      year: "2021",
      description: "Advanced AI and machine learning bootcamp",
      icon: <Award className="w-5 h-5 text-cyber-accent" />
    }
  ]

  const displayedCertifications = showAllCertifications ? certifications : certifications.slice(0, 6)
  const remainingCertifications = certifications.length - 6

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-cyber-accent" />
            <span className="text-sm font-mono text-cyber-accent">EDUCATION &amp; TRAINING</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cyber-accent">Engineering</span> Education
          </h2>
          
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto font-mono">
           Systems Engineering professional with advanced expertise in Applied AI, Machine Learning, and enterprise software development
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-24"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-lg cyber-border hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cyber-surface rounded-full flex items-center justify-center">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-cyber-text mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-cyber-accent font-mono">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-cyber-text mb-4">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {edu.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyber-surface rounded-full text-xs font-mono text-cyber-muted"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyber-muted" />
                    <span className="text-sm font-mono text-cyber-muted">
                      {edu.period}
                    </span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-mono ${
                    edu.status === 'Completed' 
                      ? 'bg-cyber-accent/20 text-cyber-accent' 
                      : 'bg-cyber-tertiary/20 text-cyber-tertiary'
                  }`}>
                    {edu.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 relative">
            <Award className="w-5 h-5 text-cyber-tertiary" />
            <span className="text-sm font-mono text-cyber-tertiary">EXPERTISE &amp; RECOGNITION</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Projects <span className="text-cyber-tertiary">&amp; Certifications</span>
          </h3>
          <p className="text-lg text-cyber-muted font-mono max-w-2xl mx-auto">
            Highlighted open-source repositories and comprehensive professional certifications.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    <div className="glass p-6 rounded-xl cyber-border h-full transition-all group-hover:scale-[1.02] group-hover:border-cyber-accent/50 relative">
                      <ExternalLink className="absolute top-4 right-4 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyber-accent" />
                      <div className="flex items-start gap-4 flex-col">
                        <div className="w-12 h-12 bg-cyber-surface rounded-full flex items-center justify-center flex-shrink-0">
                          {cert.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-cyber-text mb-2 group-hover:text-cyber-accent transition-colors mt-2">
                            {cert.title}
                          </h4>
                          <p className="text-cyber-accent font-mono text-xs mb-3 uppercase tracking-wider">
                            {cert.issuer} • {cert.year}
                          </p>
                          <p className="text-cyber-muted text-sm leading-relaxed">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="glass p-6 rounded-xl cyber-border h-full hover-lift">
                    <div className="flex items-start gap-4 flex-col">
                      <div className="w-12 h-12 bg-cyber-surface rounded-full flex items-center justify-center flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-cyber-text mb-2 mt-2">
                          {cert.title}
                        </h4>
                        <p className="text-cyber-accent font-mono text-xs mb-3 uppercase tracking-wider">
                          {cert.issuer} • {cert.year}
                        </p>
                        <p className="text-cyber-muted text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAllCertifications && remainingCertifications > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={() => setShowAllCertifications(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-surface rounded-full text-cyber-tertiary font-mono text-sm hover-lift border border-cyber-tertiary/30 shadow-lg"
              >
                <ChevronDown className="w-4 h-4" />
                See {remainingCertifications} more items
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
