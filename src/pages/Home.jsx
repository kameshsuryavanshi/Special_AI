// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { CTAButton } from '../components/CTAButton';
// // import { useEffect } from 'react';
// // import { Star, Check, Users, BookOpen, Heart, Award, Target, Brain, Lightbulb, Shield, TrendingUp, Clock } from 'lucide-react';

// // const Home = () => {
// //   useEffect(() => {
// //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //       anchor.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         document.querySelector(this.getAttribute('href'))?.scrollIntoView({
// //           behavior: 'smooth'
// //         });
// //       });
// //     });
// //   }, []);

// //   return (
// //     <div className="min-h-screen font-sans bg-gray-50 overflow-x-hidden">
// //       {/* Sticky Header */}
// //       <header className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full z-50 border-b border-gray-200">
// //         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <motion.a
// //               href="#home"
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-3xl font-bold text-blue-600 flex items-center gap-3"
// //             >
// //               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
// //                 <span className="text-white text-xl">🧠</span>
// //               </div>
// //               Special AI
// //             </motion.a>
// //           </div>

// //           {/* Navigation */}
// //           <div className="hidden md:flex space-x-8">
// //             {["Home", "About", "Solutions", "Educators", "Parents", "Pricing", "Testimonials"].map((item, index) => (
// //               <motion.a
// //                 key={item}
// //                 href={`#${item.toLowerCase()}`}
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.8, delay: index * 0.1 }}
// //                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-semibold text-lg"
// //               >
// //                 {item}
// //                 <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
// //               </motion.a>
// //             ))}
// //           </div>

// //           {/* CTA Button */}
// //           <div>
// //             <motion.a
// //               href="https://dumroo.ai/register"
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.6 }}
// //               className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
// //             >
// //               Register Now 🚀
// //             </motion.a>
// //           </div>
// //         </nav>
// //       </header>

// //       <main className="pt-20">
// //         {/* Hero Section */}
// //         <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
// //           {/* Background Elements */}
// //           <div className="absolute inset-0 opacity-5">
// //             <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
// //             <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
// //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-300 rounded-full blur-2xl"></div>
// //           </div>

// //           {/* Background Images */}
// //           <div className="absolute inset-0 opacity-10">
// //             <img
// //               src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
// //               alt="Inclusive classroom"
// //               className="absolute top-10 left-10 w-32 h-32 object-cover rounded-2xl rotate-12"
// //             />
// //             <img
// //               src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200"
// //               alt="Teacher with students"
// //               className="absolute bottom-20 right-20 w-40 h-40 object-cover rounded-2xl -rotate-12"
// //             />
// //             <img
// //               src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
// //               alt="Learning environment"
// //               className="absolute top-1/2 right-10 w-36 h-36 object-cover rounded-2xl rotate-6"
// //             />
// //           </div>

// //           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
// //             {/* Left Content */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 1.2, ease: "easeOut" }}
// //               className="text-left"
// //             >
// //               <motion.h1
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 1, delay: 0.2 }}
// //                 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight mb-8"
// //               >
// //                 Empowering Every Mind with{' '}
// //                 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
// //                   Special AI
// //                 </span>
// //                 🌟
// //               </motion.h1>
// //               <motion.p
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 1, delay: 0.4 }}
// //                 className="text-2xl md:text-3xl text-gray-600 mb-10 leading-relaxed font-medium"
// //               >
// //                 Transforming education for students with diverse needs through AI-powered personalized learning plans and inclusive tools 
// //               </motion.p>
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 1, delay: 0.6 }}
// //                 className="flex flex-col sm:flex-row gap-6"
// //               >
// //                 <a
// //                   href="https://dumroo.ai/register"
// //                   className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl text-center"
// //                 >
// //                   Register Now 🚀
// //                 </a>
// //                 <a
// //                   href="#solutions"
// //                   className="bg-white text-blue-600 border-3 border-blue-500 px-10 py-5 rounded-full hover:bg-blue-50 hover:shadow-xl transition-all duration-300 font-bold text-xl text-center"
// //                 >
// //                   Learn More 📖
// //                 </a>
// //               </motion.div>
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 1, delay: 0.8 }}
// //                 className="mt-10 flex items-center gap-8 text-lg text-gray-600"
// //               >
// //                 <div className="flex items-center gap-3">
// //                   <Users className="w-6 h-6 text-blue-500" />
// //                   <span className="font-semibold">10,000+ Students Supported </span>
// //                 </div>
// //                 <div className="flex items-center gap-3">
// //                   <Award className="w-6 h-6 text-blue-500" />
// //                   <span className="font-semibold">Compliance Ready </span>
// //                 </div>
// //               </motion.div>
// //             </motion.div>

// //             {/* Right Image */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 1.2, delay: 0.3 }}
// //               className="relative"
// //             >
// //               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
// //                 <img
// //                   src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                   alt="Diverse group of students and teacher in inclusive classroom setting"
// //                   className="w-full h-[500px] object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
// //               </div>
// //               {/* Floating stats */}
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.8, delay: 1 }}
// //                 className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200"
// //               >
// //                 <div className="text-3xl font-bold text-blue-600">50+</div>
// //                 <div className="text-lg text-gray-600 font-medium">Institutions </div>
// //               </motion.div>
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.8, delay: 1.2 }}
// //                 className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200"
// //               >
// //                 <div className="text-3xl font-bold text-blue-600">98%</div>
// //                 <div className="text-lg text-gray-600 font-medium">Satisfaction</div>
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* About Section */}
// //         <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50 relative">
// //           {/* Background Images */}
// //           <div className="absolute inset-0 opacity-5">
// //             <img
// //               src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200"
// //               alt="Learning environment"
// //               className="absolute top-20 left-20 w-48 h-48 object-cover rounded-3xl rotate-6"
// //             />
// //             <img
// //               src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
// //               alt="Inclusive classroom"
// //               className="absolute bottom-20 right-20 w-56 h-56 object-cover rounded-3xl -rotate-6"
// //             />
// //           </div>

// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-5xl md:text-6xl font-bold text-gray-800 mb-8"
// //             >
// //               About Special AI 🎓
// //             </motion.h2>
// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="text-2xl text-gray-600 max-w-5xl mx-auto mb-16 leading-relaxed font-medium"
// //             >
// //               Special AI, a Dumroo.ai initiative, revolutionizes education for students with diverse needs by leveraging AI to simplify personalized learning plans, enhance accessibility, and foster inclusive learning environments 
// //             </motion.p>
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="grid grid-cols-1 md:grid-cols-3 gap-10"
// //             >
// //               {[
// //                 { stat: "10,000+", desc: "Students Supported 👥", color: "from-blue-500 to-indigo-500" },
// //                 { stat: "50+", desc: "Institutions Partnered 🏫", color: "from-indigo-500 to-blue-600" }, 
// //                 { stat: "20+", desc: "AI Tools Developed 🛠️", color: "from-blue-600 to-gray-300" }
// //               ].map((item, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 50 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.2 }}
// //                   className={`p-10 bg-gradient-to-br ${item.color} rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl hover:scale-105 transition-all duration-300`}
// //                 >
// //                   <div className="text-4xl font-bold text-white mb-3">{item.stat}</div>
// //                   <p className="text-white/90 font-semibold text-xl">{item.desc}</p>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Solutions Section */}
// //         <section id="solutions" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
// //           {/* Background pattern */}
// //           <div className="absolute inset-0 opacity-5">
// //             <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
// //             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
// //           </div>

// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //             <motion.h1
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8"
// //             >
// //               AI-Powered Solutions for{' '}
// //               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //                 Special Education
// //               </span>
// //               🤖
// //             </motion.h1>
// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="text-2xl text-gray-600 text-center max-w-5xl mx-auto mb-16 font-medium"
// //             >
// //               Explore tools designed to streamline learning plan workflows and improve student outcomes 
// //             </motion.p>
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
// //             >
// //               {[
// //                 // { name: "Diagnostic Assessment", desc: "Conduct initial assessments to identify student strengths and needs. 🔍", color: "from-blue-500 to-indigo-500" },
// //                 // { name: "Learning Goals", desc: "Generate tailored goals and objectives for each student. 🎯", color: "from-indigo-500 to-blue-600" },
// //                 // { name: "Lesson Planning", desc: "Develop customized instructional plans aligned with goals. 📚", color: "from-blue-600 to-gray-300" },
// //                 // { name: "Session Tracking", desc: "Log sessions and data for ongoing monitoring. 📋", color: "from-gray-300 to-blue-500" },
// //                 // { name: "Progress Review", desc: "Evaluate progress with automated analytics. 📈", color: "from-blue-500 to-indigo-600" },
// //                 // { name: "Compliance Reports", desc: "Generate compliant documentation. ✅", color: "from-indigo-600 to-blue-500" },
// //                  { name: "Diagnostic Assessment", desc: "Conduct initial baseline assessments to identify student strengths and needs.", icon: "🔍", color: "from-primary-500 to-accent-500" },
// //                 { name: "IEP Goals & Objectives", desc: "Generate SMART goals and measurable objectives tailored to each student.", icon: "🎯", color: "from-accent-500 to-primary-600" },
// //                 { name: "Lesson Planning", desc: "Create customized instructional plans aligned with IEP goals.", icon: "📚", color: "from-primary-600 to-secondary-500" },
// //                 { name: "Session Tracking", desc: "Log sessions and behavioral data for ongoing monitoring.", icon: "📋", color: "from-secondary-500 to-primary-500" },
// //                 { name: "Progress Review", desc: "Assess goal advancement with automated analytics and visualizations.", icon: "📈", color: "from-primary-500 to-accent-600" },
// //                 { name: "Compliance Reports", desc: "Generate IDEA-compliant documentation for accountability.", icon: "✅", color: "from-accent-600 to-primary-500" },
// //               ].map((tool, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 50 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1 }}
// //                   whileHover={{ scale: 1.05, y: -10 }}
// //                   className="p-8 bg-white rounded-3xl shadow-2xl border border-neutral-200 hover:shadow-3xl transition-all duration-300 group"
// //                 >
// //                   <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
// //                     <span className="text-3xl">{tool.icon}</span>
// //                   </div>
// //                   <h3 className="text-2xl font-bold text-secondary-800 mb-4">{tool.name}</h3>
// //                   <p className="text-secondary-600 mb-6 text-lg leading-relaxed">{tool.desc}</p>
// //                   <a
// //                     href="https://dumroo.ai/login"
// //                     className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg group-hover:translate-x-2 transition-all duration-300"
// //                   >
// //                     Try Demo →
// //                   </a>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Educators Section */}
// //         <section id="educators" className="py-24 bg-gradient-to-br from-white to-gray-50">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //               <motion.div
// //                 initial={{ opacity: 0, x: -50 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.8 }}
// //               >
                
