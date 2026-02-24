import { motion } from 'framer-motion'
import { Zap, Code2, BrainCircuit, Rocket, Terminal, Sparkles, GitBranch, Cpu } from 'lucide-react'

export default function HybridEdge() {
  const tools = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Development",
      description: "Leveraging artificial intelligence to accelerate development workflows and enhance code quality",
      features: [
        "Automated code generation and completion",
        "Intelligent debugging assistance",
        "Performance optimization suggestions",
        "Security vulnerability detection"
      ],
      tech: ["AI Assistants", "Code Generation", "Smart Testing", "Automated Refactoring"],
      color: "text-cyber-accent",
      bgColor: "bg-cyber-accent/10",
      borderColor: "border-cyber-accent/30"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Advanced DevOps Integration",
      description: "Modern development operations with automated pipelines and intelligent deployment strategies",
      features: [
        "CI/CD pipeline automation",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Monitoring and observability"
      ],
      tech: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus"],
      color: "text-cyber-secondary",
      bgColor: "bg-cyber-secondary/10",
      borderColor: "border-cyber-secondary/30"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Performance Engineering",
      description: "Systematic approach to application performance optimization and scalability",
      features: [
        "Load testing and benchmarking",
        "Database query optimization",
        "Caching strategies implementation",
        "Microservices performance tuning"
      ],
      tech: ["JMeter", "Redis", "Nginx", "New Relic", "Grafana"],
      color: "text-cyber-tertiary",
      bgColor: "bg-cyber-tertiary/10",
      borderColor: "border-cyber-tertiary/30"
    }
  ]

  const workflows = [
    {
      title: "AI-First Development",
      description: "Leveraging AI to write, review, and optimize code 10x faster",
      time: "10x Speed",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      title: "Intelligent Automation",
      description: "Automating repetitive tasks and complex workflows with AI precision",
      time: "80% Reduction",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Context-Aware Coding",
      description: "AI that understands project context and maintains consistency",
      time: "95% Accuracy",
      icon: <BrainCircuit className="w-5 h-5" />
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
    <section id="hybrid-edge" className="relative py-20 overflow-hidden">
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
            <Sparkles className="w-5 h-5 text-cyber-accent" />
            <span className="text-sm font-mono text-cyber-accent">HYBRID EDGE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI-Supercharged</span> Productivity
          </h2>
          
          <p className="text-xl text-cyber-muted max-w-3xl mx-auto font-mono">
            Harnessing cutting-edge AI tools like Cursor and MCPs to revolutionize development workflows
          </p>
        </motion.div>

        {/* Productivity Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass p-8 rounded-xl border ${tool.borderColor} hover-lift`}
            >
              <div className={`${tool.color} mb-4`}>{tool.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-cyber-text">{tool.name}</h3>
              <p className="text-cyber-muted mb-6 font-mono text-sm">{tool.description}</p>
              
              <div className="space-y-2 mb-6">
                {tool.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${tool.color.replace('text', 'bg')} rounded-full`} />
                    <span className="text-sm text-cyber-text font-mono">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className={`inline-flex items-center gap-2 px-3 py-1 ${tool.bgColor} ${tool.borderColor} border rounded-full`}>
                <Terminal className="w-3 h-3" />
                <span className={`text-xs font-mono ${tool.color}`}>ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow Optimization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-cyber-text">Workflow Transformation</h3>
            <p className="text-cyber-muted font-mono">AI-driven development processes that deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass p-6 rounded-lg cyber-border hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyber-accent">{workflow.icon}</div>
                  <div className="text-right">
                    <div className="text-lg font-bold gradient-text">{workflow.time}</div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-cyber-text">{workflow.title}</h4>
                <p className="text-cyber-muted font-mono text-sm">{workflow.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="terminal rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-sm font-mono text-cyber-muted">ai-enhanced-dev@steven:~$</span>
            </div>
            
            <div className="space-y-2 font-mono text-sm">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-cyber-accent"
              >
                $ cursor --ai-mode enhanced --context banking-system
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-cyber-text"
              >
                {'>'} AI: Analyzing codebase structure...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-cyber-tertiary"
              >
                {'>'} MCP: Loading financial models and compliance rules...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="text-cyber-accent"
              >
                {'>'} Ready: 10x development speed activated
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="text-cyber-muted"
              >
                <span className="animate-pulse">_</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
