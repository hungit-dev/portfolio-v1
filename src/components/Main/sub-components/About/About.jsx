import styles from "./About.module.css";
import TechStack from "./TechStack";

export default function About({ isDarkMode }) {
  return (
    <section
      id="about"
      className={`${styles["about-section"]} container d-flex flex-column gap-4 py-5 px-3 px-md-4`}
    >
      <h2 className={`${styles["about-title"]} fs-2 fw-bold text-center mb-2`}>
        {"<About Me />"}
      </h2>

      <div className={styles["about-content-grid"]}>
        <div className={styles["about-text"]}>
          <p className={styles["lead-paragraph"]}>
            I'm a developer who believes there's always room to grow. I may not
            know everything or be the best developer out there, but I'm always
            willing to learn, improve, and try new things. I believe small,
            consistent steps are better than trying to learn everything at once
            and eventually losing momentum. For me, becoming a better developer
            isn't about knowing it all, but about learning something new every
            day and enjoying the journey along the way.
          </p>
          <p>
            I am currently a student at <strong>NAIT</strong> in Edmonton,
            Alberta, and a student of <strong>The Odin Project</strong>, where I
            continue to expand my skills through hands-on projects. I enjoy
            tackling challenges, learning new technologies, and creating
            software that makes an impact.
          </p>
        </div>

        <div className={styles["profile-image-wrapper"]}>
          <div className={styles["profile-frame"]}>
            <img
              src="assets/images/profile-image.JPG"
              alt="Henry Huynh"
              className={styles["profile-image"]}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <TechStack isDarkMode={isDarkMode} />
    </section>
  );
}
