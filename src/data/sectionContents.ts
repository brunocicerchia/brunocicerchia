export interface SectionContent {
  command: string;
  title: string;
  asciiArt?: string;
  systemArt?: string;
  content: string[];
}

export const sectionContents: Record<string, SectionContent> = {
  home: {
    command: "cat bienvenido.md",
    title: "BIENVENIDO A MI PORTFOLIO",
    asciiArt: `            __________                                
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
    systemArt: `
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
    command: "cat sobre_mi.md",
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
      "Me gusta resolver problemas complejos con código elegante"
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
      "📧 Email: bruno@ejemplo.com",
      "💼 LinkedIn: /in/brunocicerchia",
      "🐙 GitHub: /brunocicerchia",
      "📱 Teléfono: +54 9 11 XXXX-XXXX",
      "¡Estoy disponible para nuevos proyectos!"
    ]
  }
};

export type SectionKey = keyof typeof sectionContents;