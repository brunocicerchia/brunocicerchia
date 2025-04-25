
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Code, Rocket, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-cosmic">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <p className="text-gray-300 text-lg mb-6">
              I'm a passionate Full Stack Developer with a love for creating elegant solutions.
              With expertise in modern web technologies, I build applications that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-white via-soft-purple/50 to-soft-purple/20 relative">
        {/* Dark stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black/50 rounded-full"
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

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 mb-4 text-vivid-purple" />,
                title: "Frontend",
                skills: ["React", "TypeScript", "Tailwind CSS"],
              },
              {
                icon: <Rocket className="h-8 w-8 mb-4 text-ocean-blue" />,
                title: "Backend",
                skills: ["Node.js", "Python", "PostgreSQL"],
              },
              {
                icon: <Star className="h-8 w-8 mb-4 text-magenta-pink" />,
                title: "Tools",
                skills: ["Git", "Docker", "AWS"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-soft-purple/30 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                <ul className="text-gray-700 space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="bg-soft-purple/10 rounded-md py-1 px-2">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-cosmic">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project Name</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <Button variant="secondary" className="mr-4">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="outline">Live Demo</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out if you'd like to collaborate!
            </p>
            <Button className="bg-secondary text-primary hover:bg-secondary/90">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
