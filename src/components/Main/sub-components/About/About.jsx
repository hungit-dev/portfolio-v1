import styles from "./About.module.css";
import TechStack from "./TechStack";

const skills = [
  // Core Languages
  "JavaScript",
  "Python",
  "C#",
  // Frontend
  "HTML",
  "CSS",
  "React",
  "Bootstrap",
  "Tailwind",
  // Backend
  "Node.js",
  "Express.js",
  "Django",
  "Passport.js",
  // Templating
  "EJS",
  "Jinja2",
  // Database
  "PostgreSQL",
  // Testing / Architecture
  "Jest",
  "Babel",
  "TDD",
  "ES Modules",
  // Tools
  "Git",
];

export default function About({ isDarkMode }) {
  return (
    <>
      <section
        id="about"
        className={`${styles["about-section"]} container d-flex flex-column   gap-3 p-4`}
      >
        <h2 className={`${styles["about-title"]} fs-2 fw-bold text-center`}>
          {"<About Me />"}
        </h2>
        <p>
          I'm a developer who believes there's always room to grow. I may not
          know everything or be the best developer out there, but I'm always
          willing to learn, improve, and try new things. I believe small,
          consistent steps are better than trying to learn everything at once
          and eventually losing momentum. For me, becoming a better developer
          isn't about knowing it all, but about learning something new every day
          and enjoying the journey along the way.
        </p>
        <p>
          I am currently a student at NAIT in Edmonton, Alberta, and a student
          of The Odin Project, where I continue to expand my skills through
          hands-on projects. I enjoy tackling challenges, learning new
          technologies, and creating software that makes an impact.
        </p>
        <TechStack isDarkMode={isDarkMode} />
      </section>
    </>
  );
}
