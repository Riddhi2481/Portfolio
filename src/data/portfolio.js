import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJava,
  FaDatabase,
  FaShieldAlt,
  FaCodeBranch,
  FaServer,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiSwagger,
  SiHibernate,
} from "react-icons/si";

export const profile = {
  name: "Riddhi Thakkar",
  title: "Backend Java Developer",
  experience: "2 Years",
  company: "Ananta Services",
  location: "Vadodara, Gujarat, India",
  email: "riddhithakkar2481@gmail.com",
  phone: "+91 9909462641",
  resume: "/Riddhi_Thakkar_Resume.pdf",
  summary:
    "Results-driven Backend Java Developer with 2 years of experience designing, developing, and maintaining scalable enterprise applications with Java, Spring Boot, REST APIs, Microservices, MySQL, Hibernate/JPA, and secure authentication mechanisms.",
  objective:
    "Focused on building reliable backend architectures, fast data access layers, secure API ecosystems, and maintainable services that help product teams ship confidently.",
};

export const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Architecture", "architecture"],
  ["Contact", "contact"],
];

export const skillBars = [
  ["Java", 90, FaJava],
  ["Spring Boot", 85, SiSpringboot],
  ["REST APIs", 90, FaServer],
  ["MySQL", 85, SiMysql],
  ["Hibernate/JPA", 80, SiHibernate],
  ["Microservices", 75, FaProjectDiagram],
  ["Git/GitHub", 85, FaGithub],
  ["JWT Security", 80, FaShieldAlt],
];

export const skillGroups = [
  {
    title: "Backend Development",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "RESTful APIs",
      "Microservices Architecture",
    ],
  },
  {
    title: "Database",
    items: ["MySQL", "SQL", "Database Design", "Query Optimization"],
  },
  {
    title: "Security",
    items: ["JWT Authentication", "RBAC", "Authentication", "Authorization"],
  },
  {
    title: "Tools & Methods",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Maven",
      "Swagger/OpenAPI",
      "Eclipse",
      "IntelliJ IDEA",
      "Agile",
      "Scrum",
      "SDLC",
      "Code Review",
      "Debugging",
    ],
  },
];

export const experience = [
  {
    company: "Ananta Services",
    role: "Backend Java Developer",
    duration: "July 2024 - Dec 2025",
    achievements: [
      "Developed enterprise-level backend applications using Java and Spring Boot.",
      "Designed RESTful APIs consumed by frontend applications and external services.",
      "Implemented JWT authentication, authorization, and role-based access control.",
      "Optimized MySQL schemas and complex SQL queries for performance and scale.",
      "Collaborated with frontend, QA, and business teams through Agile sprint cycles.",
    ],
  },
];