// //                 <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
// //                   Empower{' '}
// //                   <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //                     Educators
// //                   </span>{' '}
// //                   with Special AI 👩‍🏫
// //                 </h1>
// //                 <p className="text-2xl text-gray-600 mb-10 font-medium leading-relaxed">
// //                   Simplify learning plan management and focus on teaching students 🌟
// //                 </p>
// //                 <div className="space-y-8">
// //                   {[
// //                     { title: "IEP Workflow Progress", desc: "Streamline the entire IEP process from assessment to reporting.", icon: "📝", color: "from-primary-500 to-accent-500" },
// //                     { title: "Lesson Planning", desc: "Create tailored lesson plans aligned with student goals.", icon: "📚", color: "from-accent-500 to-primary-600" },
// //                     { title: "Progress & Compliance", desc: "Track progress and generate IDEA-compliant reports effortlessly.", icon: "✅", color: "from-primary-600 to-secondary-500" },
// //                   ].map((tool, index) => (
// //                     <motion.div
// //                       key={index}
// //                       initial={{ opacity: 0, x: -30 }}
// //                       whileInView={{ opacity: 1, x: 0 }}
// //                       transition={{ delay: index * 0.2 }}
// //                       className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-xl border border-neutral-200 hover:shadow-2xl transition-all duration-300"
// //                     >
// //                       <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
// //                          <span className="text-2xl">{tool.icon}</span>
// //                       </div>
                      
