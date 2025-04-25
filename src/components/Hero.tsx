
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-cosmic overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkling bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Full Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Building stellar digital experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-8 py-6"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
