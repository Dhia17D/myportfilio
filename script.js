const translations = {
  en: {
    skip: "Skip to content", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navExperience: "Experience", navContact: "Contact",
    heroEyebrow: "IT professional · Tozeur, Tunisia", heroRole: "IT Support Technician | Junior Software Developer", heroIntro: "IT graduate specializing in Networks and Computer Services, with practical experience in computer maintenance, technical support, networking, and software development. Passionate about technology, cybersecurity, and building practical software solutions.",
    viewProjects: "View projects", cvEnglish: "Download English CV", cvFrench: "Download French CV", contactMe: "Contact me", basedIn: "BASED IN", currentFocus: "CURRENT FOCUS", focusValue: "Systems · Software · Security", scrollExplore: "Scroll to explore", openTo: "OPEN TO OPPORTUNITIES", rolesLine: "IT Support · Systems & Networks · Junior Development",
    aboutEyebrow: "01 — PROFILE", aboutTitle: "Practical by nature.<br><span>Curious by design.</span>", aboutLead: "I’m an IT graduate from ISET Gafsa with a foundation in networks and computer services, and a hands-on approach to solving everyday technical problems.", aboutBody: "My experience spans freelance computer maintenance, an IT support internship at Tunisie Telecom, and a final-year cybersecurity project. Alongside support and networking, I build small software tools that make technical concepts tangible.", careerDetails: "Explore my experience",
    degreeTitle: "Bachelor’s degree", degreeDetail: "Information Technology · Networks & Computer Services", graduateTitle: "ISET Gafsa", graduateDetail: "Graduated in 2025", projectTitle: "CyberGuardian", projectDetail: "Individual final-year cybersecurity project", freelanceTitle: "Freelance maintenance", freelanceDetail: "Computer support for individual customers since August 2025",
    skillsEyebrow: "02 — TOOLKIT", skillsTitle: "Skills for the real world.", skillsSub: "A practical toolkit built across support, networks, development and security.", supportTitle: "IT Support", supportSkills: "Installation & troubleshooting · Computer maintenance · Malware detection & removal · User and permission management", networkTitle: "Networking", networkSkills: "Wi-Fi configuration · Network troubleshooting · Network traffic monitoring", programmingTitle: "Programming", securityTitle: "Cybersecurity", securitySkills: "Vulnerability scanning · Network scanning · Traffic analysis · System monitoring · IDS/IPS concepts · Practical labs", toolsTitle: "Tools & environments", skillFootnote: "Skills are listed without proficiency ratings or unverified certifications.",
    projectsEyebrow: "03 — SELECTED WORK", projectsTitle: "Built to explore.<br><span>Made to be useful.</span>", allGithub: "All repositories", projectTypeSecurity: "WEB SECURITY · BROWSER", projectTypeNetwork: "NETWORKING · CLI", projectTypeAnalysis: "TRAFFIC · ANALYSIS", projectTypeMonitoring: "SYSTEMS · MONITORING", projectTypeEducation: "SECURITY · EDUCATION", projectTypeAcademic: "ACADEMIC · INDIVIDUAL", scannerDescription: "A browser-based, best-effort assessment tool that checks reachability, common security headers, HTTPS/HSTS, selected paths and subdomains. Results can be limited by browser CORS restrictions; it is not a deep port scanner.", networkScannerDescription: "A standard-library Python CLI for scanning common or custom TCP port ranges and discovering active network hosts with a ping sweep. Intended for authorized networks.", trafficDescription: "A React dashboard and Python/Scapy backend for packet capture and PCAP analysis, with protocol and host statistics, packet inspection, DNS/HTTP details, and heuristic suspicious-activity indicators. Live capture needs suitable permissions and capture support.", systemDescription: "A live terminal dashboard showing CPU, memory, disk and network I/O, with process information and refresh-interval controls.", bruteDescription: "An educational app with password-strength and entropy views, a deliberately limited lowercase-only brute-force simulation, and a SHA-256 wordlist demonstration. It is not a real-world attack tool.", cyberGuardianDescription: "An individual final-year project combining vulnerability scanning, network monitoring, IDS/IPS, security alerts and an AI chatbot.", viewRepository: "View repository", noPublicRepo: "Academic project · No public repository",
    experienceEyebrow: "04 — EXPERIENCE", experienceTitle: "Experience that starts<br><span>with the person.</span>", freelanceDate: "AUG 2025 — PRESENT", freelanceRole: "Freelance Computer Maintenance Technician", freelanceMeta: "Tozeur, Tunisia · Independent", freelanceTask1: "Windows installation and configuration", freelanceTask2: "Software and driver installation", freelanceTask3: "Malware detection and removal", freelanceTask4: "Wi-Fi configuration and computer troubleshooting", freelanceTask5: "Technical assistance for individual customers", telecomDate: "09 JAN — 19 FEB 2024", internSuffix: "— IT Support Intern", telecomMeta: "IT support internship", telecomTask1: "Network configuration", telecomTask2: "Windows and software installation", telecomTask3: "Printer maintenance", telecomTask4: "Network traffic monitoring", postalDate: "09 JAN — 23 FEB 2023", customerIntern: "— Customer Service Intern", postalMeta: "Customer service internship", postalTask1: "Customer reception and assistance", postalTask2: "Exposure to basic postal service operations",
    educationEyebrow: "05 — EDUCATION & LEARNING", educationTitle: "Keep learning.<br><span>Keep testing.</span>", educationLabel: "EDUCATION", licenceTitle: "Bachelor’s Degree in Information Technology", speciality: "Specialization: Networks and Computer Services", completedLabel: "COMPLETED TRAINING", ongoingLabel: "IN PROGRESS", practiceLabel: "PRACTICAL LEARNING PLATFORMS",
    languagesEyebrow: "06 — LANGUAGES", languagesTitle: "Communication, too.", arabic: "Arabic", english: "English", french: "French", german: "German", native: "Native", intermediate: "Intermediate", beginner: "Beginner",
    contactEyebrow: "07 — GET IN TOUCH", contactTitle: "Let’s solve<br><span>something useful.</span>", contactLead: "Open to opportunities in IT support, systems and networking, and junior software development.", emailMe: "Email Dhia", contactLocation: "LOCATION", contactEmail: "EMAIL", contactPhone: "PHONE", footerLine: "IT Support · Networks · Software Development", backToTop: "Back to top ↑"
  },
  fr: {
    skip: "Aller au contenu", navAbout: "À propos", navSkills: "Compétences", navProjects: "Projets", navExperience: "Expérience", navContact: "Contact",
    heroEyebrow: "Professionnel informatique · Tozeur, Tunisie", heroRole: "Technicien support informatique | Développeur logiciel junior", heroIntro: "Diplômé en informatique, spécialisé en réseaux et services informatiques, avec une expérience pratique en maintenance informatique, assistance technique, réseaux et développement logiciel. Passionné par la technologie, la cybersécurité et la création de solutions logicielles concrètes.",
    viewProjects: "Voir les projets", cvEnglish: "Télécharger le CV en anglais", cvFrench: "Télécharger le CV en français", contactMe: "Me contacter", basedIn: "LOCALISATION", currentFocus: "DOMAINES D’INTÉRÊT", focusValue: "Systèmes · Logiciel · Sécurité", scrollExplore: "Défiler pour découvrir", openTo: "À LA RECHERCHE D’OPPORTUNITÉS", rolesLine: "Support informatique · Systèmes et réseaux · Développement junior",
    aboutEyebrow: "01 — PROFIL", aboutTitle: "Le sens du concret.<br><span>La curiosité en plus.</span>", aboutLead: "Diplômé de l’ISET de Gafsa en informatique, j’ai acquis des bases solides en réseaux et services informatiques, ainsi qu’une approche pratique de la résolution des problèmes techniques du quotidien.", aboutBody: "Mon parcours comprend une activité indépendante en maintenance informatique, un stage en support informatique chez Tunisie Telecom et un projet de fin d’études en cybersécurité. En parallèle du support et des réseaux, je développe de petits outils logiciels pour mettre en pratique des notions techniques.", careerDetails: "Découvrir mon expérience",
    degreeTitle: "Licence", degreeDetail: "Technologie de l’informatique · Réseaux et services informatiques", graduateTitle: "ISET de Gafsa", graduateDetail: "Diplômé en 2025", projectTitle: "CyberGuardian", projectDetail: "Projet individuel de fin d’études en cybersécurité", freelanceTitle: "Maintenance informatique indépendante", freelanceDetail: "Assistance informatique auprès de particuliers depuis août 2025",
    skillsEyebrow: "02 — COMPÉTENCES", skillsTitle: "Des compétences concrètes.", skillsSub: "Un ensemble de compétences pratiques en support, réseaux, développement et sécurité.", supportTitle: "Support informatique", supportSkills: "Installation et dépannage · Maintenance informatique · Détection et suppression de logiciels malveillants · Gestion des utilisateurs et des droits", networkTitle: "Réseaux", networkSkills: "Configuration Wi-Fi · Dépannage réseau · Supervision du trafic réseau", programmingTitle: "Programmation", securityTitle: "Cybersécurité", securitySkills: "Analyse de vulnérabilités · Analyse réseau · Analyse du trafic · Supervision des systèmes · Notions IDS/IPS · Travaux pratiques", toolsTitle: "Outils et environnements", skillFootnote: "Aucun niveau de maîtrise ni certification non vérifiée n’est indiqué.",
    projectsEyebrow: "03 — PROJETS SÉLECTIONNÉS", projectsTitle: "Explorer la technique.<br><span>Créer du concret.</span>", allGithub: "Tous les dépôts", projectTypeSecurity: "SÉCURITÉ WEB · NAVIGATEUR", projectTypeNetwork: "RÉSEAUX · CLI", projectTypeAnalysis: "TRAFIC · ANALYSE", projectTypeMonitoring: "SYSTÈMES · SUPERVISION", projectTypeEducation: "SÉCURITÉ · PÉDAGOGIE", projectTypeAcademic: "UNIVERSITAIRE · INDIVIDUEL", scannerDescription: "Outil d’évaluation indicatif exécuté dans le navigateur : disponibilité, en-têtes de sécurité courants, HTTPS/HSTS, chemins et sous-domaines sélectionnés. Les restrictions CORS peuvent limiter les résultats ; ce n’est pas un scanner approfondi de ports.", networkScannerDescription: "Outil CLI Python utilisant la bibliothèque standard pour analyser des ports TCP courants ou une plage personnalisée et repérer des hôtes actifs par balayage ping. À utiliser uniquement sur des réseaux autorisés.", trafficDescription: "Tableau de bord React et backend Python/Scapy dédiés à la capture de paquets et à l’analyse de fichiers PCAP : statistiques par protocole et hôte, inspection des paquets, détails DNS/HTTP et indicateurs heuristiques d’activité suspecte. La capture en direct nécessite des droits et un environnement compatibles.", systemDescription: "Tableau de bord en temps réel dans le terminal : processeur, mémoire, disques et trafic réseau, informations sur les processus et réglage de l’intervalle d’actualisation.", bruteDescription: "Application pédagogique avec analyse de robustesse et d’entropie, simulation volontairement limitée aux minuscules et démonstration de recherche par dictionnaire sur SHA-256. Ce n’est pas un outil d’attaque réel.", cyberGuardianDescription: "Projet individuel de fin d’études réunissant analyse de vulnérabilités, surveillance réseau, notions IDS/IPS, alertes de sécurité et chatbot basé sur l’IA.", viewRepository: "Voir le dépôt", noPublicRepo: "Projet universitaire · Aucun dépôt public",
    experienceEyebrow: "04 — EXPÉRIENCE", experienceTitle: "Une expérience tournée<br><span>vers les besoins réels.</span>", freelanceDate: "AOÛT 2025 — AUJOURD’HUI", freelanceRole: "Technicien indépendant en maintenance informatique", freelanceMeta: "Tozeur, Tunisie · Indépendant", freelanceTask1: "Installation et configuration de Windows", freelanceTask2: "Installation de logiciels et de pilotes", freelanceTask3: "Détection et suppression de logiciels malveillants", freelanceTask4: "Configuration Wi-Fi et dépannage informatique", freelanceTask5: "Assistance technique auprès de particuliers", telecomDate: "09 JANV. — 19 FÉVR. 2024", internSuffix: "— Stagiaire en support informatique", telecomMeta: "Stage en support informatique", telecomTask1: "Configuration réseau", telecomTask2: "Installation de Windows et de logiciels", telecomTask3: "Maintenance d’imprimantes", telecomTask4: "Surveillance du trafic réseau", postalDate: "09 JANV. — 23 FÉVR. 2023", customerIntern: "— Stagiaire en service à la clientèle", postalMeta: "Stage en service à la clientèle", postalTask1: "Accueil et accompagnement des clients", postalTask2: "Découverte des opérations postales courantes",
    educationEyebrow: "05 — FORMATION ET APPRENTISSAGE", educationTitle: "Continuer à apprendre.<br><span>Mettre en pratique.</span>", educationLabel: "FORMATION", licenceTitle: "Licence en Technologie de l’Informatique", speciality: "Spécialité : Réseaux et Services Informatiques", completedLabel: "FORMATIONS TERMINÉES", ongoingLabel: "EN COURS", practiceLabel: "PLATEFORMES DE PRATIQUE",
    languagesEyebrow: "06 — LANGUES", languagesTitle: "La communication compte aussi.", arabic: "Arabe", english: "Anglais", french: "Français", german: "Allemand", native: "Langue maternelle", intermediate: "Intermédiaire", beginner: "Débutant",
    contactEyebrow: "07 — CONTACT", contactTitle: "Résolvons<br><span>un problème utile.</span>", contactLead: "À l’écoute d’opportunités en support informatique, systèmes et réseaux, ou développement logiciel junior.", emailMe: "Écrire à Dhia", contactLocation: "LOCALISATION", contactEmail: "E-MAIL", contactPhone: "TÉLÉPHONE", footerLine: "Support informatique · Réseaux · Développement logiciel", backToTop: "Retour en haut ↑"
  }
};

