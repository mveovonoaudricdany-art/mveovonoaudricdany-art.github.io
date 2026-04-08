export const translations = {
  FR: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      slogan: "Créer. Innover. Impacter"
    },
    hero: {
      subtitle: "Développeur web & mobile",
      desc: "Créativité, innovation et style au service de vos projets.",
      linkedin: "LinkedIn",
      twitter: "Twitter",
      github: "Github"
    },
    about: {
      title: "À propos",
      greeting: "Salut, je suis",
      bio_1_prefix: "Un développeur",
      bio_1_strong: "Full Stack",
      bio_1_suffix: "passionné par la création d’expériences digitales modernes, rapides et intelligentes.",
      bio_2: "Curieux de nature, j’aime plonger au cœur des technologies pour comprendre leur fonctionnement intime, afin de concevoir des architectures robustes et résoudre des problèmes concrets avec élégance."
    },
    skills: {
      title: "🚀 Compétences",
      dev: "🌐 Développement",
      db: "🗄️ Base de données",
      tools: "🛠️ Outils"
    },
    projects: {
      title: "🚀 Mes Projets",
      view_project: "Voir projet",
      github: "GitHub",
      civil: {
        title: "📱 App Code Civil Gabonais",
        desc: "Application mobile avec navigation hiérarchique, QCM et notifications."
      },
      portfolio: {
        title: "💼 Portfolio Premium",
        desc: "Portfolio moderne avec animations fluides et design 2026."
      }
    },
    contact: {
      title: "📩 Contactez-moi",
      location: "Libreville, Gabon",
      name_ph: "Votre nom",
      email_ph: "Votre email",
      message_ph: "Votre message",
      send: "🚀 Envoyer le message"
    },
    footer: {
      desc: "Développeur Full Stack Web & Mobile 🚀",
      rights: "© 2026 - Tous droits réservés"
    }
  },
  EN: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      slogan: "Create. Innovate. Impact"
    },
    hero: {
      subtitle: "Web & Mobile Developer",
      desc: "Creativity, innovation, and style serving your projects.",
      linkedin: "LinkedIn",
      twitter: "Twitter",
      github: "Github"
    },
    about: {
      title: "About",
      greeting: "Hi, I am",
      bio_1_prefix: "A",
      bio_1_strong: "Full Stack",
      bio_1_suffix: "developer passionate about creating modern, fast, and smart digital experiences.",
      bio_2: "Curious by nature, I love diving deep into technologies to understand how they work under the hood, enabling me to design robust architectures and elegantly solve real-world problems."
    },
    skills: {
      title: "🚀 Skills",
      dev: "🌐 Development",
      db: "🗄️ Databases",
      tools: "🛠️ Tools"
    },
    projects: {
      title: "🚀 My Projects",
      view_project: "View Project",
      github: "GitHub",
      civil: {
        title: "📱 Gabonese Civil Code App",
        desc: "Mobile application with hierarchical navigation, quizzes, and notifications."
      },
      portfolio: {
        title: "💼 Premium Portfolio",
        desc: "Modern portfolio with fluid animations and a 2026 design."
      }
    },
    contact: {
      title: "📩 Contact Me",
      location: "Libreville, Gabon",
      name_ph: "Your name",
      email_ph: "Your email",
      message_ph: "Your message",
      send: "🚀 Send message"
    },
    footer: {
      desc: "Full Stack Web & Mobile Developer 🚀",
      rights: "© 2026 - All rights reserved"
    }
  }
};

export type Language = 'FR' | 'EN';
export type TranslationDict = typeof translations.FR;
