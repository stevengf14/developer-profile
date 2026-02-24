import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react'

export default function Courses() {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "Master of Science in Applied Artificial Intelligence",
      institution: "Universidad Internacional del Ecuador",
      status: "Completed",
      period: "2024 - 2026",
      description: "Advanced specialization in Machine Learning, Deep Learning, Computer Vision, Neural Networks, and AI applications in real-world scenarios. Research focused on practical implementations and industry-relevant solutions.",
      highlights: [
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
      title: "Executive Leadership",
      issuer: "Universidad Internacional del Ecuador",
      year: "2025",
      credentialId: "90ba582c-791b-4cf3-94eb-1e7cbc9cfed1",
      description: "Transformative and referential executive leadership program strengthening leadership skills"
    },
    {
      title: "AI Immersion + Google Gemini",
      issuer: "Alura",
      year: "2025",
      credentialId: "90ba582c-791b-4cf3-94eb-1e7cbc9cfed1",
      description: "Advanced AI integration with Google Gemini technologies"
    },
    {
      title: "Java Object-Oriented Programming",
      issuer: "LinkedIn",
      year: "2024",
      credentialId: "21cdecea7e78654933e6442f8179b30f850ae90260fbd026a010012ceb46ac27",
      description: "Advanced object-oriented programming principles and practices in Java"
    },
    {
      title: "Functional Programming",
      issuer: "LinkedIn",
      year: "2024",
      credentialId: "c1f8100cbde00e0f86aff9e989ce8501638b044b999dbf9c3bb76d8a82d3c08c",
      description: "Functional programming paradigms and implementation patterns"
    },
    {
      title: "Domina Java: Colecciones",
      issuer: "LinkedIn",
      year: "2024",
      credentialId: "e5b7cb8240ca26ccdc427d50cc818f6cf563fe8a607d32330c94d6e61dbefa54",
      description: "Advanced Java collections framework and data structures"
    },
    {
      title: "React: Design Patterns",
      issuer: "LinkedIn",
      year: "2024",
      credentialId: "d66c39945f2152ed4e2bef7086ec0e1427b722605bfc2c892498e6306bd1fdad",
      description: "Advanced React design patterns and best practices"
    },
    {
      title: "Angular Esencial",
      issuer: "LinkedIn",
      year: "2024",
      credentialId: "b8e141c1792ebcb5c33bd8bd06c68388f47b98d3fe856ff453b6fc59b1db57e1",
      description: "Essential Angular framework development concepts"
    },
    {
      title: "React Redux Esencial",
      issuer: "LinkedIn",
      year: "2024",
      credentialId: "8f6c636991631e97399add47e7cf04e8544db4d1ffb96d10d4d6f267b6a9378b",
      description: "React Redux state management and middleware patterns"
    },
    {
      title: "REST Assured API Testing",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-8f056296-8fc3-4eb7-b9a4-a3f2d6d1ef32",
      description: "API test automation using REST Assured framework"
    },
    {
      title: "React: Creando webapp Full Stack con Spring Boot 2023",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-a2baaad3-85da-423d-b5a5-e6efc91897d1",
      description: "Complete full-stack web application development with React and Spring Boot"
    },
    {
      title: "Programación Reactiva con Spring Boot y Spring WebFlux",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-6a18b6cc-92c2-4703-b3bb-c5d84edc8ee9",
      description: "Reactive programming patterns using Spring Boot and Spring WebFlux"
    },
    {
      title: "Aprende Unit Test en Java con Junit 5 y Mockito",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-b0d1e50c-5268-4288-8704-b7f677881832",
      description: "Comprehensive unit testing in Java using JUnit 5 and Mockito frameworks"
    },
    {
      title: "Guía definitiva: Aprende los 9 Patrones Avanzados en ReactJS",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-ac5823c6-adbd-4bf7-83d6-1f58452cbb1a",
      description: "Advanced React patterns and best practices guide"
    },
    {
      title: "Reactive Programming in Java using RXJava 3.x - ReactiveX",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-60269b87-9417-4d63-992c-e09e12f9c232",
      description: "Reactive programming patterns using RXJava 3.x and ReactiveX"
    },
    {
      title: "Microservicios con Spring Boot y Spring Cloud Netflix Eureka",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-688bc8dd-46bf-4d36-96fc-87ae1ccedff7",
      description: "Microservices architecture with Spring Boot and Netflix Eureka"
    },
    {
      title: "Advanced React and Redux",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-a94ee5bf-d5ad-4b7f-a431-c848d0e19d0f",
      description: "Advanced React and Redux patterns for complex applications"
    },
    {
      title: "Master en Frameworks JavaScript: Aprende Angular, React, Vue",
      issuer: "Udemy",
      year: "2022",
      credentialId: "UC-99201b11-52a2-4c3c-80b7-e160b9e2050",
      description: "Comprehensive JavaScript frameworks mastery including Angular, React, and Vue"
    },
    {
      title: "Testing React with Jest and React Testing Library (RTL)",
      issuer: "Udemy",
      year: "2022",
      credentialId: "UC-61c28797-3956-4168-9a95-245777b82f43",
      description: "React testing strategies using Jest and React Testing Library"
    },
    {
      title: "Build React forms using Formik, No more pain!",
      issuer: "Udemy",
      year: "2022",
      credentialId: "UC-59b9c8f6-0c05-49cf-853c-6e6c27ad36f0",
      description: "Form building in React using Formik library"
    },
    {
      title: "React, React Redux and Redux Saga - Master React State/Hooks",
      issuer: "Udemy",
      year: "2022",
      credentialId: "UC-6c62729f-67da-488b-96b1-8321dddff3dd",
      description: "Master React state management with Redux and Redux Saga"
    },
    {
      title: "JavaScript avanzado: Expresiones regulares",
      issuer: "LinkedIn",
      year: "2022",
      credentialId: "AYJ82X8R-VTZ53ISqwkkI3c-vHFI",
      description: "Advanced JavaScript regular expressions and pattern matching"
    },
    {
      title: "JavaScript avanzado: Buenas prácticas",
      issuer: "LinkedIn",
      year: "2022",
      credentialId: "ASKXNHDLMMh2iR0ng3KnxFCvDMY6",
      description: "JavaScript best practices and coding standards"
    },
    {
      title: "JavaScript esencial",
      issuer: "LinkedIn",
      year: "2022",
      credentialId: "AaoyqgtcSp0roLuDtaA7N36u3Cus",
      description: "Essential JavaScript fundamentals and core concepts"
    },
    {
      title: "Fundamentos del desarrollo web: Full Stack o Front-end",
      issuer: "LinkedIn",
      year: "2022",
      credentialId: "AQcBCdQ1a2YD9XK6_bY8Fu-o6drM",
      description: "Web development fundamentals and full-stack vs front-end decision"
    },
    {
      title: "Universidad Python - POO, PySide, Tkinter, Django y Flask!",
      issuer: "Udemy",
      year: "2022",
      credentialId: "UC-df0128b8-12aa-436c-8319-fe3dc7fdcd7c",
      description: "Comprehensive Python programming with GUI frameworks and web development"
    },
    {
      title: "Gerencia de Proyectos para todos con Metodología PMI",
      issuer: "Udemy",
      year: "2021",
      credentialId: "UC-915de3ff-fc61-494d-bcbb-99cc8a0d7999",
      description: "Project management fundamentals using PMI methodology"
    },
    {
      title: "EF SET Certificate",
      issuer: "EF International Language Centers",
      year: "2021",
      credentialId: "wD7Sgk",
      description: "English language proficiency certification"
    },
    {
      title: "LLAMA CAMP COHORT 2",
      issuer: "Awana",
      year: "2021",
      description: "Advanced AI and machine learning bootcamp"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
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
            <span className="text-sm font-mono text-cyber-accent">EDUCATION</span>
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
          className="space-y-8 mb-20"
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-cyber-text mb-8 text-center">
            Professional Certifications & Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass p-4 rounded-lg hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyber-surface rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-cyber-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyber-text mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-cyber-accent font-mono text-sm mb-2">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-cyber-muted text-sm">
                      {cert.description}
                    </p>
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
