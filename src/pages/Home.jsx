import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Github, BookOpen, Briefcase, GraduationCap, Award, ArrowUp, Sparkles } from 'lucide-react';
import '../styles/animations.css';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 20 });
  const [projectTilt, setProjectTilt] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const removeInjectedBadge = () => {
      const badgeById = document.getElementById('emergent-badge');
      if (badgeById) badgeById.remove();

      const fallbackBadges = document.querySelectorAll('a[href*="emergent"], a[id*="emergent"]');
      fallbackBadges.forEach((element) => element.remove());
    };

    removeInjectedBadge();
    const interval = setInterval(removeInjectedBadge, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'education', 'contact'];

    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowBackToTop(window.scrollY > 500);

      let currentSection = 'about';
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 180) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % 3);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'IntentRAG: Intent-Aware Retrieval-Augmented Generation',
      category: 'Machine Learning',
      featured: true,
      date: 'Jan 2025',
      description: 'Built an intent-aware RAG framework that classifies query intent before retrieval and generation, improving relevance and reducing hallucinations.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      achievements: [
        'Reduced hallucinations in generated answers by 23%',
        'Improved retrieval precision with intent routing and reranking heuristics',
        'Implemented embedding-drift monitoring and retrieval-failure diagnostics'
      ],
      tags: ['Python', 'FAISS', 'LLMs', 'RAG', 'Intent Classification']
    },
    {
      id: 2,
      title: 'Sign Language to Speech Conversion System',
      category: 'Deep Learning',
      featured: false,
      date: 'Dec 2024',
      description: 'Built a multimodal pipeline converting sign-language into speech using CNNs for spatial extraction and LSTMs for temporal patterns.',
      image: 'https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=800&h=600&fit=crop',
      achievements: [
        'Achieved high real-time inference accuracy',
        'Integrated MediaPipe for key-point detection and augmentation',
        'Quantized models for assistive-technology devices'
      ],
      tags: ['Deep Learning', 'CNN', 'LSTM', 'MediaPipe', 'Computer Vision']
    },
    {
      id: 3,
      title: 'Stock Agent: Multi-Agent Market Intelligence System',
      category: 'Machine Learning',
      featured: true,
      date: 'May 2025',
      description: 'Designed a multi-agent architecture for market analysis, signal synthesis, and strategy simulation using LangChain and LangGraph.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      achievements: [
        'Orchestrated analyst, risk, and execution agents for explainable market decisions',
        'Improved simulation efficiency by 18% for faster backtesting loops',
        'Integrated reinforcement-learning based policy optimization for allocation'
      ],
      tags: ['Python', 'LangChain', 'LangGraph', 'OpenAI API', 'Multi-Agent AI']
    },
    {
      id: 4,
      title: 'Gridwise: Renewable Energy Intelligence Dashboard',
      category: 'Data Analytics',
      featured: true,
      date: 'May 2024',
      description: 'Developed an industry-facing analytics dashboard for renewable energy monitoring, anomaly tracking, and ML-based generation forecasting.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      achievements: [
        'Partnered with stakeholders to define decision-critical KPIs',
        'Improved forecast accuracy by 14% using ML models',
        'Published results in Smart Innovation, Systems and Technologies'
      ],
      tags: ['Python', 'AWS EC2', 'AWS S3', 'Scikit-learn', 'Power BI']
    },
    {
      id: 5,
      title: 'Emergency Prediction & SOS Alert System',
      category: 'Machine Learning',
      featured: false,
      date: 'May 2025',
      description: 'Engineered ML pipelines for emergency incident classification and forecasting with interactive dashboard for city planning applications.',
      image: 'https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&h=600&fit=crop',
      achievements: [
        'Achieved 77% accuracy in fire incident classification',
        'Built forecasting models with R² = 0.95',
        'Created Streamlit dashboard for resource allocation'
      ],
      tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Streamlit']
    },
    {
      id: 6,
      title: 'Diabetic Retinopathy Detection System',
      category: 'Deep Learning',
      featured: false,
      date: 'May 2023',
      description: 'Designed and optimized CNN architecture for medical image classification, achieving 92% accuracy in retinal disease detection.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
      achievements: [
        'Achieved 92% accuracy in retinal image classification',
        'Implemented custom Swish activation function optimization',
        'Published in International Journal of Applied Engineering'
      ],
      tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN']
    },
    {
      id: 7,
      title: 'Course Compass: Academic Recommendation Engine',
      category: 'NLP & Analytics',
      featured: false,
      date: 'Dec 2024',
      description: 'Built intelligent recommendation system using NLP techniques to optimize academic course selection process for students.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
      achievements: [
        'Reduced course selection time by 30%',
        'Implemented advanced NLP algorithms for course matching',
        'Built user-friendly interface for student interactions'
      ],
      tags: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'Flask']
    }
  ];

  const skills = {
    programming: ['Python', 'R', 'SQL', 'JavaScript'],
    analytics: ['Power BI', 'Tableau', 'Excel', 'Statistical Analysis', 'A/B Testing'],
    ml: ['TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'NLP', 'Deep Learning'],
    cloud: ['AWS EC2', 'AWS S3', 'AWS DynamoDB', 'AWS SNS'],
    tools: ['Git', 'Docker', 'JIRA', 'Streamlit', 'LangChain', 'LangGraph']
  };

  const categories = ['All', 'Data Analytics', 'Machine Learning', 'Deep Learning', 'NLP & Analytics'];
  const heroRoles = ['Data Analyst', 'ML Engineer', 'AI Solutions Builder'];
  const marqueeSkills = [
    'Python', 'Machine Learning', 'RAG Systems', 'LangChain', 'Power BI',
    'Deep Learning', 'Data Analytics', 'AWS', 'NLP', 'XGBoost', 'MLOps'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const prioritizedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured === b.featured) return a.id - b.id;
    return a.featured ? -1 : 1;
  });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectMouseMove = (projectId, event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 10;
    const rotateX = (0.5 - (y / bounds.height)) * 10;

    setProjectTilt((prev) => ({
      ...prev,
      [projectId]: {
        rotateX,
        rotateY,
        glowX: (x / bounds.width) * 100,
        glowY: (y / bounds.height) * 100
      }
    }));
  };

  const resetProjectTilt = (projectId) => {
    setProjectTilt((prev) => ({ ...prev, [projectId]: { rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 } }));
  };

  return (
    // Changed bg-neutral-950 to bg-slate-50 (Light Mode)
    <div
      className="relative isolate min-h-screen bg-black text-slate-100 overflow-hidden"
      onMouseMove={(event) => {
        setMousePosition({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100
        });
      }}
    >
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(136,19,55,0.14),transparent_36%),radial-gradient(circle_at_82%_12%,rgba(190,24,93,0.12),transparent_42%),radial-gradient(circle_at_50%_84%,rgba(180,83,9,0.10),transparent_42%)]"></div>
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(127, 29, 29, 0.12), transparent 32%)`
          }}
        ></div>
        <div className="absolute -top-20 -left-16 w-[34rem] h-[34rem] rounded-full bg-rose-300/20 blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] rounded-full bg-rose-200/20 blur-3xl animate-drift"></div>
        <div className="absolute -bottom-24 left-1/3 w-[28rem] h-[28rem] rounded-full bg-amber-200/15 blur-3xl animate-float-slow" style={{ animationDelay: '1.2s' }}></div>
      </div>
      
      {/* Header - Changed to white background with light border */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-slate-800 relative">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-rose-300 via-rose-200 to-amber-300 bg-clip-text text-transparent">
              AR
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Education', id: 'education' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`transition-colors font-medium ${activeSection === item.id ? 'text-rose-300' : 'text-slate-400 hover:text-rose-300'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-rose-800 hover:bg-rose-700 text-white">
              Get In Touch
            </Button>
          </div>
        </nav>
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Lighter Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/50 via-slate-950/40 to-transparent"></div>
        
        {/* Animated background particles (Opacity reduced for light mode) */}
        <div className="absolute inset-0 overflow-hidden opacity-45">
          <div className="absolute w-96 h-96 bg-rose-900/60 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-rose-800/40 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-64 h-64 bg-amber-900/35 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 space-y-1 text-center">
              {['DATA NATIVE.', 'MODEL DRIVEN.', 'IMPACT FOCUSED.'].map((line, index) => (
                <div
                  key={line}
                  className="text-sm md:text-base tracking-[0.28em] font-semibold text-slate-400 animate-fade-in"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  {line}
                </div>
              ))}
            </div>
            <Badge className="mb-5 bg-slate-900 border border-rose-800 text-rose-200 hover:bg-rose-950/40">
              <Sparkles className="w-4 h-4 mr-2" /> Open to Full-time Opportunities
            </Badge>
            <div className="mb-4 text-slate-400 font-medium animate-fade-in">Harrison, New Jersey</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-rose-300 via-rose-200 to-amber-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Anshul Rehpade
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-200 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {heroRoles[roleIndex]}
            </p>
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Data Scientist and ML Engineer with expertise in building scalable analytics solutions and intelligent systems.
              Graduating in May 2026 with an MS in Data Science from Stevens Institute of Technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {['7+ End-to-End Projects', '2+ Research Publications', 'Production-ready ML Pipelines'].map((item) => (
                <Badge key={item} variant="secondary" className="bg-slate-900 border border-slate-700 text-slate-200 px-4 py-1">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-rose-800 hover:bg-rose-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-rose-950/70">
                View My Work
              </Button>
              <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-900 hover:border-rose-500 transform hover:scale-105 transition-all duration-300">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 border-y border-slate-800 bg-black/70 backdrop-blur-sm overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="mx-4 text-sm font-semibold text-slate-400 tracking-wide">
              {skill} <span className="text-rose-500">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* Stats Section - Changed to White Background */}
      <section className="py-16 px-6 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '7+', label: 'Major Projects' },
              { number: '23%', label: 'Hallucination Reduction' },
              { number: '92%', label: 'Model Accuracy' },
              { number: '2+', label: 'Research Publications' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-rose-700 to-amber-600 bg-clip-text mb-2">{stat.number}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6" data-animate>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-100">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-100">Transforming Data Into Actionable Insights</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm a passionate Data Scientist and ML Engineer currently pursuing my Master's in Data Science at Stevens Institute of Technology.
                With a strong foundation in computer engineering and a specialized focus on data science, I bring a unique blend of technical expertise
                and analytical thinking to every project.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                My expertise spans across data analytics, machine learning, and artificial intelligence, with hands-on experience in building scalable
                solutions that drive business value. I've successfully collaborated with industry partners, published research in peer-reviewed journals,
                and consistently delivered projects that exceed expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Briefcase className="w-6 h-6" />, title: 'Data Analytics', desc: 'Advanced statistical analysis and BI' },
                { icon: <Award className="w-6 h-6" />, title: 'Machine Learning', desc: 'Deep learning, NLP, predictive modeling' },
                { icon: <BookOpen className="w-6 h-6" />, title: 'Cloud & Deployment', desc: 'AWS infrastructure and scalable solutions' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Research & Innovation', desc: 'Published research and AI applications' }
              ].map((item, index) => (
                // Cards changed to White background with shadow
                <Card key={index} className="bg-slate-900 border-slate-700 shadow-sm hover:shadow-lg hover:border-rose-700 transition-all hover:scale-105">
                  <CardHeader>
                    <div className="text-rose-400 mb-2">{item.icon}</div>
                    <CardTitle className="text-lg text-slate-100">{item.title}</CardTitle>
                    <CardDescription className="text-slate-400">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 px-6 bg-slate-950/80 border-y border-rose-900/30" data-animate>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">
            Signature Certifications
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
            A curated blend of business strategy, analytics leadership, and domain-focused credentials.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-900 border-rose-800/60 shadow-lg shadow-rose-950/30">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-100">Harvard Business School Online</CardTitle>
                <CardDescription className="text-rose-300 text-base font-medium">
                  Business & Analytics Certificate Portfolio
                </CardDescription>
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-slate-400">Issued by</span>
                  <Badge variant="outline" className="border-rose-700 text-rose-200 bg-rose-950/30">HBS Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Business Analytics', 'Sustainable Business Strategy', 'Entrepreneurship Essentials'].map((cert, index) => (
                    <Badge key={index} className="bg-rose-900/40 border border-rose-700 text-rose-100 hover:bg-rose-900/60">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-rose-700 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-100">Additional Professional Credentials</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Practical certifications aligned with analytics execution and finance domain fluency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-slate-200 flex items-center justify-between gap-3">
                    <span>Power BI for Business Analytics</span>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">ExcelR</Badge>
                  </div>
                  <div className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-slate-200 flex items-center justify-between gap-3">
                    <span>Investment Banking Professional</span>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">NYIF</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section - Lighter Grey Background */}
      <section id="skills" className="py-24 px-6 bg-slate-950/70 border-y border-slate-800" data-animate>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-100">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Programming Languages', items: skills.programming },
              { title: 'Data Analytics & BI', items: skills.analytics },
              { title: 'Machine Learning & AI', items: skills.ml },
              { title: 'Cloud & Infrastructure', items: skills.cloud },
              { title: 'Tools & Frameworks', items: skills.tools }
            ].map((category, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 shadow-sm hover:shadow-md hover:border-rose-700 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-100 mb-4">{category.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-800 hover:bg-rose-950/40 text-slate-200 hover:text-rose-300 border border-slate-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-black" data-animate>
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-100">
            Featured Projects
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            A showcase of data science and machine learning projects demonstrating end-to-end solution development
          </p>
          <p className="text-center text-sm text-slate-400 mb-8">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={activeFilter === category 
                  ? "bg-rose-800 hover:bg-rose-700 text-white" 
                  : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-rose-950/40 hover:text-rose-300 hover:border-rose-600"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prioritizedProjects.map((project) => (
              <Card
                key={project.id}
                className={`bg-slate-900 border-slate-700 overflow-hidden group hover:border-rose-700 transition-all duration-300 hover:shadow-xl shadow-sm ${project.featured ? 'ring-1 ring-rose-500/40' : ''}`}
                onMouseMove={(event) => handleProjectMouseMove(project.id, event)}
                onMouseLeave={() => resetProjectTilt(project.id)}
                style={{
                  transform: `perspective(1000px) rotateX(${projectTilt[project.id]?.rotateX || 0}deg) rotateY(${projectTilt[project.id]?.rotateY || 0}deg) scale(1.01)`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at ${projectTilt[project.id]?.glowX || 50}% ${projectTilt[project.id]?.glowY || 50}%, rgba(255, 255, 255, 0.35), transparent 45%)`
                    }}
                  ></div>
                  {/* Overlay Gradient Changed to Light/Dark mix for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-800 text-white shadow-lg">{project.category}</Badge>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-700 text-white shadow-lg">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-400">{project.date}</div>
                    <div className="text-xs font-medium text-rose-300 bg-rose-950/40 border border-rose-800 rounded-full px-2 py-1">
                      Impact Focused
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-100 mb-2 group-hover:text-rose-300 transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-rose-950/40 border border-rose-800 px-3 py-2 text-sm text-rose-200">
                      <span className="font-semibold">Top outcome:</span> {project.achievements[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-slate-600 text-slate-300 hover:border-rose-500 hover:text-rose-300 hover:bg-rose-950/40 transition-colors duration-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showBackToTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          size="icon"
          className="fixed bottom-6 right-6 z-50 bg-rose-800 hover:bg-rose-700 text-white shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-slate-950 border-t border-slate-800" data-animate>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-100">
            Education & Research
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Cards: White background, Slate borders */}
            <Card className="bg-slate-900 border-slate-700 hover:border-rose-700 hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-slate-100">Master of Science in Data Science</CardTitle>
                    <CardDescription className="text-lg text-rose-300 mt-2 font-medium">Stevens Institute of Technology</CardDescription>
                    <div className="text-slate-400 mt-2">2024 - 2026 (Expected)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent">3.63</div>
                    <div className="text-sm text-slate-400">GPA</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'NLP', 'Business Analytics', 'Econometrics', 'Statistical Inference'].map((course, i) => (
                    <Badge key={i} variant="secondary" className="bg-slate-800 border border-slate-600 text-slate-300">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-rose-700 hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-slate-100">B.Tech in Computer Engineering</CardTitle>
                    <CardDescription className="text-lg text-rose-300 mt-2 font-medium">Ramrao Adik Institute of Technology</CardDescription>
                    <div className="text-slate-400 mt-2">2020 - 2024</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent">3.84</div>
                    <div className="text-sm text-slate-400">GPA</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'AI Fundamentals'].map((course, i) => (
                    <Badge key={i} variant="secondary" className="bg-slate-800 border border-slate-600 text-slate-300">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Research Publications</h3>
            <div className="space-y-6">
              <Card className="bg-slate-900 border-slate-700 hover:border-rose-700 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-rose-400 mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-100">Detection of Diabetic Retinopathy Using Swish Activation Function</CardTitle>
                      <CardDescription className="text-slate-300 mt-2">
                        International Journal of Applied Engineering and Technology, Vol. 5 No. 4 • December 2023
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-slate-900 border-slate-700 hover:border-rose-700 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-rose-400 mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-100">Gridwise: Dynamic Dashboard for Visualization of Renewable Energy</CardTitle>
                      <CardDescription className="text-slate-300 mt-2">
                        Smart Innovation, Systems and Technologies, Volume 440 • ICHCSC 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black" data-animate>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-100">
            Get In Touch
          </h2>
          <p className="text-center text-slate-300 mb-12">
            I'm always interested in discussing new opportunities, collaborations, or innovative data science projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-900 border-slate-700 hover:border-rose-700 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader className="text-center">
                <Mail className="w-8 h-8 text-rose-400 mx-auto mb-3" />
                <CardTitle className="text-lg text-slate-100">Email</CardTitle>
                <CardDescription className="text-slate-400">
                  <a href="mailto:anshulrehpade@gmail.com" className="hover:text-rose-300 transition-colors">
                    anshulrehpade@gmail.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-900 border-slate-700 hover:border-rose-700 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader className="text-center">
                <Phone className="w-8 h-8 text-rose-400 mx-auto mb-3" />
                <CardTitle className="text-lg text-slate-100">Phone</CardTitle>
                <CardDescription className="text-slate-400">
                  <a href="tel:973-277-0187" className="hover:text-rose-300 transition-colors">
                    973-277-0187
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-900 border-slate-700 hover:border-rose-700 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 text-rose-400 mx-auto mb-3" />
                <CardTitle className="text-lg text-slate-100">Location</CardTitle>
                <CardDescription className="text-slate-400">Harrison, New Jersey</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-rose-800 hover:bg-rose-700 text-white"
            >
              <a href="https://linkedin.com/in/anshul-rehpade-745763210/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-200 hover:bg-slate-900 hover:border-rose-500"
            >
              <a href="https://github.com/AnshulRehpade" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-slate-800 text-slate-400">
        <div className="container mx-auto text-center">
          <p>
            © 2025 Anshul Rehpade. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;