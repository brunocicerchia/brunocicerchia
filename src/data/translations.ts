// Traducciones en español
const es = {
  navigation: {
    home: "INICIO",
    about: "ACERCA DE",
    projects: "PROYECTOS",
    skills: "HABILIDADES",
    contact: "CONTACTO"
  },
  sections: {
    home: {
      command: "cat welcome.md",
      title: "BIENVENIDO A MI PORTFOLIO",
      computerArt: `            __________                                
          .'----------'.                             
          | .--------. |                            
          | |########| |       __________             
          | |########| |      /__________\\            
 .--------| \`--------' |------|    --=-- |-----------.
 |        \`----,-.-----'      |o ======  |           | 
 |       ______|_|_______     |__________|           | 
 |      /  %%%%%%%%%%%%  \\                           | 
 |     /  %%%%%%%%%%%%%%  \\                          | 
 |     ^^^^^^^^^^^^^^^^^^^^                          | 
 +---------------------------------------------------+
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
      systemArt: `   ╔══════════════════════════════════════════════════╗
   ║                 SISTEMA OPERATIVO               ║
   ╚══════════════════════════════════════════════════╝
   
   > Sistema iniciado correctamente
   > Cargando módulos de portfolio...
   > [████████████████████████████████] 100%
   > ¡Listo para explorar!`,
      content: [
        "Mi nombre es Bruno Cicerchia y me dedico al Desarrollo de Software",
        "Actualmente estoy estudiando la Tecnicatura en Desarrollo de Software",
        "¡Si te gusta mi web no dudes en dejar una star en el repositorio de GitHub!"
      ]
    },
    about: {
      command: "cat about.md",
      title: "INFORMACIÓN PERSONAL",
      asciiArt: `   ╔══════════════════════════════════╗
   ║          DATOS PERSONALES        ║
   ╚══════════════════════════════════╝
   
   📧 Email: brunocicerchia.dev@gmail.com
   📍 Ubicación: Buenos Aires, Argentina
   🎯 Estado: Disponible para proyectos`,
      content: [
        "Desarrollador Full Stack apasionado por la tecnología",
        "Experiencia en JavaScript, React, Node.js y más",
        "Siempre aprendiendo nuevas tecnologías y herramientas",
      ]
    },
    projects: {
      command: "ls projects/",
      title: "LISTA DE PROYECTOS",
      asciiArt: `   📁 projects/
   ├── 🌐 portfolio-web/
   ├── 🛒 ecommerce-app/
   ├── 📱 mobile-app/
   ├── 🎮 pixel-game/
   └── 🤖 chat-bot/
   
   Total: 5 proyectos activos`,
      content: [
        "Portfolio personal - React + TypeScript",
        "E-commerce completo - Next.js + Stripe",
        "App móvil - React Native",
        "Juego pixel art - JavaScript vanilla",
        "Bot de chat inteligente - Python + AI"
      ]
    },
    skills: {
      command: "grep -r skills",
      title: "HABILIDADES TÉCNICAS",
      asciiArt: `   ⚡ LENGUAJES DE PROGRAMACIÓN
   ████████████████████ JavaScript 95%
   ███████████████████  TypeScript 90%
   ██████████████████   Python     85%
   ████████████████     Java       80%
   
   🛠️ FRAMEWORKS & TOOLS
   React | Node.js | Express | MongoDB`,
      content: [
        "Frontend: React, Next.js, Vue.js, HTML5, CSS3",
        "Backend: Node.js, Express, Python, Django",
        "Databases: MongoDB, PostgreSQL, MySQL",
        "DevOps: Docker, AWS, Git, CI/CD",
        "Mobile: React Native, Flutter"
      ]
    },
    contact: {
      command: "mail -s contact",
      title: "INFORMACIÓN DE CONTACTO",
      asciiArt: `   📬 ENVIAR MENSAJE
   ┌─────────────────────────────────┐
   │  De: visitante@portfolio.com    │
   │  Para: bruno@ejemplo.com        │
   │  Asunto: Contacto desde web     │
   └─────────────────────────────────┘
   
   Estado: Listo para enviar`,
      content: [
        "📧 Email: brunocicerchia.dev@gmail.com",
        "💼 LinkedIn: /in/brunocicerchia",
        "🐙 GitHub: /brunocicerchia",
        "¡Estoy disponible para nuevos proyectos!"
      ]
    }
  },
  terminal: {
    prompt: "bruno@portfolio:~$"
  }
};

// Traducciones en inglés
const en = {
  navigation: {
    home: "HOME",
    about: "ABOUT",
    projects: "PROJECTS",
    skills: "SKILLS",
    contact: "CONTACT"
  },
  sections: {
    home: {
      command: "cat welcome.md",
      title: "WELCOME TO MY PORTFOLIO",
      computerArt: `            __________                                
          .'----------'.                             
          | .--------. |                            
          | |########| |       __________             
          | |########| |      /__________\\            
 .--------| \`--------' |------|    --=-- |-----------.
 |        \`----,-.-----'      |o ======  |           | 
 |       ______|_|_______     |__________|           | 
 |      /  %%%%%%%%%%%%  \\                           | 
 |     /  %%%%%%%%%%%%%%  \\                          | 
 |     ^^^^^^^^^^^^^^^^^^^^                          | 
 +---------------------------------------------------+
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`,
      systemArt: `   ╔══════════════════════════════════════════════════╗
   ║                 OPERATING SYSTEM                ║
   ╚══════════════════════════════════════════════════╝
   
   > System initialized successfully
   > Loading portfolio modules...
   > [████████████████████████████████] 100%
   > Ready to explore!`,
      content: [
        "My name is Bruno Cicerchia and I'm dedicated to Software Development",
        "Currently studying Software Development Technology",
        "If you like my website don't hesitate to star the GitHub repository!"
      ]
    },
    about: {
      command: "cat about.md",
      title: "PERSONAL INFORMATION",
      asciiArt: `   ╔══════════════════════════════════╗
   ║          PERSONAL DATA           ║
   ╚══════════════════════════════════╝
   
   📧 Email: brunocicerchia.dev@gmail.com
   📍 Location: Buenos Aires, Argentina
   🎯 Status: Available for projects`,
      content: [
        "Full Stack Developer passionate about technology",
        "Experience in JavaScript, React, Node.js and more",
        "Always learning new technologies and tools",
        "I enjoy solving complex problems with elegant code"
      ]
    },
    projects: {
      command: "ls projects/",
      title: "PROJECT LIST",
      asciiArt: `   📁 projects/
   ├── 🌐 portfolio-web/
   ├── 🛒 ecommerce-app/
   ├── 📱 mobile-app/
   ├── 🎮 pixel-game/
   └── 🤖 chat-bot/
   
   Total: 5 active projects`,
      content: [
        "Personal portfolio - React + TypeScript",
        "Complete e-commerce - Next.js + Stripe",
        "Mobile app - React Native",
        "Pixel art game - Vanilla JavaScript",
        "Intelligent chat bot - Python + AI"
      ]
    },
    skills: {
      command: "grep -r skills",
      title: "TECHNICAL SKILLS",
      asciiArt: `   ⚡ PROGRAMMING LANGUAGES
   ████████████████████ JavaScript 95%
   ███████████████████  TypeScript 90%
   ██████████████████   Python     85%
   ████████████████     Java       80%
   
   🛠️ FRAMEWORKS & TOOLS
   React | Node.js | Express | MongoDB`,
      content: [
        "Frontend: React, Next.js, Vue.js, HTML5, CSS3",
        "Backend: Node.js, Express, Python, Django",
        "Databases: MongoDB, PostgreSQL, MySQL",
        "DevOps: Docker, AWS, Git, CI/CD",
        "Mobile: React Native, Flutter"
      ]
    },
    contact: {
      command: "mail -s contact",
      title: "CONTACT INFORMATION",
      asciiArt: `   📬 SEND MESSAGE
   ┌─────────────────────────────────┐
   │  From: visitor@portfolio.com    │
   │  To: bruno@example.com          │
   │  Subject: Contact from website  │
   └─────────────────────────────────┘
   
   Status: Ready to send`,
      content: [
        "📧 Email: brunocicerchia.dev@gmail.com",
        "💼 LinkedIn: /in/brunocicerchia",
        "🐙 GitHub: /brunocicerchia",
        "📱 Phone: +54 9 11 XXXX-XXXX",
        "I'm available for new projects!"
      ]
    }
  },
  terminal: {
    prompt: "bruno@portfolio:~$"
  }
};

export const translations = {
  es,
  en
} as const;

export type Language = 'es' | 'en';
export type SectionKey = keyof typeof es.sections;