// //                       <div>
// //                         <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
// //                         <p className="text-gray-600 text-lg">{tool.desc}</p>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //               <motion.div
// //                 initial={{ opacity: 0, x: 50 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.8 }}
// //                 className="relative"
// //               >
// //                 <img
// //                   src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                   alt="Educator assisting students"
// //                   className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-3xl"></div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Parents Section */}
// //         <section id="parents" className="py-24 bg-gradient-to-br from-gray-50 to-white">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //               <motion.div
// //                 initial={{ opacity: 0, x: -50 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.8 }}
// //                 className="relative"
// //               >
// //                 <img
// //                   src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                   alt="Parents and educators collaborating"
// //                   className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-3xl"></div>
// //               </motion.div>
// //               <motion.div
// //                 initial={{ opacity: 0, x: 50 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.8 }}
// //               >
// //                 <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
// //                   Partnering with{' '}
// //                   <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //                     Parents
// //                   </span>{' '}
// //                   for Student Success 👨‍👩‍👧‍👦
// //                 </h1>
// //                 <p className="text-2xl text-gray-600 mb-10 font-medium leading-relaxed">
// //                   Stay engaged with tools designed for collaboration and support 🤝
// //                 </p>
// //                 <div className="space-y-8">
// //                   {[
// //                     { title: "Parent Input", desc: "Share perspectives to shape your child's IEP.", icon: "🤝", color: "from-primary-500 to-accent-500" },
// //                     { title: "Progress Review", desc: "Access real-time updates on your child's goals.", icon: "📈", color: "from-accent-500 to-primary-600" },
// //                     { title: "IEP Reports", desc: "Review clear, parent-friendly reports.", icon: "📄", color: "from-primary-600 to-secondary-500" },
// //                   ].map((tool, index) => (
// //                     <motion.div
// //                       key={index}
// //                       initial={{ opacity: 0, x: 30 }}
// //                       whileInView={{ opacity: 1, x: 0 }}
// //                       transition={{ delay: index * 0.2 }}
// //                       className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
// //                     >
// //                       <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
// //                         <span className="text-2xl">{tool.icon}</span>
// //                       </div>
// //                       <div>
// //                         <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
// //                         <p className="text-gray-600 text-lg">{tool.desc}</p>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Testimonials Section */}
// //         <section id="testimonials" className="py-24 bg-gradient-to-br from-white to-gray-50">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8"
// //             >
// //               What Educators Say 💬
// //             </motion.h2>
// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16 font-medium"
// //             >
// //               Hear from educators transforming classrooms with Special AI 🌟
// //             </motion.p>
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="grid grid-cols-1 md:grid-cols-3 gap-10"
// //             >
// //               {[
// //                 {
// //                   name: "Sarah Johnson",
// //                   role: "Special Education Teacher",
// //                   location: "City A",
// //                   image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
// //                   quote: "Special AI has transformed how I create learning plans. It saves me hours! 🙌",
// //                   rating: 5
// //                 },
// //                 {
// //                   name: "Michael Rodriguez",
// //                   role: "School Administrator",
// //                   location: "City B",
// //                   image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
// //                   quote: "The reports are detailed and have improved our compliance significantly. 📈",
// //                   rating: 5
// //                 },
// //                 {
// //                   name: "Emily Chen",
// //                   role: "Learning Coordinator",
// //                   location: "City C",
// //                   image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
// //                   quote: "Collaboration features have strengthened our educator-parent partnerships. ❤️",
// //                   rating: 5
// //                 }
// //               ].map((testimonial, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 50 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.2 }}
// //                   className="p-8 bg-white rounded-3xl shadow-2xl border border-gray-200 hover:shadow-3xl hover:scale-105 transition-all duration-300"
// //                 >
// //                   <div className="flex items-center mb-6">
// //                     <img
// //                       src={testimonial.image}
// //                       alt={testimonial.name}
// //                       className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100"
// //                     />
// //                     <div>
// //                       <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
// //                       <p className="text-gray-600 font-medium">{testimonial.role}</p>
// //                       <p className="text-blue-600 text-sm font-semibold">{testimonial.location}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex mb-4">
// //                     {[...Array(testimonial.rating)].map((_, i) => (
// //                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
// //                     ))}
// //                   </div>
// //                   <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Pricing Section */}
// //         <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8"
// //             >
// //               Simple Pricing for Institutions 💰
// //             </motion.h2>
// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16 font-medium"
// //             >
// //               Choose the perfect plan for your institution. All plans include full compliance support ✅
// //             </motion.p>
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="grid grid-cols-1 md:grid-cols-3 gap-10"
// //             >
// //               {[
// //                 {
// //                   name: "Starter",
// //                   price: "$29",
// //                   period: "per educator/month",
// //                   description: "Ideal for individual educators",
// //                   features: [
// //                     "Up to 25 students",
// //                     "Basic learning plan generation",
// //                     "Progress tracking",
// //                     "Email support",
// //                     "Compliance tools"
// //                   ],
// //                   popular: false,
// //                   color: "from-blue-500 to-indigo-500"
// //                 },
// //                 {
// //                   name: "Professional",
// //                   price: "$79",
// //                   period: "per educator/month",
// //                   description: "Perfect for education teams",
// //                   features: [
// //                     "Up to 100 students",
// //                     "Advanced learning plan generation",
// //                     "Detailed analytics",
// //                     "Priority support",
// //                     "Parent collaboration tools",
// //                     "Custom reporting",
// //                     "Team features"
// //                   ],
// //                   popular: true,
// //                   color: "from-indigo-500 to-blue-600"
// //                 },
// //                 {
// //                   name: "Enterprise",
// //                   price: "Custom",
// //                   period: "contact us",
// //                   description: "For large institutions",
// //                   features: [
// //                     "Unlimited students",
// //                     "Full platform access",
// //                     "Dedicated support",
// //                     "Custom integrations",
// //                     "Advanced security",
// //                     "Training & onboarding",
// //                     "Institution-wide analytics"
// //                   ],
// //                   popular: false,
// //                   color: "from-blue-600 to-gray-300"
// //                 }
// //               ].map((plan, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 50 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.2 }}
// //                   className={`p-10 rounded-3xl shadow-2xl border-2 transition-all duration-300 hover:shadow-3xl hover:scale-105 relative ${
// //                     plan.popular 
// //                       ? 'border-blue-500 bg-white' 
// //                       : 'border-gray-200 bg-white hover:border-blue-300'
// //                   }`}
// //                 >
// //                   {plan.popular && (
// //                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
// //                       <span className={`bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg`}>
// //                         Most Popular
// //                       </span>
// //                     </div>
// //                   )}
// //                   <h3 className="text-3xl font-bold text-gray-800 mb-4">{plan.name}</h3>
// //                   <div className="mb-6">
// //                     <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
// //                     <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
// //                   </div>
// //                   <p className="text-gray-600 mb-8 text-lg">{plan.description}</p>
// //                   <ul className="space-y-4 mb-10">
// //                     {plan.features.map((feature, featureIndex) => (
// //                       <li key={featureIndex} className="flex items-center">
// //                         <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
// //                         <span className="text-gray-700 text-lg">{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <a
// //                     href="https://dumroo.ai/register"
// //                     className={`w-full py-4 px-8 rounded-2xl font-bold transition-all duration-300 text-center block text-xl ${
// //                       plan.popular
// //                         ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl hover:scale-105`
// //                         : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
// //                     }`}
// //                   >
// //                     Register Now 🚀
// //                   </a>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.8 }}
// //               className="text-center mt-16"
// //             >
// //               <p className="text-gray-600 mb-6 text-xl">
// //                 All plans include a 14-day free trial. No credit card required 🎉
// //               </p>
// //               <p className="text-lg text-gray-500">
// //                 Special pricing available for supported institutions and non-profits 🌱
// //               </p>
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Final CTA Section */}
// //         <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
// //           {/* Background Elements */}
// //           <div className="absolute inset-0 opacity-10">
// //             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
// //             <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl"></div>
// //           </div>

// //           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-5xl md:text-6xl font-bold text-white mb-8"
// //             >
// //               Ready to Transform Education? 
// //             </motion.h2>
// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //               className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-medium leading-relaxed"
// //             >
// //               Join educators who are using Special AI to enhance outcomes for students with diverse needs 🎓
// //             </motion.p>
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="flex flex-col sm:flex-row gap-6 justify-center"
// //             >
// //               <a
// //                 href="https://dumroo.ai/register"
// //                 className="bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-bold shadow-2xl text-xl"
// //               >
// //                 Start Free Trial 🎯
// //               </a>
// //               <a
// //                 href="#testimonials"
// //                 className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-xl"
// //               >
// //                 See Success Stories 📖
// //               </a>
// //             </motion.div>
// //           </div>
// //         </section>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-900 text-gray-300 py-16">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
// //                   <span className="text-white text-xl">🧠</span>
// //                 </div>
// //                 <span className="text-2xl font-bold text-white">Special AI</span>
// //               </div>
// //               <p className="text-gray-400 mb-6 text-lg leading-relaxed">
// //                 Empowering special education with AI-powered tools 🌟
// //               </p>
// //               <p className="text-sm text-gray-500">
// //                 A Dumroo.ai initiative 💙
// //               </p>
// //             </div>
// //             <div>
// //               <h4 className="font-bold text-white mb-6 text-xl">Product</h4>
// //               <ul className="space-y-3">
// //                 <li><a href="#solutions" className="hover:text-blue-400 transition-colors text-lg">Solutions</a></li>
// //                 <li><a href="#pricing" className="hover:text-blue-400 transition-colors text-lg">Pricing</a></li>
// //                 <li><a href="https://dumroo.ai/register" className="hover:text-blue-400 transition-colors text-lg">Register Now 🚀</a></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h4 className="font-bold text-white mb-6 text-xl">Support</h4>
// //               <ul className="space-y-3">
// //                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg">Help Center</a></li>
// //                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg">Contact Us</a></li>
// //                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg">Training</a></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h4 className="font-bold text-white mb-6 text-xl">Legal</h4>
// //               <ul className="space-y-3">
// //                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg">Privacy Policy</a></li>
// //                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg">Terms of Service</a></li>
// //                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg">Compliance</a></li>
// //               </ul>
// //             </div>
// //           </div>
// //           <div className="border-t border-gray-800 mt-12 pt-8 text-center">
// //             <p className="text-gray-400 text-lg">
// //               © 2025 Special AI, a Dumroo.ai brand. All rights reserved. Made with ❤️
// //             </p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Home;


















