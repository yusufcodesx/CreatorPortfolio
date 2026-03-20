import { Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isMobile = window.innerWidth < 640; // Tailwind's sm breakpoint


  return (
    <section id='hero' className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 border border-primary/30 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary"> Motion Designer & Video Creator</span>
            </motion.div>)}

          {/* Main Heading */}
          <motion.h1 initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-6 grid ">
            Hi, my name is <span className="text-primary mt-1 mb-3.5">Yakub.</span>
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Creator| Motion Designer| Video editor </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 5.0 }}
                className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Crafting high-energy content that captivates, converts, and keeps your audience hooked from start to finish.
          </p>

          {/* CTA Buttons */}
          <div className="flex  flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button className="group cursor-pointer px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
              onClick={() => scrollToSection('motion-design')}
            >
              <Play className="w-5 h-5" />
              View My Work
              <span
              >
                →
              </span>
            </button>

            <button
              className="px-8 py-4 cursor-pointer bg-transparent border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Let's Work Together
            </button>
          </div>

          {/* Mouse Display */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section >
  );
}

export default Hero;