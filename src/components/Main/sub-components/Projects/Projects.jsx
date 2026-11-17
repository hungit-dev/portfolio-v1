import ProjectCard from "./Card";
import styles from "./Projects.module.css";

const projects = [
  {
    image: "assets/images/feedy.png",
    github_url: "https://github.com/Larold2464/One-Hit-Wonder-HACK-A-TON",
    demo_url: "",
    title: "Feedy (Classroom Engagement App)",
    description:
      "A real-time classroom platform where students join via QR codes to ask questions and report confusion levels, while instructors monitor live engagement.",
    reason:
      "Built for a team hackathon to bridge the gap between students and instructors. I architected the Django REST backend, built UI components, and integrated the APIs.",
    note: "Note: Team Hackathon Project (Nait 2026) — Role: Backend Lead & UI Developer.",
    techList: [
      "Python",
      "Django",
      "Django REST Framework",
      "SimpleJWT",
      "SQLite",
      "React",
      "TanStack Query",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
    ],
  },
  {
    image: "assets/images/blog-api.png",
    github_url: "https://github.com/hungit-dev/blog-api",
    demo_url: "https://blog-api-psi-henna.vercel.app/",
    title: "The Journal (Full-Stack Blog)",
    description:
      "A full-stack blogging platform with role-based access where authors manage and publish posts via a dashboard, and readers browse articles and leave comments.",
    reason:
      "Built to practice decoupled full-stack architecture with a RESTful API, JWT authentication, role-based authorization, and server-state management.",
    note: "Note: Hosted on free-tier cloud services. Initial API requests may take 30-60 seconds if the server is waking up.",
    techList: [
      "React",
      "TanStack Query",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "Passport.js (JWT)",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    image: "assets/images/file-uploader.png",
    github_url: "https://github.com/hungit-dev/file-uploader",
    demo_url: "https://file-uploader-pzv9.onrender.com/",
    title: "File Uploader Web App",
    description:
      "A full-stack web application that allows users to create, read, update, and delete folders and files, with secure user authentication.",
    reason:
      "Built to practice full-stack development with Node.js, Express.js, Passport.js, Prisma ORM, and cloud storage integration.",
    note: "Note: Hosted on Render's free tier. Initial load may take 30-60 seconds as the server wakes up.",
    techList: [
      "Node.js",
      "Express.js",
      "Passport.js",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "Bootstrap",
    ],
  },
];
export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className={`${styles["projects-section"]} container d-flex flex-column gap-4 py-4 px-3 px-md-4`}
      >
        <h2 className={`${styles["projects-title"]} fs-2 fw-bold text-center`}>
          {"<Projects />"}
        </h2>
        <div className={styles["cards-grid"]}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              github_url={project.github_url}
              demo_url={project.demo_url}
              title={project.title}
              description={project.description}
              reason={project.reason}
              note={project.note}
              techList={project.techList}
              isComingSoonCard={project.isComingSoonCard}
            />
          ))}
        </div>
      </section>
    </>
  );
}
