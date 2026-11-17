import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./Card.module.css";

export default function ProjectCard({
  image = "https://static.vecteezy.com/system/resources/previews/048/910/778/non_2x/default-image-missing-placeholder-free-vector.jpg",
  github_url,
  demo_url,
  title,
  description,
  reason,
  note,
  techList,
  isComingSoonCard,
}) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <article
        className={`${styles["card-article"]} ${!isComingSoonCard ? styles["card-subgrid"] : ""}`}
      >
        <Card
          className={styles["project-card"]}
          style={!isComingSoonCard ? { height: "100%" } : {}}
        >
          {image && (
            <div
              className={styles["card-img-wrapper"]}
              onClick={() => setShowPreview(true)}
              role="button"
              tabIndex={0}
              aria-label={`View full screenshot of ${title || "project"}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setShowPreview(true);
                }
              }}
            >
              <Card.Img
                variant="top"
                src={image}
                alt={title || "Project screenshot"}
                loading="lazy"
                className={styles["card-img"]}
              />
              <span className={styles["zoom-badge"]}>Click to enlarge</span>
            </div>
          )}
          <Card.Body className={styles["card-body"]}>
            {title && (
              <Card.Title
                as={"h3"}
                className={`${styles["card-title"]} fs-5 fw-bold`}
              >
                {title}
              </Card.Title>
            )}
            <div className={styles["card-descriptions"]}>
              {description && (
                <Card.Text className={styles["card-text"]}>
                  {description}
                </Card.Text>
              )}
              {reason && (
                <Card.Text className={styles["card-text"]}>{reason}</Card.Text>
              )}
            </div>
            {note && <p className={styles["note"]}>{note}</p>}
            {techList && (
              <div className={styles["tech-stack"]}>
                {techList.map((tech, index) => (
                  <span key={index} className={`${styles["tech-tag"]} m-0`}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div
              className={styles["buttons-group"]}
              style={isComingSoonCard ? { justifyContent: "center" } : {}}
            >
              {github_url && (
                <a
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles["button-link"]} text-decoration-none`}
                  style={isComingSoonCard ? { width: "90%", flex: "none" } : {}}
                >
                  <Button
                    aria-label="Go to Github Repository"
                    className={`${styles["card-github-button"]} w-100 d-flex justify-content-center align-items-center gap-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github flex-shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    {isComingSoonCard ? "View All Repositories" : "Github"}
                  </Button>
                </a>
              )}
              {demo_url && (
                <a
                  href={demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles["button-link"]} text-decoration-none`}
                >
                  <Button
                    aria-label="Go to Live Demo"
                    className={`${styles["card-live-button"]} w-100 d-flex justify-content-center align-items-center gap-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right flex-shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                    Demo
                  </Button>
                </a>
              )}
            </div>
          </Card.Body>
        </Card>
      </article>

      {image && (
        <Modal
          show={showPreview}
          onHide={() => setShowPreview(false)}
          size="xl"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-2 text-center bg-light rounded-bottom">
            <img
              src={image}
              alt={title || "Project preview"}
              className="img-fluid rounded"
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}