// export const projects = [
//   {
//     title: 'Interview Management System',
//     category: 'Enterprise',
//     image: '/assets/backend-architecture-hero.png',
//     description:
//       'Backend platform for candidate management, interview scheduling, access control, authentication, and structured hiring workflows.',
//     stack: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'JWT'],
//     features: ['Candidate Management', 'Interview Scheduling', 'RBAC', 'Authentication & Authorization', 'Database Management'],
//     responsibilities: ['Developed complete backend architecture', 'Designed RESTful APIs', 'Implemented secure login functionality', 'Optimized database relationships and queries'],
//     github: 'https://github.com/',
//     demo: '#contact'
//   },
//   {
//     title: 'Task Management System',
//     category: 'Productivity',
//     image: '/assets/backend-architecture-hero.png',
//     description:
//       'Task collaboration backend with task assignment, status tracking, dashboard analytics, user management, and secure authentication.',
//     stack: ['Java', 'Spring Boot', 'MySQL', 'JavaScript'],
//     features: ['Task Creation', 'Status Tracking', 'Dashboard Analytics', 'User Management', 'Secure Authentication'],
//     responsibilities: ['Developed backend services', 'Implemented CRUD operations', 'Created REST APIs', 'Managed database design and optimization'],
//     github: 'https://github.com/',
//     demo: '#contact'
//   }
// ];
export const projects = [
  {
    title: "Interview Management System",
    category: "Enterprise",
    image: "/assets/backend-architecture-hero.png",
    description:
      "Backend platform for candidate management, interview scheduling, access control, authentication, and structured hiring workflows.",
    stack: ["Java", "Spring Boot", "MySQL", "REST API", "JWT"],
    features: [
      "Candidate Management",
      "Interview Scheduling",
      "RBAC",
      "Authentication & Authorization",
      "Database Management",
    ],
    responsibilities: [
      "Developed complete backend architecture",
      "Designed RESTful APIs",
      "Implemented secure login functionality",
      "Optimized database relationships and queries",
    ],
    
  },
  {
    title: "Online Test Portal",
    category: "Assessment Platform",
    image: "/assets/backend-architecture-hero.png",
    description:
      "Backend examination platform for test creation, question management, candidate assessments, automated evaluation, and result generation.",
    stack: ["Java", "Spring Boot", "MySQL", "REST APIs", "JWT"],
    features: [
      "Question Bank Management",
      "Online Assessments",
      "Test Scheduling",
      "Auto Evaluation",
      "Candidate Management",
    ],
    responsibilities: [
      "Developed scalable REST APIs",
      "Designed database schema and relationships",
      "Implemented JWT authentication",
      "Built evaluation and result modules",
    ],
  
  },
];

export const architectureLayers = [
  {
    title: "Java",
    detail: "Core business logic and domain services",
    icon: FaJava,
    summary:
      "Used for writing clean backend business logic, domain models, service classes, validations, and reusable utility layers.",
    highlights: [
      "Object-oriented programming and collections",
      "Service-layer business rules",
      "Exception handling and reusable utilities",
    ],
  },
  {
    title: "Spring Boot",
    detail: "Production-ready service runtime",
    icon: SiSpringboot,
    summary:
      "Used to build maintainable enterprise applications with REST controllers, service layers, repositories, configuration, and production-ready structure.",
    highlights: [
      "REST controllers and dependency injection",
      "Layered MVC architecture",
      "Maven-based application setup",
    ],
  },
  {
    title: "REST APIs",
    detail: "Clean contracts for frontend and third-party integrations",
    icon: FaServer,
    summary:
      "Designed API endpoints that frontend applications can consume reliably, with clear request/response contracts and proper status handling.",
    highlights: [
      "CRUD endpoint development",
      "Request validation and response handling",
      "Postman testing and Swagger/OpenAPI documentation",
    ],
  },
  {
    title: "Database Layer",
    detail: "MySQL schemas, JPA repositories, optimized queries",
    icon: FaDatabase,
    summary:
      "Built persistence layers with MySQL, Hibernate/JPA, schema relationships, repository methods, and optimized SQL queries.",
    highlights: [
      "Schema design and relationships",
      "Spring Data JPA repositories",
      "Query optimization for performance",
    ],
  },
  {
    title: "Security Layer",
    detail: "JWT, RBAC, authentication and authorization flows",
    icon: FaShieldAlt,
    summary:
      "Implemented secure login flows with JWT authentication, authorization checks, and role-based access control for protected APIs.",
    highlights: [
      "JWT token-based authentication",
      "Role-Based Access Control",
      "Protected endpoints and authorization filters",
    ],
  },
  {
    title: "Microservices",
    detail: "Service-to-service communication and modular scaling",
    icon: FaCodeBranch,
    summary:
      "Structured backend modules with clear service boundaries, API communication, and scalable patterns for enterprise workflows.",
    highlights: [
      "Modular service boundaries",
      "API-to-API communication",
      "Scalable backend architecture planning",
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Engineering",
  certifications: [
    "Java Programming Certification",
    "Spring Boot Development Certification",
    "SQL & Database Management Certification",
  ],
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Riddhi2481", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/riddhithakkar2481/", icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
];
