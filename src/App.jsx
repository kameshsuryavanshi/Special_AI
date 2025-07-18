// import React from 'react';
// import Home from './pages/Home';

// function App() {
//   return <Home />;
// }

// export default App;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from './components/CTAButton';
import { useEffect } from 'react';
import { Star, Check, Users, BookOpen, Heart, Award, Target, Brain, Lightbulb, Shield, TrendingUp, Clock, Menu, X } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false); // Close mobile menu when clicking nav link
        }
      });
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 overflow-x-hidden">
      {/* Sticky Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-bold text-blue-600 flex items-center gap-2 sm:gap-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl">🧠</span>
              </div>
              <span className="hidden sm:inline">Special AI</span>
              <span className="sm:hidden">Special AI</span>
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {["Home", "About", "Solutions", "Educators", "Parents", "Pricing", "Testimonials"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-semibold text-lg"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="https://dumroo.ai/register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-lg"
            >
              Register Now 🚀
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {["Home", "About", "Solutions", "Educators", "Parents", "Pricing", "Testimonials"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="https://dumroo.ai/register"
                  className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register Now 🚀
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/6 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/6 w-40 h-40 sm:w-80 sm:h-80 bg-indigo-500 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-gray-300 rounded-full blur-2xl"></div>
          </div>

          {/* Background Images - Hidden on mobile for better performance */}
          <div className="absolute inset-0 opacity-10 hidden md:block">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Inclusive classroom"
              className="absolute top-10 left-10 w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-2xl rotate-12"
            />
            <img
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Teacher with students"
              className="absolute bottom-20 right-20 w-28 h-28 lg:w-40 lg:h-40 object-cover rounded-2xl -rotate-12"
            />
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Learning environment"
              className="absolute top-1/2 right-10 w-24 h-24 lg:w-36 lg:h-36 object-cover rounded-2xl rotate-6"
            />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-left order-2 lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6 lg:mb-8"
              >
                Empowering Every Mind with{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Special AI
                </span>
                🌟
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 lg:mb-10 leading-relaxed font-medium"
              >
                Transforming education for students with diverse needs through AI-powered personalized learning plans and inclusive tools 
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              >
                <a
                  href="https://dumroo.ai/register"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg lg:text-xl text-center"
                >
                  Register Now 🚀
                </a>
                <a
                  href="#solutions"
                  className="bg-white text-blue-600 border-3 border-blue-500 px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:bg-blue-50 hover:shadow-xl transition-all duration-300 font-bold text-lg lg:text-xl text-center"
                >
                  Learn More 📖
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8 text-base lg:text-lg text-gray-600"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
                  <span className="font-semibold">10,000+ Students Supported </span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
                  <span className="font-semibold">Compliance Ready </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Diverse group of students and teacher in inclusive classroom setting"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              </div>
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 bg-white p-4 lg:p-6 rounded-2xl shadow-2xl border border-gray-200"
              >
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm lg:text-lg text-gray-600 font-medium">Institutions </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 bg-white p-4 lg:p-6 rounded-2xl shadow-2xl border border-gray-200"
              >
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm lg:text-lg text-gray-600 font-medium">Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50 relative">
          {/* Background Images - Hidden on mobile */}
          <div className="absolute inset-0 opacity-5 hidden lg:block">
            <img
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Learning environment"
              className="absolute top-20 left-20 w-48 h-48 object-cover rounded-3xl rotate-6"
            />
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Inclusive classroom"
              className="absolute bottom-20 right-20 w-56 h-56 object-cover rounded-3xl -rotate-6"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 lg:mb-8"
            >
              About Special AI 🎓
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto mb-12 lg:mb-16 leading-relaxed font-medium"
            >
              Special AI, a Dumroo.ai initiative, revolutionizes education for students with diverse needs by leveraging AI to simplify personalized learning plans, enhance accessibility, and foster inclusive learning environments 
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
            >
              {[
                { stat: "10,000+", desc: "Students Supported 👥", color: "from-blue-500 to-indigo-500" },
                { stat: "50+", desc: "Institutions Partnered 🏫", color: "from-indigo-500 to-blue-600" }, 
                { stat: "20+", desc: "AI Tools Developed 🛠️", color: "from-blue-600 to-gray-300" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-6 lg:p-10 bg-gradient-to-br ${item.color} rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 lg:mb-3">{item.stat}</div>
                  <p className="text-white/90 font-semibold text-lg lg:text-xl">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 hidden lg:block">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-6 lg:mb-8"
            >
              AI-Powered Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Special Education
              </span>
              🤖
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 text-center max-w-5xl mx-auto mb-12 lg:mb-16 font-medium"
            >
              Explore tools designed to streamline learning plan workflows and improve student outcomes 
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
            >
              {[
                { name: "Diagnostic Assessment", desc: "Conduct initial baseline assessments to identify student strengths and needs.", icon: "🔍", color: "from-primary-500 to-accent-500" },
                { name: "IEP Goals & Objectives", desc: "Generate SMART goals and measurable objectives tailored to each student.", icon: "🎯", color: "from-accent-500 to-primary-600" },
                { name: "Lesson Planning", desc: "Create customized instructional plans aligned with IEP goals.", icon: "📚", color: "from-primary-600 to-secondary-500" },
                { name: "Session Tracking", desc: "Log sessions and behavioral data for ongoing monitoring.", icon: "📋", color: "from-secondary-500 to-primary-500" },
                { name: "Progress Review", desc: "Assess goal advancement with automated analytics and visualizations.", icon: "📈", color: "from-primary-500 to-accent-600" },
                { name: "Compliance Reports", desc: "Generate IDEA-compliant documentation for accountability.", icon: "✅", color: "from-accent-600 to-primary-500" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="p-6 lg:p-8 bg-white rounded-3xl shadow-2xl border border-neutral-200 hover:shadow-3xl transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl lg:text-3xl">{tool.icon}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">{tool.name}</h3>
                  <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">{tool.desc}</p>
                  <a
                    href="https://dumroo.ai/login"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base lg:text-lg group-hover:translate-x-2 transition-all duration-300"
                  >
                    Try Demo →
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Educators Section */}
        <section id="educators" className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 lg:mb-8">
                  Empower{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Educators
                  </span>{' '}
                  with Special AI 👩‍🏫
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-10 font-medium leading-relaxed">
                  Simplify learning plan management and focus on teaching students 🌟
                </p>
                <div className="space-y-6 lg:space-y-8">
                  {[
                    { title: "IEP Workflow Progress", desc: "Streamline the entire IEP process from assessment to reporting.", icon: "📝", color: "from-blue-500 to-indigo-500" },
                    { title: "Lesson Planning", desc: "Create tailored lesson plans aligned with student goals.", icon: "📚", color: "from-indigo-500 to-blue-600" },
                    { title: "Progress & Compliance", desc: "Track progress and generate IDEA-compliant reports effortlessly.", icon: "✅", color: "from-blue-600 to-indigo-500" },
                  ].map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-2xl shadow-xl border border-neutral-200 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                         <span className="text-xl lg:text-2xl">{tool.icon}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
                        <p className="text-gray-600 text-base lg:text-lg">{tool.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-2"
              >
                <img
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Educator assisting students"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Parents Section */}
        <section id="parents" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <img
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Parents and educators collaborating"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-3xl"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 lg:mb-8">
                  Partnering with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Parents
                  </span>{' '}
                  for Student Success 👨‍👩‍👧‍👦
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-10 font-medium leading-relaxed">
                  Stay engaged with tools designed for collaboration and support 🤝
                </p>
                <div className="space-y-6 lg:space-y-8">
                  {[
                    { title: "Parent Input", desc: "Share perspectives to shape your child's IEP.", icon: "🤝", color: "from-blue-500 to-indigo-500" },
                    { title: "Progress Review", desc: "Access real-time updates on your child's goals.", icon: "📈", color: "from-indigo-500 to-blue-600" },
                    { title: "IEP Reports", desc: "Review clear, parent-friendly reports.", icon: "📄", color: "from-blue-600 to-indigo-500" },
                  ].map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <span className="text-xl lg:text-2xl">{tool.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
                        <p className="text-gray-600 text-base lg:text-lg">{tool.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-6 lg:mb-8"
            >
              What Educators Say 💬
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-12 lg:mb-16 font-medium"
            >
              Hear from educators transforming classrooms with Special AI 🌟
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
            >
              {[
                {
                  name: "Sarah Johnson",
                  role: "Special Education Teacher",
                  location: "City A",
                  image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
                  quote: "Special AI has transformed how I create learning plans. It saves me hours! 🙌",
                  rating: 5
                },
                {
                  name: "Michael Rodriguez",
                  role: "School Administrator",
                  location: "City B",
                  image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
                  quote: "The reports are detailed and have improved our compliance significantly. 📈",
                  rating: 5
                },
                {
                  name: "Emily Chen",
                  role: "Learning Coordinator",
                  location: "City C",
                  image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
                  quote: "Collaboration features have strengthened our educator-parent partnerships. ❤️",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 lg:p-8 bg-white rounded-3xl shadow-2xl border border-gray-200 hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center mb-4 lg:mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover mr-3 lg:mr-4 border-4 border-blue-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800 text-base lg:text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 font-medium text-sm lg:text-base">{testimonial.role}</p>
                      <p className="text-blue-600 text-xs lg:text-sm font-semibold">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3 lg:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-base lg:text-lg leading-relaxed">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-6 lg:mb-8"
            >
              Simple Pricing for Institutions 💰
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-12 lg:mb-16 font-medium"
            >
              Choose the perfect plan for your institution. All plans include full compliance support ✅
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
            >
              {[
                {
                  name: "Starter",
                  price: "$29",
                  period: "per educator/month",
                  description: "Ideal for individual educators",
                  features: [
                    "Up to 25 students",
                    "Basic learning plan generation",
                    "Progress tracking",
                    "Email support",
                    "Compliance tools"
                  ],
                  popular: false,
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  name: "Professional",
                  price: "$79",
                  period: "per educator/month",
                  description: "Perfect for education teams",
                  features: [
                    "Up to 100 students",
                    "Advanced learning plan generation",
                    "Detailed analytics",
                    "Priority support",
                    "Parent collaboration tools",
                    "Custom reporting",
                    "Team features"
                  ],
                  popular: true,
                  color: "from-indigo-500 to-blue-600"
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "contact us",
                  description: "For large institutions",
                  features: [
                    "Unlimited students",
                    "Full platform access",
                    "Dedicated support",
                    "Custom integrations",
                    "Advanced security",
                    "Training & onboarding",
                    "Institution-wide analytics"
                  ],
                  popular: false,
                  color: "from-blue-600 to-gray-300"
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-6 lg:p-10 rounded-3xl shadow-2xl border-2 transition-all duration-300 hover:shadow-3xl hover:scale-105 relative ${
                    plan.popular 
                      ? 'border-blue-500 bg-white' 
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 lg:-top-6 left-1/2 transform -translate-x-1/2">
                      <span className={`bg-gradient-to-r ${plan.color} text-white px-4 lg:px-6 py-1 lg:py-2 rounded-full text-sm lg:text-lg font-bold shadow-lg`}>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 lg:mb-4">{plan.name}</h3>
                  <div className="mb-4 lg:mb-6">
                    <span className="text-3xl lg:text-5xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600 ml-2 text-base lg:text-lg">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg">{plan.description}</p>
                  <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 mr-3 lg:mr-4 flex-shrink-0" />
                        <span className="text-gray-700 text-base lg:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://dumroo.ai/register"
                    className={`w-full py-3 lg:py-4 px-6 lg:px-8 rounded-2xl font-bold transition-all duration-300 text-center block text-lg lg:text-xl ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl hover:scale-105`
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Register Now 🚀
                  </a>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-12 lg:mt-16"
            >
              <p className="text-gray-600 mb-4 lg:mb-6 text-lg lg:text-xl">
                All plans include a 14-day free trial. No credit card required 🎉
              </p>
              <p className="text-base lg:text-lg text-gray-500">
                Special pricing available for supported institutions and non-profits 🌱
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 lg:w-80 lg:h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8"
            >
              Ready to Transform Education? 
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-12 max-w-4xl mx-auto font-medium leading-relaxed"
            >
              Join educators who are using Special AI to enhance outcomes for students with diverse needs 🎓
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center"
            >
              <a
                href="https://dumroo.ai/register"
                className="bg-white text-blue-600 px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-bold shadow-2xl text-lg lg:text-xl"
              >
                Start Free Trial 🎯
              </a>
              <a
                href="#testimonials"
                className="bg-transparent border-2 lg:border-3 border-white text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg lg:text-xl"
              >
                See Success Stories 📖
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg lg:text-xl">🧠</span>
                </div>
                <span className="text-xl lg:text-2xl font-bold text-white">Special AI</span>
              </div>
              <p className="text-gray-400 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Empowering special education with AI-powered tools 🌟
              </p>
              <p className="text-sm text-gray-500">
                A Dumroo.ai initiative 💙
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 lg:mb-6 text-lg lg:text-xl">Product</h4>
              <ul className="space-y-2 lg:space-y-3">
                <li><a href="#solutions" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Solutions</a></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Pricing</a></li>
                <li><a href="https://dumroo.ai/register" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Register Now 🚀</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 lg:mb-6 text-lg lg:text-xl">Support</h4>
              <ul className="space-y-2 lg:space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 lg:mb-6 text-lg lg:text-xl">Legal</h4>
              <ul className="space-y-2 lg:space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors text-base lg:text-lg">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
            <p className="text-gray-400 text-base lg:text-lg">
              © 2025 Special AI, a Dumroo.ai brand. All rights reserved. Made with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;