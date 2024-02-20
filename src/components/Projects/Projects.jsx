import "./Projects.css";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Dashboard Application",
      date: "Mar 2023 - May 2023",
      description:
        "Orchestrated the creation of a sophisticated Dashboard Web Application focused on dynamic data visualization. Seamlessly melded Spring Boot backend functionality with a React frontend and harnessed the capabilities of a PostgreSQL database. Leveraged Spring Boot to efficiently filter data, seamlessly integrating it into the React-based dashboard application. This strategic approach not only facilitated dynamic chart generation but also yielded a 30% reduction in search time and coupled with an impressive 40% boost in overall operational efficiency",
      image:
        "https://github.com/shafa-shabudeen/Dashboard-App-Frontend/blob/main/dashboard-app-preview.png?raw=true",

      tags: ["React Js", "PostgressSQL", "Spring Boot", "Java"],
      category: "web app",
      github: "https://github.com/shafa-shabudeen/Dashboard-App-Frontend",
      webapp: "https://decisionhub.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Application",
      date: "Jan 2023 - Feb 2023",
      description:
        "Developed a Java-based Movie Web Application that redefined user interaction. Leveraged Spring Boot to streamline movie selection, leading to a 30% reduction in search time and an impressive 40% increase in overall efficiency. The application provided users with an immersive movie browsing experience.",
      image:
        "https://github.com/shafa-shabudeen/MovieFrontEnd/blob/main/app-preview.png?raw=true",
      tags: ["React Js", "MongoDB", "Spring Boot", "Java"],
      category: "web app",
      github: "https://github.com/shafa-shabudeen/MovieFrontEnd",
      webapp: "https://trackify-management.netlify.app/",
    },
    {
      id: 3,
      title: "TODO List",
      date: "Jun 2023 - Jul 2023",
      description:
        "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
      image:
        "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
      tags: ["HTML", "Css", "JavaScript"],
      category: "frontend",
      github: "https://github.com/shafa-shabudeen/TODO-List-web",
      webapp: "https://podstream.netlify.app/",
    },
  ];

  const [toggle, setToggle] = useState("all");

  return (
    <div className="projects">
      <Container id="projects">
        <div id="Wrapper">
          <h1 id="Title">Projects</h1>
          <div id="ToogleButtonGroup">
            {toggle === "all" ? (
              <Button
                active
                value="all"
                onClick={() => setToggle("all")}
                id="ToogleButton"
              >
                All
              </Button>
            ) : (
              <Button
                value="all"
                onClick={() => setToggle("all")}
                id="ToogleButton"
              >
                All
              </Button>
            )}
            <div className="vr" />
            {toggle === "web app" ? (
              <Button
                active
                value="web app"
                onClick={() => setToggle("web app")}
                id="ToogleButton"
              >
                WEB APP'S
              </Button>
            ) : (
              <Button
                value="web app"
                onClick={() => setToggle("web app")}
                id="ToogleButton"
              >
                WEB APP'S
              </Button>
            )}
            <div className="vr" />
            {toggle === "frontend" ? (
              <Button
                active
                value="frontend"
                onClick={() => setToggle("frontend")}
                id="ToogleButton"
              >
                FRONTEND'S
              </Button>
            ) : (
              <Button
                value="frontend"
                onClick={() => setToggle("frontend")}
                id="ToogleButton"
              >
                FRONTEND'S
              </Button>
            )}
            <div className="vr" />
            {toggle === "backend" ? (
              <Button
                active
                value="backend"
                onClick={() => setToggle("backend")}
                id="ToogleButton"
              >
                BACKEND'S
              </Button>
            ) : (
              <Button
                value="backend"
                onClick={() => setToggle("backend")}
                id="ToogleButton"
              >
                BACKEND'S
              </Button>
            )}
          </div>
          <div id="CardContainer">
            {toggle === "all" &&
              projects.map((project, index) => (
                <Button onClick={() => setOpenModal({ state: true })} id="Card">
                  <img id="Image" src={project.image} />
                  <div id="Tags">
                    {project.tags?.map((tag, index) => (
                      <div id="Tag">{tag}</div>
                    ))}
                  </div>
                  <div id="Details">
                    <div id="TagTitle">{project.title}</div>
                    <div id="Date">{project.date}</div>
                    <div id="Description">{project.description}</div>
                  </div>
                </Button>
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <Button onClick={() => setOpenModal({ state: true })} id="Card">
                  <img id="Image" src={project.image} />
                  <div id="Tags">
                    {project.tags?.map((tag, index) => (
                      <div id="Tag">{tag}</div>
                    ))}
                  </div>
                  <div id="Details">
                    <div id="TagTitle">{project.title}</div>
                    <div id="Date">{project.date}</div>
                    <div id="Description">{project.description}</div>
                  </div>
                </Button>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
