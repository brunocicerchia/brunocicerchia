import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Code, Rocket, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const handleRedirect = () => {
    window.open("https://importnow.com.ar", "_blank");
  };

  const handleRedirect2 = () => {
    window.open("https://findescoffee.com.ar", "_blank");
  };

  return (
    <div className="bg-gradient-cosmic min-h-screen">
      <Navigation />
      <Hero />

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">¡Sobre mí!</h2>
            <p className="text-gray-300 text-lg mb-6">
              Soy un desarrollador Full Stack apasionado por crear soluciones
              elegantes y eficientes. Tengo experiencia en tecnologías web
              modernas y disfruto construyendo aplicaciones que generan un
              impacto positivo. Me encanta aprender cosas nuevas, colaborar en
              equipo y enfrentar desafíos que me permitan crecer
              profesionalmente.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 relative backdrop-blur-sm bg-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
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
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Habilidades
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 mb-4 text-vivid-purple" />,
                title: "Frontend",
                skills: ["React", "Next.js", "Tailwind CSS", "Astro"],
              },
              {
                icon: <Rocket className="h-8 w-8 mb-4 text-ocean-blue" />,
                title: "Backend",
                skills: ["Node.js", "Java", "MongoDB", "API REST"],
              },
              {
                icon: <Star className="h-8 w-8 mb-4 text-magenta-pink" />,
                title: "Herramientas",
                skills: ["Git", "AWS", "Postman", "Figma"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="text-gray-200 space-y-2">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-white/5 rounded-md py-1 px-2 backdrop-blur-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Proyectos destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              key="Proyecto1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Página Web ImportNow
                </h3>
                <p className="text-gray-300 mb-4">
                  Se solicitó desarrollar una página web informativa para una
                  empresa de importaciones. La página incluye un formulario de
                  contacto y un mapa de ubicación. Se utilizó Astro para el
                  desarrollo del sitio, asegurando un rendimiento óptimo y una
                  experiencia moderna para los usuarios.
                </p>
                <Button variant="outline" onClick={handleRedirect}>
                  Visitar página
                </Button>
              </div>
            </motion.div>
            <motion.div
              key="Proyecto2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Tienda Online FindesCoffee
                </h3>
                <p className="text-gray-300 mb-4">
                  Se solicitó desarrollar una tienda en línea para la venta de
                  café de especialidad mediante la modalidad de suscripción.
                  Además, se integró la compra mediante Mercado Pago utilizando
                  su API.
                </p>
                <Button variant="outline" onClick={handleRedirect2}>
                  Visitar página
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">¡Contactame!</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Siempre estoy abierto a nuevas oportunidades y proyectos
              interesantes. ¡No dudes en contactarme si te gustaría colaborar!
            </p>
            <Button
              className="bg-secondary text-primary hover:bg-secondary/90"
              onClick={() =>
                window.open("https://wa.me/543489562010", "_blank")
              }
            >
              Escribir por WhatsApp
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
