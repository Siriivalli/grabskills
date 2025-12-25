import { useNavigate } from "react-router-dom";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
  useScroll
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import aboutHero from "../assets/about-hero.jpg";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: "easeOut" }
  }
};

const slideDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: "easeOut" }
  }
};

/* ---------------- COUNTER ---------------- */

function Counter({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-120px" });

  useEffect(() => {
    if (isInView) {
      count.set(0);
      setDisplay(0);

      const controls = animate(count, value, {
        duration: 4,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplay(Math.round(latest));
        }
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- PAGE ---------------- */

export default function About() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  return (
    <div>

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"
      />

      {/* ================= HERO ================= */}
      <section className="min-h-screen relative flex items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Building Hope. <br /> Empowering Lives.
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Creating sustainable change across communities.
          </p>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-28 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            We are a people-first organization committed to creating meaningful
            and lasting social impact. Our work is grounded in the belief that
            every individual deserves access to opportunity, dignity, and a
            better quality of life, regardless of background or circumstance.
            <br /><br />
            By working closely with communities, institutions, and volunteers,
            we identify real challenges and co-create solutions that are
            inclusive, practical, and sustainable. We emphasize empowerment
            over dependency, enabling communities to take ownership of their
            development journey.
          </p>
        </motion.div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-32 px-6 bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our journey began with a simple yet powerful belief — that
            sustainable social change requires long-term commitment, trust,
            and collaboration. From the beginning, we focused on addressing
            root causes rather than symptoms.
            <br /><br />
            Over the years, our work expanded across education, healthcare,
            livelihoods, and environmental sustainability. We continuously
            refine our programs using research, data analysis, and community
            feedback to ensure relevance and impact.
            <br /><br />
            Transparency and accountability guide every initiative we
            undertake. Our success is measured not only in numbers, but in
            improved quality of life, resilience, and empowered individuals
            shaping their own futures.
          </p>
        </motion.div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-16">Our Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-5xl font-extrabold text-green-600">
                <Counter value={20} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold">Lakh Lives Impacted</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-blue-600">
                <Counter value={2000} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold">Villages Reached</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-purple-600">
                <Counter value={400} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold">Projects Implemented</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-orange-600">
                <Counter value={27} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold">States Covered</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="py-32 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-28"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400"
            />

            {[
              ["2005", "Founded with a mission to uplift underserved communities."],
              ["2012", "Expanded programs across multiple regions."],
              ["2018", "Introduced integrated empowerment initiatives."],
              ["2024", "Reached millions through sustainable interventions."]
            ].map(([year, text], index) => (
              <motion.div
                key={index}
                variants={slideDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative mb-28 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-full md:w-[45%] bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl">
                  <h3 className="text-3xl font-bold text-indigo-600 mb-4">
                    {year}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {text}
                  </p>
                </div>

                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-10 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 border-8 border-white dark:border-gray-900 shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= OUR COMMITMENT ================= */}
      <section className="py-36 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Our Commitment to the Future
          </h2>

          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-white/90 mb-20">
            Our future initiatives are guided by evidence-based planning,
            continuous research, and alignment with global development goals.
            We combine data, local insights, and long-term partnerships to
            deliver impact that is inclusive, measurable, and lasting.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Evidence-Based Action", "Programs guided by research and evaluation."],
              ["Community-Led Solutions", "Local leadership at the core of initiatives."],
              ["Sustainable Impact", "Long-term resilience beyond immediate relief."]
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-white/85 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= TRANSPARENCY & PARTNERSHIPS ================= */}
      <section className="py-32 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Transparency & Partnerships
          </h2>

          <p className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-20">
            Transparency is fundamental to our work. We ensure responsible fund
            utilization, strong governance, and continuous monitoring of our
            programs. Strategic partnerships with institutions, governments,
            and grassroots organizations allow us to scale impact responsibly
            and sustainably.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Governance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ethical decision-making and compliance-driven leadership.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Accountability
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Impact tracking, audits, and public reporting.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                Partnerships
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Collaboration with stakeholders for collective impact.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* ================= FINAL CTA ================= */}
<section className="relative overflow-hidden bg-white dark:bg-gray-950 py-28 px-6">
  <div className="relative z-10 max-w-5xl mx-auto text-center">

    {/* SMALL TOP LABEL */}
    <motion.span
      initial={{ opacity: 0, letterSpacing: "0.1em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
      viewport={{ once: true }}
      className="inline-block uppercase text-sm font-bold text-green-600 dark:text-green-400 mb-6 tracking-widest"
    >
      Our Shared Future
    </motion.span>

    {/* MAIN HEADLINE */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-8"
    >
      BE THE{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
        CHANGE
      </span>
      <br />
      YOU WISH TO SEE.
    </motion.h2>

    {/* SUPPORTING TEXT */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
    >
      We aren't just building projects — we are building hope.  
      Join 5,000+ volunteers and donors dedicated to creating a sustainable
      and inclusive future for all.
    </motion.p>

    {/* CTA BUTTON */}
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <button
        onClick={() => navigate("/contact")}
        className="group relative px-10 py-5 bg-green-600 text-white font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-xl shadow-green-500/20"
      >
        <span className="relative z-10">Start Your Journey Today</span>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
          →
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </motion.div>

    {/* SOCIAL PROOF */}
    <div className="mt-20 flex flex-wrap justify-center gap-10 border-t border-green-200 dark:border-green-900 pt-12">
      {[
        { label: "Community Support", val: "98%" },
        { label: "Transparency Score", val: "A+" },
        { label: "Global Reach", val: "14 countries" }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 * i }}
          className="text-left"
        >
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {item.val}
          </p>
          <p className="text-xs uppercase tracking-tight text-gray-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

    </div>
  );
  
}
