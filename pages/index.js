import Head from 'next/head'
import NeuralNetwork from '../src/components/NeuralNetwork'
import Hero from '../src/components/Hero'
import AISpotlight from '../src/components/AISpotlight'
import Courses from '../src/components/Courses'
import CoreEngineering from '../src/components/CoreEngineering'
import HybridEdge from '../src/components/HybridEdge'
import Contact from '../src/components/Contact'
import FloatingContact from '../src/components/FloatingContact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Steven Guamán Figueroa - Senior Engineer & AI Specialist</title>
        <meta name="description" content="Senior Software Engineer & AI Specialist with 7+ years experience. Expert in Java, Spring Boot, React, Machine Learning, and Computer Vision. Master's in Applied AI completed." />
        <meta name="keywords" content="Senior Engineer, AI Specialist, Java, Spring Boot, React, Machine Learning, Computer Vision, Full Stack, Financial Technology" />
        <meta name="author" content="Steven Guamán Figueroa" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Steven Guamán Figueroa - Senior Engineer & AI Specialist" />
        <meta property="og:description" content="Senior Software Engineer & AI Specialist with 7+ years experience in banking, fintech, and applied AI. Published researcher in IEEE/ACM." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Steven Guamán Figueroa - Senior Engineer & AI Specialist" />
        <meta name="twitter:description" content="Senior Software Engineer & AI Specialist with 7+ years experience in banking, fintech, and applied AI. Published researcher in IEEE/ACM." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <div className="relative min-h-screen bg-cyber-bg">
        {/* Neural Network Background */}
        <NeuralNetwork />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Hero />
          <AISpotlight />
          <CoreEngineering />
          <Courses />
          <HybridEdge />
          <Contact />
        </div>
      </div>
      <FloatingContact />
    </>
  )
}