// import React from 'react';
// import { motion } from 'framer-motion';
// import { CTAButton } from '../components/CTAButton';
// import { useEffect } from 'react';
// import { Star, Check, Users, BookOpen, Heart, Award, Target, Brain, Lightbulb, Shield, TrendingUp, Clock } from 'lucide-react';

// const Home = () => {
//   useEffect(() => {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href'))?.scrollIntoView({
//           behavior: 'smooth'
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="min-h-screen font-sans bg-gray-50 overflow-x-hidden">
//       {/* Sticky Header */}
//       <header className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full z-50 border-b border-gray-200">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <motion.a
//               href="#home"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-3xl font-bold text-blue-600 flex items-center gap-3"
//             >
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
//                 <span className="text-white text-xl">🧠</span>
//               </div>
//               Special AI
//             </motion.a>
//           </div>

//           {/* Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {["Home", "About", "Solutions", "Educators", "Parents", "Pricing", "Testimonials"].map((item, index) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-semibold text-lg"
//               >
//                 {item}
//                 <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//               </motion.a>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div>
//             <motion.a
//               href="https://dumroo.ai/register"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
//             >
//               Register Now 🚀
//             </motion.a>
//           </div>
//         </nav>
//       </header>

//       <main className="pt-20">
//         {/* Hero Section */}
//         <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
//           {/* Background Elements */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500 rounded-full blur-3xl md:w-72 md:h-72 sm:w-48 sm:h-48"></div>
//             <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-indigo-500 rounded-full blur-3xl md:w-60 md:h-60 sm:w-40 sm:h-40"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-300 rounded-full blur-2xl md:w-48 md:h-48 sm:w-32 sm:h-32"></div>
//           </div>

//           {/* Background Images */}
//           <div className="absolute inset-0 opacity-10">
//             <img
//               src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Inclusive classroom"
//               className="absolute top-10 left-10 w-32 h-32 object-cover rounded-2xl rotate-12 md:w-24 md:h-24 sm:w-16 sm:h-16"
//             />
//             <img
//               src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Teacher with students"
//               className="absolute bottom-20 right-20 w-40 h-40 object-cover rounded-2xl -rotate-12 md:w-32 md:h-32 sm:w-20 sm:h-20"
//             />
//             <img
//               src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Learning environment"
//               className="absolute top-1/2 right-10 w-36 h-36 object-cover rounded-2xl rotate-6 md:w-28 md:h-28 sm:w-18 sm:h-18"
//             />
//           </div>

