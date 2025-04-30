// Projects.jsx
import styles from "./Projects.module.css";
import { FaCalendar } from "react-icons/fa";
import avts from "../assets/avts.png";

const projects = [
  {
    name: "Visitor Tracking System",
    image: avts,
    duration: {
      start: "Apr 2025",
      end: "May 2025"
    },
    tech:{
        fi:"React",
        se:"MongoDB",
        th:"Express",
        fo:"Node.js"

    },
    paragraph: {
        line1: "Developed a responsive frontend using React for a college project, focusing on intuitive user interaction.",
        line2: "Designed a clean UI to track and visualize visitor activity across the platform.",
        line3: "Collaborated closely with the backend team to integrate APIs built with Node.js and MongoDB."
      }
      
  },
  {
    name: "Visitor Tracking System",
    image: avts,
    duration: {
      start: "Jan 2025",
      end: "Mar 2025"
    },
    tech:{
        fi:"React",
        se:"MongoDB",
        th:"Express",
        fo:"Node.js"
        

    },
    paragraph: {
      line1: "Designed the user interface and developed the frontend using React for a college project.",
      line2: "Created a responsive and intuitive user experience to track and visualize visitor activity.",
      line3: "Collaborated with the backend team to integrate the frontend with a Node.js and MongoDB."
    }
  }
];

function Projects() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeading}>
        <h1>Projects</h1>
      </div>

      {projects.map((project, index) => (
        <div key={index} className={styles.projectSection}>
          <div className={styles.leftSide}>
            <div className={styles.leSiHeading}>
              <h2>{project.name}</h2>
              <div className={styles.durationLine}>
                <FaCalendar />
                <span>{project.duration.start} -</span>
                <span>{project.duration.end}</span>
              </div>
              <ul className={styles.projectPoints}>
                {Object.values(project.paragraph).map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <ul className={styles.techUsed}>
                {Object.values(project.tech).map((tec,idx)=>(
                  <li key={idx}>{tec}</li>  
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src={project.image} alt={project.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
