import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../assets/outdoordiscussion.webp";
import img2 from "../assets/educationBlog.avif";
import img3 from "../assets/EducationBlog2.avif";


const EducationBlog = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#FAF9F6] text-[#2D2D2D] min-h-screen font-serif selection:bg-amber-100">
      
      {/* --- HERO SECTION --- */}
      <header className="pt-24  px-6 text-center">
        <motion.h2 
          className="uppercase tracking-[0.2em] text-sm mb-2 text-gray-500 font-sans"
          {...fadeIn}
        >
          Thought Leadership & Strategy
        </motion.h2>
        <motion.h1 
          className="text-5xl md:text-7xl font-light italic mb-8 max-w-4xl mx-auto leading-tight"
          {...fadeIn}
        >
          Education as a Catalyst for Change
        </motion.h1>
      </header>

      {/* --- FEATURE IMAGE 1 --- */}
      <section className="px-6 max-w-6xl mx-auto mb-16">
        <motion.div 
          className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-gray-200"
          initial={{ clipPath: 'inset(10% 0% 10% 0%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img 
            src={`${img1}`} 
            alt="Students in discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <h3 className="text-white text-3xl md:text-4xl text-center px-10 italic drop-shadow-lg">
              "Knowledge is not just power; it is the architecture of progress."
            </h3>
          </div>
        </motion.div>
      </section>

      {/* --- CORE PHILOSOPHY / BRAND VOICE --- */}
      <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <motion.h4 className="uppercase tracking-widest text-xs text-gray-400 mb-6 font-sans" {...fadeIn}>
          Our Educational Ethos
        </motion.h4>
        <motion.p className="text-2xl md:text-3xl leading-relaxed text-gray-700 font-light" {...fadeIn}>
          Progressive / Intentional / Practical / Equitable / <span className="italic">Transformative</span>
        </motion.p>
        <div className="w-24 h-px bg-gray-300 mx-auto mt-12"></div>
      </section>

      {/* --- BRAND PILLARS (ASIMMETRIC GRID) --- */}
      <section className="max-w-6xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeIn}>
          <img 
            src={`${img2}`} 
            alt="Skills over theory"
            className="w-full aspect-[4/5] object-cover"
          />
        </motion.div>
        <motion.div className="space-y-12" {...fadeIn}>
          <div>
            <h5 className="uppercase tracking-widest text-xs text-gray-400 mb-2 font-sans">Pillar 01</h5>
            <h3 className="text-3xl mb-4 italic">The Skill-First Mandate</h3>
            <p className="text-gray-600 leading-relaxed">
              In an era of rapid AI integration, theoretical knowledge decays quickly. Skill-based education focuses on 
              high-agency competencies: critical thinking, complex problem-solving, and emotional intelligence. 
              We are moving from "knowing what" to "knowing how."
            </p>
          </div>
          <div>
            <h5 className="uppercase tracking-widest text-xs text-gray-400 mb-2 font-sans">Pillar 02</h5>
            <h3 className="text-3xl mb-4 italic">Economic Empowerment</h3>
            <p className="text-gray-600 leading-relaxed">
              Education acts as a catalyst by shortening the gap between learning and earning. By prioritizing 
              marketable skills, we dismantle systemic barriers to entry for marginalized communities.
            </p>
          </div>
          <div>
            <h5 className="uppercase tracking-widest text-xs text-gray-400 mb-2 font-sans">Pillar 03</h5>
            <h3 className="text-3xl mb-4 italic">Adaptive Resilience</h3>
            <p className="text-gray-600 leading-relaxed">
              True education teaches one how to unlearn and relearn. This adaptability is the primary 
              catalyst for lasting social and professional change.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- MANIFESTO SECTION --- */}
      <section className="bg-[#2D2D2D] text-[#FAF9F6] py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl mb-8 italic border-b border-gray-700 pb-8"
            {...fadeIn}
          >
            A Manifesto for the Modern Learner
          </motion.h2>
          <motion.div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans" {...fadeIn}>
            <p className="first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:font-serif italic">
              The lecture hall is no longer a physical space; it is a state of mind. 
              We believe that degrees are artifacts of the past, while skillsets are the currency of the future.
            </p>
            <p>
              We embrace the "messy magic" of the learning process—the trial, the error, 
              and the eventual mastery. We honor the builders, the coders, the writers, and the thinkers 
              who treat every day as a new curriculum.
            </p>
            <p className="pt-8 text-xl text-white italic">
              Here’s to the lifelong learners. Long live the curiosity that changes the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- VISION STATEMENT --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${img3}`}  
            alt="Vision"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
        </div>
        <motion.div className="relative z-10 max-w-2xl" {...fadeIn}>
          <h5 className="uppercase tracking-[0.3em] text-xs mb-8 font-sans">Our Vision</h5>
          <h2 className="text-4xl md:text-6xl font-light italic leading-tight">
            Democratizing mastery through practical wisdom.
          </h2>
        </motion.div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-20 border-t border-gray-200 text-center">
        <a href="#" className="text-gray-500 hover:text-black transition-colors uppercase tracking-widest text-sm font-sans underline underline-offset-8">
          See how skill-based learning works →
        </a>
      </footer>
    </div>
  );
};

export default EducationBlog;