import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-cosmic bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Bruno Cicerchia</div>
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-secondary transition-colors"
          >
            Sobre Mi
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white hover:text-secondary transition-colors"
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-secondary transition-colors"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-secondary transition-colors"
          >
            Contacto
          </button>
        </div>
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-secondary"
            onClick={() =>
              window.open("https://github.com/brunocicerchia", "_blank")
            }
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-secondary"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/brunocicerchia",
                "_blank"
              )
            }
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-secondary"
            onClick={() =>
              window.open("mailto:brunocicerchia.dev@gmail.com", "_blank")
            }
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