const languageButton = document.querySelector(".language-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setLanguage(language) {
  const copy = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const text = copy[element.dataset.copy];
    if (text) element.innerHTML = text;
  });
  languageButton.textContent = language === "en" ? "FR" : "EN";
  languageButton.lang = language === "en" ? "fr" : "en";
  languageButton.setAttribute("aria-label", language === "en" ? "Passer le site en français" : "Switch the site to English");
  document.title = language === "en" ? "Dhia Mosbah | IT Support & Software Development" : "Dhia Mosbah | Support informatique et développement logiciel";
  try { localStorage.setItem("portfolio-language", language); } catch { /* Storage may be disabled. */ }
}

let initialLanguage = "en";
try { initialLanguage = localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en"; } catch { /* Keep English as the default. */ }
setLanguage(initialLanguage);

languageButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "fr" : "en");
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
    navigation.classList.remove("is-open");
  }
});

const revealElements = document.querySelectorAll(".reveal");
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
}

const topButton = document.querySelector(".back-to-top");
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  });
}, { rootMargin: "-25% 0px -65% 0px" });
document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

function updateScrollControls() {
  topButton.classList.toggle("is-visible", window.scrollY > 560);
}
window.addEventListener("scroll", updateScrollControls, { passive: true });
updateScrollControls();
topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "instant" : "smooth" }));
document.querySelector("#year").textContent = new Date().getFullYear();