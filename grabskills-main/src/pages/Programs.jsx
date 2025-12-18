import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaLightbulb, FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FocusCard from "../components/FocusCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

export default function Programs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-950">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-bold">
          Our Programs
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          We run community-driven programs across education, environment,
          health, and livelihood to create long-term impact.
        </p>
      </motion.div>

      {/* PROGRAM CARDS */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
      >

        <motion.button
          variants={fadeUp}
          onClick={() => navigate("/environment")}
          className="text-left"
        >
          <FocusCard
            icon={<FaLeaf />}
            title="Environment & Climate Action"
            desc="Promoting sustainability, conservation, and climate resilience."
          />
        </motion.button>

        <motion.button
          variants={fadeUp}
          onClick={() => navigate("/entrepreneurship")}
          className="text-left"
        >
          <FocusCard
            icon={<FaUsers />}
            title="Entrepreneurship & Innovation Development"
            desc="Supporting startups, innovation, and grassroots entrepreneurs."
          />
        </motion.button>

        <motion.button
          variants={fadeUp}
          onClick={() => navigate("/education")}
          className="text-left"
        >
          <FocusCard
            icon={<FaLightbulb />}
            title="Education & Skill Development"
            desc="Enhancing learning outcomes and employable skills."
          />
        </motion.button>

        <motion.button
          variants={fadeUp}
          onClick={() => navigate("/health")}
          className="text-left"
        >
          <FocusCard
            icon={<FaHandHoldingHeart />}
            title="Health & Hygiene"
            desc="Improving access to healthcare and hygiene awareness."
          />
        </motion.button>

        <motion.button
          variants={fadeUp}
          onClick={() => navigate("/women-empowerment")}
          className="text-left"
        >
          <FocusCard
            icon={<FaUsers />}
            title="Women Empowerment"
            desc="Empowering women through education, leadership, and opportunity."
          />
        </motion.button>

        <motion.button
          variants={fadeUp}
          onClick={() => navigate("/rural-development")}
          className="text-left"
        >
          <FocusCard
            icon={<FaUsers />}
            title="Rural Development & Livelihood"
            desc="Strengthening rural economies and sustainable livelihoods."
          />
        </motion.button>

      </motion.div>
    </div>
  );
}