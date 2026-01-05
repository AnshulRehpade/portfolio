import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import '../styles/animations.css';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');

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

  const projects = [
    {
      id: 1,
      title: 'Enhancing RAG Systems with Pattern Recognition',
      category: 'Machine Learning',
      date: 'Jan 2025',
      description: 'Engineered a RAG pipeline with automated hallucination-detection using embedding-drift analysis and retrieval-failure classification.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      achievements: [
        'Reduced hallucinations across LLM responses by 23%',
        'Applied clustering, anomaly-scoring, and semantic-similarity models',
        'Optimized FAISS indexing strategies and reranking heuristics'
      ],
      tags: ['Python', 'FAISS', 'LLMs', 'RAG', 'NLP']
    },
    {
      id: 2,
      title: 'Sign Language to Speech Conversion System',
      category: 'Deep Learning',
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
      title: 'Agents AI: Multi-Agent Financial System',
      category: 'Machine Learning',
      date: 'May 2025',
      description: 'Developed sophisticated AI agents using LangChain and LangGraph for stock market prediction and optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      achievements: [
        'Implemented multi-agent systems for stock pricing analysis',
        'Improved simulation efficiency by 18%',
        'Built reinforcement learning algorithms for optimization'
      ],
      tags: ['Python', 'LangChain', 'LangGraph', 'OpenAI API', 'RL']
    },
    {
      id: 4,
      title: 'Gridwise: Renewable Energy Dashboard',
      category: 'Data Analytics',
      date: 'May 2024',
      description: 'Collaborated with industry partners to build a comprehensive dashboard for renewable energy visualization with ML-powered forecasting.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      achievements: [
        'Partnered with stakeholders to define strategic KPIs',
        'Improved forecast accuracy by 14% using ML models',
        'Published in Smart Innovation, Systems and Technologies'
      ],
      tags: ['Python', 'AWS EC2', 'AWS S3', 'Scikit-learn', 'Power BI']
    },
    {
      id: 5,
      title: 'Emergency Prediction & SOS Alert System',
      category: 'Machine Learning',
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

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-stone-900 to-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              AR
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-neutral-300 hover:text-emerald-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-neutral-300 hover:text-emerald-400 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-neutral-300 hover:text-emerald-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('education')} className="text-neutral-300 hover:text-emerald-400 transition-colors">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-neutral-300 hover:text-emerald-400 transition-colors">
                Contact
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              Get In Touch
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 text-slate-400 animate-fade-in">East Newark, New Jersey</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Anshul Rehpade
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Data Analyst & ML Engineer
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Passionate Data Scientist and ML Engineer with expertise in building scalable analytics solutions and intelligent systems.
              Currently pursuing MS in Data Science at Stevens Institute of Technology.
            </p>
            <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300">
                View My Work
              </Button>
              <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 transform hover:scale-105 transition-all duration-300">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '7+', label: 'Major Projects' },
              { number: '23%', label: 'Hallucination Reduction' },
              { number: '92%', label: 'Model Accuracy' },
              { number: '2+', label: 'Research Publications' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
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
              <h3 className="text-3xl font-bold text-cyan-400">Transforming Data Into Actionable Insights</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm a passionate Data Scientist and ML Engineer currently pursuing my Master's in Data Science at Stevens Institute of Technology.
                With a strong foundation in computer engineering and a specialized focus on data science, I bring a unique blend of technical expertise
                and analytical thinking to every project.
              </p>
              <p className="text-slate-300 leading-relaxed">
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
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover:scale-105">
                  <CardHeader>
                    <div className="text-cyan-400 mb-2">{item.icon}</div>
                    <CardTitle className="text-lg text-slate-100">{item.title}</CardTitle>
                    <CardDescription className="text-slate-400">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/50" data-animate>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-100">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Programming Languages', items: skills.programming, color: 'from-blue-500 to-cyan-500' },
              { title: 'Data Analytics & BI', items: skills.analytics, color: 'from-purple-500 to-pink-500' },
              { title: 'Machine Learning & AI', items: skills.ml, color: 'from-green-500 to-emerald-500' },
              { title: 'Cloud & Infrastructure', items: skills.cloud, color: 'from-orange-500 to-red-500' },
              { title: 'Tools & Frameworks', items: skills.tools, color: 'from-indigo-500 to-purple-500' }
            ].map((category, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-100 mb-4">{category.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-700 hover:bg-slate-600 text-slate-200">
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
      <section id="projects" className="py-24 px-6" data-animate>
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-100">
            Featured Projects
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            A showcase of data science and machine learning projects demonstrating end-to-end solution development
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={activeFilter === category 
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600" 
                  : "border-slate-700 hover:bg-slate-800"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cyan-600 shadow-lg shadow-cyan-500/50">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="text-sm text-slate-500 mb-2">{project.date}</div>
                  <CardTitle className="text-xl text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300">
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

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-slate-900/50" data-animate>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-100">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-slate-100">Master of Science in Data Science</CardTitle>
                    <CardDescription className="text-lg text-cyan-400 mt-2">Stevens Institute of Technology</CardDescription>
                    <div className="text-slate-400 mt-2">2024 - 2026 (Expected)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400">3.63</div>
                    <div className="text-sm text-slate-400">GPA</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'NLP', 'Business Analytics', 'Econometrics', 'Statistical Inference'].map((course, i) => (
                    <Badge key={i} variant="secondary" className="bg-slate-700 text-slate-200">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-slate-100">B.Tech in Computer Engineering</CardTitle>
                    <CardDescription className="text-lg text-cyan-400 mt-2">Ramrao Adik Institute of Technology</CardDescription>
                    <div className="text-slate-400 mt-2">2020 - 2024</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400">3.84</div>
                    <div className="text-sm text-slate-400">GPA</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'AI Fundamentals'].map((course, i) => (
                    <Badge key={i} variant="secondary" className="bg-slate-700 text-slate-200">
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
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-cyan-400 mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-100">Detection of Diabetic Retinopathy Using Swish Activation Function</CardTitle>
                      <CardDescription className="text-slate-400 mt-2">
                        International Journal of Applied Engineering and Technology, Vol. 5 No. 4 • December 2023
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-cyan-400 mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-100">Gridwise: Dynamic Dashboard for Visualization of Renewable Energy</CardTitle>
                      <CardDescription className="text-slate-400 mt-2">
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
      <section id="contact" className="py-24 px-6" data-animate>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-100">
            Get In Touch
          </h2>
          <p className="text-center text-slate-400 mb-12">
            I'm always interested in discussing new opportunities, collaborations, or innovative data science projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105">
              <CardHeader className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <CardTitle className="text-lg text-slate-100">Email</CardTitle>
                <CardDescription className="text-slate-400">
                  <a href="mailto:anshulrehpade@gmail.com" className="hover:text-cyan-400 transition-colors">
                    anshulrehpade@gmail.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105">
              <CardHeader className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <CardTitle className="text-lg text-slate-100">Phone</CardTitle>
                <CardDescription className="text-slate-400">
                  <a href="tel:973-277-0187" className="hover:text-cyan-400 transition-colors">
                    973-277-0187
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105">
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <CardTitle className="text-lg text-slate-100">Location</CardTitle>
                <CardDescription className="text-slate-400">East Newark, New Jersey</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <a href="https://linkedin.com/in/anshul-rehpade-745763210" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-700 hover:bg-slate-800"
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
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Anshul Rehpade. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;