//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1.2, ease: "easeOut" }}
//               className="text-left"
//             >
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.2 }}
//                 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight mb-8 sm:text-4xl"
//               >
//                 Empowering Every Mind with{' '}
//                 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
//                   Special AI
//                 </span>
//                 🌟
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.4 }}
//                 className="text-2xl md:text-3xl text-gray-600 mb-10 leading-relaxed font-medium sm:text-xl"
//               >
//                 Transforming education for students with diverse needs through AI-powered personalized learning plans and inclusive tools 
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.6 }}
//                 className="flex flex-col sm:flex-row gap-6"
//               >
//                 <a
//                   href="https://dumroo.ai/register"
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl text-center sm:px-6 sm:text-lg"
//                 >
//                   Register Now 🚀
//                 </a>
//                 <a
//                   href="#solutions"
//                   className="bg-white text-blue-600 border-3 border-blue-500 px-10 py-5 rounded-full hover:bg-blue-50 hover:shadow-xl transition-all duration-300 font-bold text-xl text-center sm:px-6 sm:text-lg"
//                 >
//                   Learn More 📖
//                 </a>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 className="mt-10 flex items-center gap-8 text-lg text-gray-600 sm:flex-col sm:gap-4 sm:mt-6"
//               >
//                 <div className="flex items-center gap-3">
//                   <Users className="w-6 h-6 text-blue-500" />
//                   <span className="font-semibold">10,000+ Students Supported </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Award className="w-6 h-6 text-blue-500" />
//                   <span className="font-semibold">Compliance Ready </span>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Right Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//               className="relative"
//             >
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="Diverse group of students and teacher in inclusive classroom setting"
//                   className="w-full h-[500px] object-cover sm:h-[300px] md:h-[400px]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
//               </div>
//               {/* Floating stats */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 1 }}
//                 className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 sm:-bottom-4 sm:-left-4 sm:p-4 md:p-5"
//               >
//                 <div className="text-3xl font-bold text-blue-600 sm:text-xl">50+</div>
//                 <div className="text-lg text-gray-600 font-medium sm:text-sm">Institutions </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 1.2 }}
//                 className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 sm:-top-4 sm:-right-4 sm:p-4 md:p-5"
//               >
//                 <div className="text-3xl font-bold text-blue-600 sm:text-xl">98%</div>
//                 <div className="text-lg text-gray-600 font-medium sm:text-sm">Satisfaction</div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50 relative">
//           {/* Background Images */}
//           <div className="absolute inset-0 opacity-5">
//             <img
//               src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Learning environment"
//               className="absolute top-20 left-20 w-48 h-48 object-cover rounded-3xl rotate-6 md:w-36 md:h-36 sm:w-24 sm:h-24"
//             />
//             <img
//               src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
//               alt="Inclusive classroom"
//               className="absolute bottom-20 right-20 w-56 h-56 object-cover rounded-3xl -rotate-6 md:w-40 md:h-40 sm:w-28 sm:h-28"
//             />
//           </div>

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 sm:text-3xl"
//             >
//               About Special AI 🎓
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-2xl text-gray-600 max-w-5xl mx-auto mb-16 leading-relaxed font-medium sm:text-xl"
//             >
//               Special AI, a Dumroo.ai initiative, revolutionizes education for students with diverse needs by leveraging AI to simplify personalized learning plans, enhance accessibility, and foster inclusive learning environments 
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-6"
//             >
//               {[
//                 { stat: "10,000+", desc: "Students Supported 👥", color: "from-blue-500 to-indigo-500" },
//                 { stat: "50+", desc: "Institutions Partnered 🏫", color: "from-indigo-500 to-blue-600" }, 
//                 { stat: "20+", desc: "AI Tools Developed 🛠️", color: "from-blue-600 to-gray-300" }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className={`p-10 bg-gradient-to-br ${item.color} rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl hover:scale-105 transition-all duration-300 sm:p-6 sm:text-center`}
//                 >
//                   <div className="text-4xl font-bold text-white mb-3 sm:text-2xl">{item.stat}</div>
//                   <p className="text-white/90 font-semibold text-xl sm:text-lg">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Solutions Section */}
//         <section id="solutions" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
//           {/* Background pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl md:w-56 md:h-56 sm:w-40 sm:h-40"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl md:w-72 md:h-72 sm:w-48 sm:h-48"></div>
//           </div>

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8 sm:text-3xl"
//             >
//               AI-Powered Solutions for{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Special Education
//               </span>
//               🤖
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-2xl text-gray-600 text-center max-w-5xl mx-auto mb-16 font-medium sm:text-xl"
//             >
//               Explore tools designed to streamline learning plan workflows and improve student outcomes 
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6"
//             >
//               {[
//                 { name: "Diagnostic Assessment", desc: "Conduct initial baseline assessments to identify student strengths and needs.", icon: "🔍", color: "from-primary-500 to-accent-500" },
//                 { name: "IEP Goals & Objectives", desc: "Generate SMART goals and measurable objectives tailored to each student.", icon: "🎯", color: "from-accent-500 to-primary-600" },
//                 { name: "Lesson Planning", desc: "Create customized instructional plans aligned with IEP goals.", icon: "📚", color: "from-primary-600 to-secondary-500" },
//                 { name: "Session Tracking", desc: "Log sessions and behavioral data for ongoing monitoring.", icon: "📋", color: "from-secondary-500 to-primary-500" },
//                 { name: "Progress Review", desc: "Assess goal advancement with automated analytics and visualizations.", icon: "📈", color: "from-primary-500 to-accent-600" },
//                 { name: "Compliance Reports", desc: "Generate IDEA-compliant documentation for accountability.", icon: "✅", color: "from-accent-600 to-primary-500" },
//               ].map((tool, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -10 }}
//                   className="p-8 bg-white rounded-3xl shadow-2xl border border-neutral-200 hover:shadow-3xl transition-all duration-300 group sm:p-4 sm:text-center"
//                 >
//                   <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 sm:w-12 sm:h-12 sm:mb-4`}>
//                     <span className="text-3xl sm:text-2xl">{tool.icon}</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-secondary-800 mb-4 sm:text-xl">{tool.name}</h3>
//                   <p className="text-secondary-600 mb-6 text-lg leading-relaxed sm:text-base sm:mb-4">{tool.desc}</p>
//                   <a
//                     href="https://dumroo.ai/login"
//                     className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg group-hover:translate-x-2 transition-all duration-300 sm:text-base"
//                   >
//                     Try Demo →
//                   </a>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Educators Section */}
//         <section id="educators" className="py-24 bg-gradient-to-br from-white to-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center sm:gap-8">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 sm:text-3xl">
//                   Empower{' '}
//                   <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                     Educators
//                   </span>{' '}
//                   with Special AI 👩‍🏫
//                 </h1>
//                 <p className="text-2xl text-gray-600 mb-10 font-medium leading-relaxed sm:text-xl sm:mb-6">
//                   Simplify learning plan management and focus on teaching students 🌟
//                 </p>
//                 <div className="space-y-8 sm:space-y-6">
//                   {[
//                     { title: "IEP Workflow Progress", desc: "Streamline the entire IEP process from assessment to reporting.", icon: "📝", color: "from-primary-500 to-accent-500" },
//                     { title: "Lesson Planning", desc: "Create tailored lesson plans aligned with student goals.", icon: "📚", color: "from-accent-500 to-primary-600" },
//                     { title: "Progress & Compliance", desc: "Track progress and generate IDEA-compliant reports effortlessly.", icon: "✅", color: "from-primary-600 to-secondary-500" },
//                   ].map((tool, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.2 }}
//                       className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-xl border border-neutral-200 hover:shadow-2xl transition-all duration-300 sm:flex-col sm:p-4 sm:items-center"
//                     >
//                       <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0 sm:w-12 sm:h-12`}>
//                         <span className="text-2xl sm:text-xl">{tool.icon}</span>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2 sm:text-lg">{tool.title}</h3>
//                         <p className="text-gray-600 text-lg sm:text-base">{tool.desc}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative"
//               >
//                 <img
//                   // src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="Educator assisting students"
//                   className="w-full h-[500px] object-cover rounded-3xl shadow-2xl sm:h-[250px] md:h-[350px]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-3xl"></div>
                
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Parents Section */}
//         <section id="parents" className="py-24 bg-gradient-to-br from-gray-50 to-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center sm:gap-8">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative"
//               >
//                 <img
//                   src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="Parents and educators collaborating"
//                   className="w-full h-[500px] object-cover rounded-3xl shadow-2xl sm:h-[250px] md:h-[350px]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-3xl"></div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 sm:text-3xl">
//                   Partnering with{' '}
//                   <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                     Parents
//                   </span>{' '}
//                   for Student Success 👨‍👩‍👧‍👦
//                 </h1>
//                 <p className="text-2xl text-gray-600 mb-10 font-medium leading-relaxed sm:text-xl sm:mb-6">
//                   Stay engaged with tools designed for collaboration and support 🤝
//                 </p>
//                 <div className="space-y-8 sm:space-y-6">
//                   {[
//                     { title: "Parent Input", desc: "Share perspectives to shape your child's IEP.", icon: "🤝", color: "from-primary-500 to-accent-500" },
//                     { title: "Progress Review", desc: "Access real-time updates on your child's goals.", icon: "📈", color: "from-accent-500 to-primary-600" },
//                     { title: "IEP Reports", desc: "Review clear, parent-friendly reports.", icon: "📄", color: "from-primary-600 to-secondary-500" },
//                   ].map((tool, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: 30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.2 }}
//                       className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 sm:flex-col sm:p-4 sm:items-center"
//                     >
//                       <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0 sm:w-12 sm:h-12`}>
//                         <span className="text-2xl sm:text-xl">{tool.icon}</span>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2 sm:text-lg">{tool.title}</h3>
//                         <p className="text-gray-600 text-lg sm:text-base">{tool.desc}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="py-24 bg-gradient-to-br from-white to-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8 sm:text-3xl"
//             >
//               What Educators Say 💬
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16 font-medium sm:text-xl"
//             >
//               Hear from educators transforming classrooms with Special AI 🌟
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-6"
//             >
//               {[
//                 {
//                   name: "Sarah Johnson",
//                   role: "Special Education Teacher",
//                   location: "City A",
//                   image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
//                   quote: "Special AI has transformed how I create learning plans. It saves me hours! 🙌",
//                   rating: 5
//                 },
//                 {
//                   name: "Michael Rodriguez",
//                   role: "School Administrator",
//                   location: "City B",
//                   image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
//                   quote: "The reports are detailed and have improved our compliance significantly. 📈",
//                   rating: 5
//                 },
//                 {
//                   name: "Emily Chen",
//                   role: "Learning Coordinator",
//                   location: "City C",
//                   image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
//                   quote: "Collaboration features have strengthened our educator-parent partnerships. ❤️",
//                   rating: 5
//                 }
//               ].map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className="p-8 bg-white rounded-3xl shadow-2xl border border-gray-200 hover:shadow-3xl hover:scale-105 transition-all duration-300 sm:p-4 sm:text-center"
//                 >
//                   <div className="flex items-center mb-6 sm:flex-col sm:items-center">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100 sm:mr-0 sm:mb-2 sm:w-12 sm:h-12"
//                     />
//                     <div>
//                       <h4 className="font-bold text-gray-800 text-lg sm:text-base">{testimonial.name}</h4>
//                       <p className="text-gray-600 font-medium sm:text-sm">{testimonial.role}</p>
//                       <p className="text-blue-600 text-sm font-semibold sm:text-xs">{testimonial.location}</p>
//                     </div>
//                   </div>
//                   <div className="flex mb-4 sm:justify-center">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-700 italic text-lg leading-relaxed sm:text-base">{`"${testimonial.quote}"`}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Pricing Section */}
//         <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8 sm:text-3xl"
//             >
//               Simple Pricing for Institutions 💰
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-16 font-medium sm:text-xl"
//             >
//               Choose the perfect plan for your institution. All plans include full compliance support ✅
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-6"
//             >
//               {[
//                 {
//                   name: "Starter",
//                   price: "$29",
//                   period: "per educator/month",
//                   description: "Ideal for individual educators",
//                   features: [
//                     "Up to 25 students",
//                     "Basic learning plan generation",
//                     "Progress tracking",
//                     "Email support",
//                     "Compliance tools"
//                   ],
//                   popular: false,
//                   color: "from-blue-500 to-indigo-500"
//                 },
//                 {
//                   name: "Professional",
//                   price: "$79",
//                   period: "per educator/month",
//                   description: "Perfect for education teams",
//                   features: [
//                     "Up to 100 students",
//                     "Advanced learning plan generation",
//                     "Detailed analytics",
//                     "Priority support",
//                     "Parent collaboration tools",
//                     "Custom reporting",
//                     "Team features"
//                   ],
//                   popular: true,
//                   color: "from-indigo-500 to-blue-600"
//                 },
//                 {
//                   name: "Enterprise",
//                   price: "Custom",
//                   period: "contact us",
//                   description: "For large institutions",
//                   features: [
//                     "Unlimited students",
//                     "Full platform access",
//                     "Dedicated support",
//                     "Custom integrations",
//                     "Advanced security",
//                     "Training & onboarding",
//                     "Institution-wide analytics"
//                   ],
//                   popular: false,
//                   color: "from-blue-600 to-gray-300"
//                 }
//               ].map((plan, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className={`p-10 rounded-3xl shadow-2xl border-2 transition-all duration-300 hover:shadow-3xl hover:scale-105 relative ${
//                     plan.popular 
//                       ? 'border-blue-500 bg-white' 
//                       : 'border-gray-200 bg-white hover:border-blue-300'
//                   } sm:p-6 sm:text-center`}
//                 >
//                   {plan.popular && (
//                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 sm:-top-4">
//                       <span className={`bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg sm:px-4 sm:text-sm`}>
//                         Most Popular
//                       </span>
//                     </div>
//                   )}
//                   <h3 className="text-3xl font-bold text-gray-800 mb-4 sm:text-2xl">{plan.name}</h3>
//                   <div className="mb-6 sm:mb-4">
//                     <span className="text-5xl font-bold text-gray-800 sm:text-3xl">{plan.price}</span>
//                     <span className="text-gray-600 ml-2 text-lg sm:text-base">{plan.period}</span>
//                   </div>
//                   <p className="text-gray-600 mb-8 text-lg sm:text-base sm:mb-4">{plan.description}</p>
//                   <ul className="space-y-4 mb-10 sm:space-y-2 sm:mb-6">
//                     {plan.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center sm:flex-col sm:items-start">
//                         <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 sm:mr-0 sm:mb-1" />
//                         <span className="text-gray-700 text-lg sm:text-base">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <a
//                     href="https://dumroo.ai/register"
//                     className={`w-full py-4 px-8 rounded-2xl font-bold transition-all duration-300 text-center block text-xl ${
//                       plan.popular
//                         ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl hover:scale-105`
//                         : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                     } sm:py-3 sm:px-6 sm:text-lg`}
//                   >
//                     Register Now 🚀
//                   </a>
//                 </motion.div>
//               ))}
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="text-center mt-16 sm:mt-8"
//             >
//               <p className="text-gray-600 mb-6 text-xl sm:text-lg">
//                 All plans include a 14-day free trial. No credit card required 🎉
//               </p>
//               <p className="text-lg text-gray-500 sm:text-base">
//                 Special pricing available for supported institutions and non-profits 🌱
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Final CTA Section */}
//         <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
//           {/* Background Elements */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl md:w-72 md:h-72 sm:w-48 sm:h-48"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl md:w-60 md:h-60 sm:w-40 sm:h-40"></div>
//           </div>

