/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Activity, 
  Trophy, 
  Stethoscope, 
  HeartPulse, 
  Brain, 
  Syringe,
  Star,
  ArrowRight,
  ShieldCheck,
  Users,
  Award
} from 'lucide-react';
import { CLINIC_INFO, SERVICES, TESTIMONIALS } from './constants';

const IconMap: Record<string, any> = {
  Activity,
  Trophy,
  Stethoscope,
  HeartPulse,
  Brain,
  Syringe,
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Mesh Background Decorations */}
      <div className="mesh-blob top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/50" />
      <div className="mesh-blob bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50" />

      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2 px-4 text-xs font-semibold hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {CLINIC_INFO.phone}</span>
            <span className="flex items-center gap-2"><Mail size={14} /> {CLINIC_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} /> {CLINIC_INFO.hours}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-primary/20">R</div>
            <span className="text-xl font-bold tracking-tight text-brand-slate uppercase">ReAlign <span className="text-brand-primary font-medium italic">PhysioCare</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <a href="#services" className="text-brand-slate hover:text-brand-primary transition-colors">Services</a>
            <a href="#about" className="text-brand-slate hover:text-brand-primary transition-colors">About Us</a>
            <a href="#contact" className="text-brand-slate hover:text-brand-primary transition-colors hover:underline">Contact</a>
            <button className="btn-primary px-6 py-2.5 text-sm uppercase tracking-wider">
              Book Consult
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden flex flex-col p-6 gap-4 font-medium"
            >
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="bg-brand-primary text-white px-6 py-3 rounded-xl w-full">
                Book Appointment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-brand-primary rounded-full text-xs font-bold tracking-wider uppercase mb-6">Expert Physical Therapy</div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-brand-slate leading-tight mb-6">
              Restore Your <span className="text-brand-primary italic">Movement</span>,<br/>Reclaim Your Life.
            </h1>
            <p className="text-lg text-brand-text leading-relaxed mb-10 max-w-xl">
              We specialize in evidence-based physical therapy techniques to treat acute injuries, chronic pain, and post-surgical recovery. Our personalized care plans ensure you get back to doing what you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4 text-lg">
                Start Recovery <ArrowRight size={20} className="inline ml-2" />
              </button>
              <a href="#services" className="btn-secondary px-8 py-4 text-lg flex items-center justify-center">
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-70">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-brand-primary">10+</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">Years Exp</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-brand-primary">15k+</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">Patients</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-brand-primary">4.9/5</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="glass-hero-panel w-[500px] h-[450px] overflow-hidden flex items-center justify-center p-6 relative">
              <div className="w-full h-full bg-gradient-to-br from-teal-500 to-blue-600 rounded-[24px] overflow-hidden shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Physiotherapy session" 
                  className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-teal-900/10 flex items-center justify-center">
                  <Activity size={80} className="text-white/40" />
                </div>
              </div>
              <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-xl">
                 <div className="text-xs font-bold text-brand-primary mb-1 uppercase tracking-widest">Next Opening</div>
                 <div className="text-brand-slate font-extrabold text-lg">Today, 4:30 PM — with Dr. Trivedi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Trust Tags */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck /> Certified Care</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Award /> Award Winning</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Users /> Personalized Focus</div>
          <div className="flex items-center gap-2 font-bold text-xl"><HeartPulse /> Holistic Healing</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Comprehensive <span className="text-brand-secondary">Treatments</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine advanced technology with traditional manual techniques to provide the most effective recovery experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = IconMap[service.icon] || Activity;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-8 group transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 bg-teal-100/50 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-extrabold mb-3">{service.title}</h3>
                  <p className="text-sm text-brand-text leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="text-brand-primary text-sm font-extrabold flex items-center gap-2 group-hover:gap-3 transition-all w-fit cursor-pointer"
                  >
                    VIEW DETAILS <ArrowRight size={14} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1579154235602-3c3757364b63?auto=format&fit=crop&q=80&w=1200" 
              alt="Medical equipment" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-primary rounded-3xl -z-10 hidden md:block" />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl mb-6">Expertise Dedicated to Your <span className="italic">Well-being</span></h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At ReAlign PhysioCare, we believe that movement is life. Our clinic in Ahmedabad is founded on the principles of precision, clinical excellence, and personalized attention.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Personalized Assessment", desc: "Every patient receives a unique recovery roadmap." },
                { title: "Advanced Modalities", desc: "Using Laser, US, and specialized manual adjustments." },
                { title: "Home Visit Availability", desc: "Bringing expert care to the comfort of your home." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex-shrink-0 flex items-center justify-center text-brand-primary">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 m-0">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-primary/10">
              Meet Our Specialists
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">Patient <span className="text-brand-secondary">Stories</span></h2>
            <p className="text-brand-surface/70 max-w-xl mx-auto">See how we've helped hundreds of patients return to the activities they love.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <div className="flex gap-1 mb-6 text-brand-secondary">
                  {[...Array(5)].map((_, star) => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-xl">{t.name}</div>
                <div className="text-brand-secondary text-sm">Verified Patient</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8">Get in <span className="text-brand-secondary">Touch</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 m-0">Location</h4>
                    <p className="text-gray-600 mt-1">{CLINIC_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 m-0">Phone</h4>
                    <p className="text-brand-primary text-xl font-bold mt-1">{CLINIC_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 m-0">Email</h4>
                    <p className="text-gray-600 mt-1">{CLINIC_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-3xl overflow-hidden shadow-inner h-64 bg-gray-200 relative grayscale">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col gap-2">
                  <MapPin size={48} />
                  <span className="font-bold">Google Maps Location</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              <h3 className="text-3xl mb-8">Schedule a Consultation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Condition/Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all">
                    <option>Select a service</option>
                    {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea rows={4} placeholder="Describe your condition..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                </div>
                <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:translate-y-[-2px] transition-all-custom">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-slate/40 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[40px] shadow-2xl relative z-10 p-8 md:p-12 overflow-x-hidden"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} className="text-brand-slate" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-bg rounded-3xl flex items-center justify-center text-brand-primary">
                  {(() => {
                    const ModalIcon = IconMap[selectedService.icon] || Activity;
                    return <ModalIcon size={32} />;
                  })()}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl text-brand-slate font-extrabold m-0">{selectedService.title}</h2>
                  <p className="text-brand-primary font-bold uppercase tracking-widest text-xs mt-1">Specialized Specialty Care</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-extrabold text-brand-slate mb-3 flex items-center gap-2 italic">
                    Overview
                  </h4>
                  <p className="text-brand-text leading-relaxed text-lg">
                    {selectedService.details}
                  </p>
                </div>

                {selectedService.subServices && (
                  <div className="grid gap-6">
                    <h4 className="text-lg font-extrabold text-brand-slate mb-2 italic">Core Programs</h4>
                    {selectedService.subServices.map((sub: any, idx: number) => (
                      <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-brand-primary/30 transition-all">
                        <h5 className="text-brand-primary font-extrabold text-lg mb-2">{sub.name}</h5>
                        <p className="text-brand-text text-sm leading-relaxed">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row gap-6 items-center justify-between">
                  <div>
                    <h5 className="font-extrabold text-brand-slate">Expert Care Guaranteed</h5>
                    <p className="text-xs text-brand-text uppercase tracking-widest mt-1">10+ Years of Clinical Expertise</p>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      window.location.hash = 'contact';
                    }}
                    className="btn-primary px-8 py-3 w-full md:w-auto"
                  >
                    Consult Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full bg-white/20 backdrop-blur-lg border-t border-white/40 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-brand-text">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">R</div>
              <span className="font-extrabold text-brand-slate uppercase tracking-wider">ReAlign PhysioCare</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <span>📍 {CLINIC_INFO.address.split(',')[1]}</span>
              <span>📞 {CLINIC_INFO.phone}</span>
              <span className="hidden lg:inline">{CLINIC_INFO.hours}</span>
            </div>

            <div className="font-bold text-brand-slate">
              © {new Date().getFullYear()} Realign Physiocare
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
