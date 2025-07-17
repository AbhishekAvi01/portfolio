import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Brain,
  Blocks,
  User,
  GraduationCap,
  Briefcase,
  MessageCircle,
  ChevronDown,
  ArrowUp,
  Award,
  Calendar,
  MapPin,
  Star,
  Zap,
  Target,
  CheckCircle,
  Globe,
  Server,
  Shield,
  Cpu,
  Terminal,
  Cloud
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'Python', 'Java', 'C', 'C++'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Linux', 'Docker', 'Jenkins', 'Kubernetes', 'AWS', 'Git'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI/ML & Blockchain',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Blockchain', 'Smart Contracts'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const projects = [
    {
      title: 'Swiggy Clone',
      description: 'A comprehensive food delivery application with real-time features and responsive design.',
      features: 'Dynamic data fetching with REST APIs, reusable components, cart management, user authentication',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Local Storage'],
      icon: <Code className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://swigi-clone-abhi01.netlify.app',
      githubUrl: 'https://github.com/AbhishekAvi01',
      category: 'Web Application'
    },
    {
      title: 'Student Result Management System',
      description: 'A comprehensive system for managing student academic records and results.',
      features: 'CRUD operations, user authentication, result analytics, report generation, role-based access',
      technologies: ['Django', 'MySQL', 'Python', 'Bootstrap', 'Chart.js'],
      icon: <Database className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/AbhishekAvi01',
      category: 'Web Application'
    },
    {
      title: 'WhatsApp Automation Suite',
      description: 'Comprehensive automation tool for WhatsApp, Email, and LinkedIn messaging.',
      features: 'Message scheduling, bulk messaging, contact management, analytics dashboard',
      technologies: ['Python', 'Streamlit', 'Selenium', 'APIs', 'SQLite'],
      icon: <MessageCircle className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/AbhishekAvi01',
      category: 'Automation'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">AK</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Abhishek Kumar</span>
                </div>
                <div className="hidden md:flex space-x-8">
                  {['about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                    <button 
                      key={section}
                      onClick={() => scrollToSection(section)} 
                      className={`text-sm font-semibold transition-all duration-300 hover:scale-105 capitalize relative ${
                        activeSection === section 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {section}
                      {activeSection === section && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="/ABHISHEK (Resume) (1).pdf"
                  download
                  className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group text-sm"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Resume
                </a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-md"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Header/Hero Section */}
        <header className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-200"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-400"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <div className="animate-fadeInUp">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-8 shadow-lg">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Available for opportunities</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Abhishek Kumar</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl">
                    Full Stack Developer specializing in <span className="font-bold text-blue-600 dark:text-blue-400">Modern Web Technologies</span>, 
                    <span className="font-bold text-purple-600 dark:text-purple-400"> Machine Learning</span>, and 
                    <span className="font-bold text-green-600 dark:text-green-400"> DevOps</span>
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                    <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-5 py-3 hover:scale-105 transition-all duration-300 shadow-lg">
                      <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Stack</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-5 py-3 hover:scale-105 transition-all duration-300 shadow-lg">
                      <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">ML/DL</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-5 py-3 hover:scale-105 transition-all duration-300 shadow-lg">
                      <Blocks className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Blockchain</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-5 py-3 hover:scale-105 transition-all duration-300 shadow-lg">
                      <Cloud className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">DevOps</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
                    >
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Let's Connect
                    </button>
                    <button 
                      onClick={() => scrollToSection('projects')}
                      className="inline-flex items-center px-8 py-4 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group backdrop-blur-sm"
                    >
                      <Target className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      View Projects
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Image */}
              <div className="flex justify-center lg:justify-end animate-fadeInUp animation-delay-200">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                    <img 
                      src="/profile_pic.jpg" 
                      alt="Abhishek Kumar"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce-slow">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce-slow animation-delay-200">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-xl animate-bounce-slow animation-delay-400">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
                About Me
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
                Passionate developer with expertise across the full technology stack
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main About Content */}
              <div className="lg:col-span-2">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp animation-delay-200">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Journey</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    I am a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science Engineering. 
                    My journey in technology spans across modern web development, machine learning, blockchain, and DevOps practices.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    I specialize in creating scalable web applications using React, Node.js, and cloud technologies. 
                    My experience with containerization, CI/CD pipelines, and cloud platforms enables me to build 
                    robust, production-ready solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Problem Solver</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Team Player</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Quick Learner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Innovation Focused</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-8">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp animation-delay-400">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Stats</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</span>
                      <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">10+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">Technologies</span>
                      <span className="font-bold text-2xl text-purple-600 dark:text-purple-400">15+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">Experience</span>
                      <span className="font-bold text-2xl text-green-600 dark:text-green-400">2+ Years</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp animation-delay-600">
                  <h3 className="text-xl font-bold mb-4">Currently Learning</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">Advanced React Patterns</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">Microservices Architecture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">Cloud Native Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
                Technical Skills
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
                Comprehensive expertise across modern development technologies and practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group animate-fadeInUp"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:scale-105 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
                Showcasing innovative solutions across web development and automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group animate-fadeInUp"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <strong>Features:</strong> {project.features}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-semibold hover:scale-105 transition-transform duration-200 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group text-sm"
                        >
                          <Globe className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group text-sm"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
                Education
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-fadeInUp animation-delay-200">
                Academic foundation in computer science and engineering
              </p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp animation-delay-200">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <img 
                    src="https://tse2.mm.bing.net/th/id/OIP.I1Jh2RaX-oTFPCJPoAXE2wHaEK?pid=Api&P=0&h=180" 
                    alt="Vivekananda Global University"
                    className="w-40 h-40 rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center flex-1">
                  <div className="p-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mr-8 hover:scale-110 transition-transform duration-300 shadow-xl">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Vivekananda Global University, Jaipur</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Bachelor of Technology in Computer Science Engineering</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">2021 - 2025 (Expected)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">Jaipur, Rajasthan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span className="font-medium">Currently in 4th Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
                Ready to collaborate on exciting projects or discuss opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp group">
                <div className="flex flex-col items-center text-center">
                  <div className="p-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Email</h3>
                  <a 
                    href="mailto:abhishekkumar04923@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm break-all font-medium"
                  >
                    abhishekkumar04923@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp animation-delay-200 group">
                <div className="flex flex-col items-center text-center">
                  <div className="p-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Phone</h3>
                  <a 
                    href="tel:9267991060" 
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm font-medium"
                  >
                    +91 9267991060
                  </a>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp animation-delay-400 group">
                <div className="flex flex-col items-center text-center">
                  <div className="p-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/abhishek-kumar-329a282b8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm flex items-center group font-medium"
                  >
                    Connect
                    <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp animation-delay-600 group">
                <div className="flex flex-col items-center text-center">
                  <div className="p-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">GitHub</h3>
                  <a 
                    href="https://github.com/AbhishekAvi01" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition-colors text-sm flex items-center group font-medium"
                  >
                    Follow
                    <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fadeInUp animation-delay-800">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Ready to Start a Project?</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  I'm always excited to work on innovative projects and collaborate with talented teams. 
                  Let's discuss how we can bring your ideas to life!
                </p>
                <a
                  href="mailto:abhishekkumar04923@gmail.com"
                  className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
                >
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">AK</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">Abhishek Kumar</p>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-600 dark:text-gray-400 animate-fadeInUp font-medium">
                  © {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                  Built with React & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-fadeIn group"
          >
            <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;