//           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold text-white mb-8 sm:text-3xl"
//             >
//               Ready to Transform Education? 
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-medium leading-relaxed sm:text-xl sm:mb-6"
//             >
//               Join educators who are using Special AI to enhance outcomes for students with diverse needs 🎓
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="flex flex-col sm:flex-row gap-6 justify-center"
//             >
//               <a
//                 href="https://dumroo.ai/register"
//                 className="bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-bold shadow-2xl text-xl sm:px-6 sm:text-lg"
//               >
//                 Start Free Trial 🎯
//               </a>
//               <a
//                 href="#testimonials"
//                 className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-xl sm:px-6 sm:text-lg"
//               >
//                 See Success Stories 📖
//               </a>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-6">
//             <div>
//               <div className="flex items-center gap-3 mb-6 sm:flex-col sm:items-center">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
//                   <span className="text-white text-xl">🧠</span>
//                 </div>
//                 <span className="text-2xl font-bold text-white sm:text-xl">Special AI</span>
//               </div>
//               <p className="text-gray-400 mb-6 text-lg leading-relaxed sm:text-base">
//                 Empowering special education with AI-powered tools 🌟
//               </p>
//               <p className="text-sm text-gray-500 sm:text-xs">
//                 A Dumroo.ai initiative 💙
//               </p>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-6 text-xl sm:text-lg">Product</h4>
//               <ul className="space-y-3 sm:space-y-2">
//                 <li><a href="#solutions" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Solutions</a></li>
//                 <li><a href="#pricing" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Pricing</a></li>
//                 <li><a href="https://dumroo.ai/register" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Register Now 🚀</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-6 text-xl sm:text-lg">Support</h4>
//               <ul className="space-y-3 sm:space-y-2">
//                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Help Center</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Contact Us</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Training</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-6 text-xl sm:text-lg">Legal</h4>
//               <ul className="space-y-3 sm:space-y-2">
//                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Terms of Service</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors text-lg sm:text-base">Compliance</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center">
//             <p className="text-gray-400 text-lg sm:text-base">
//               © 2025 Special AI, a Dumroo.ai brand. All rights reserved. Made with ❤️
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;