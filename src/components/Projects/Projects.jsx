import './Projects.css';
import { Button, Container} from "react-bootstrap";
import { useState } from 'react';

function Projects(){


    const projects = [
        {
          id: 11,
          title: "DecisionHub",
          date: "Jan 2024 - Dec 2023",
          description:
            "A Rule Builder application “Decision Hub” that empowers Business Analysts to create, save, and visualize decision strategies. Provide a no-code rule writing experience and visual representation to test these rules in real-time and observe the calculations at each step.",
          image:
            "https://github.com/rishavchanda/DecisionHub/raw/master/assets/testRule.jpg",
          tags: [
            "React Js",
            "PostgressSQL",
            "Node Js",
            "Express Js",
            "Redux",
            "React Flow",
          ],
          category: "web app",
          github: "https://github.com/rishavchanda/DecisionHub",
          webapp: "https://decisionhub.netlify.app/",
        },
        {
          id: 9,
          title: "Trackify",
          date: "Jun 2023 - Jul 2023",
          description:
            "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
          image:
            "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
          tags: [
            "Docker",
            "AWS",
            "DuckDNS",
            "Eslint",
            "Husky",
            "CI/CD",
            "React Js",
            "MongoDb",
            "Node Js",
            "Express Js",
            "Redux",
          ],
          category: "web app",
          github: "https://github.com/rishavchanda/Trackify",
          webapp: "https://trackify-management.netlify.app/",
        },
        {
          id: 0,
          title: "Podstream",
          date: "Apr 2023 - May 2023",
          description:
            "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
          image:
            "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
          tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
          category: "web app",
          github: "https://github.com/rishavchanda/Podstream",
          webapp: "https://podstream.netlify.app/",
          member: [
            {
              name: "Rishav Chanda",
              img: "https://avatars.githubusercontent.com/u/64485885?v=4",
              linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
              github: "https://github.com/rishavchanda/",
            },
            {
              name: "Upasana Chaudhuri",
              img: "https://avatars.githubusercontent.com/u/100614635?v=4",
              linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
              github: "https://github.com/upasana0710",
            },
          ],
        },
        {
          id: 1,
          title: "Vexa",
          date: "Oct 2022 - Jan 2023",
          description:
            "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
          image:
            "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
          tags: [
            "React Js",
            "MongoDb",
            "Node Js",
            "Express Js",
            "Redux",
            "NodeMailer",
          ],
          category: "web app",
          github: "https://github.com/rishavchanda/Project-Management-App",
          webapp: "https://vexa-app.netlify.app/",
        },
        {
          id: 2,
          title: "Brain Tumor Detection",
          date: "Jan 2023 - Mar 2023",
          description:
            "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
          image:
            "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
          tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
          category: "machine learning",
          github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
          webapp: "https://brain-tumor.netlify.app/",
          member: [
            {
              name: "Rishav Chanda",
              img: "https://avatars.githubusercontent.com/u/64485885?v=4",
              linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
              github: "https://github.com/rishavchanda/",
            },
            {
              name: "Upasana Chaudhuri",
              img: "https://avatars.githubusercontent.com/u/100614635?v=4",
              linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
              github: "https://github.com/upasana0710",
            },
          ],
        },
      ];
      

    const [toggle, setToggle] = useState('all');

    return(
        <Container id="projects">
            <div id='Wrapper'>
                <h1 id='Title'>Projects</h1>
                <div id='ToogleButtonGroup'>

          {toggle === 'all' ?
            <Button active value="all" onClick={() => setToggle('all')} id='ToogleButton'>All</Button>
            :
            <Button value="all" onClick={() => setToggle('all')} id='ToogleButton'>All</Button>
          }
          <div className="vr" />
          {toggle === 'web app' ?
            <Button active value="web app" onClick={() => setToggle('web app')} id='ToogleButton'>WEB APP'S</Button>
            :
            <Button value="web app" onClick={() => setToggle('web app')} id='ToogleButton'>WEB APP'S</Button>
          }
          <div className="vr" />
          {toggle === 'frontend' ?
            <Button active value="frontend" onClick={() => setToggle('frontend')} id='ToogleButton'>FRONTEND'S</Button>
            :
            <Button value="frontend" onClick={() => setToggle('frontend')} id='ToogleButton'>FRONTEND'S</Button>
          }
          <div className="vr" />
          {toggle === 'backend' ?
            <Button active value="backend" onClick={() => setToggle('backend')} id='ToogleButton'>BACKEND'S</Button>
            :
            <Button value="backend" onClick={() => setToggle('backend')} id='ToogleButton'>BACKEND'S</Button>
          }
                </div>
                <div id='CardContainer'>
                {toggle === 'all' && projects.map((project, index) => (
              <Button onClick={() => setOpenModal({state: true})} id="Card">
              <img id="Image" src={project.image}/>
              <div id="Tags">
                  {project.tags?.map((tag, index) => (
                  <div id="Tag">{tag}</div>
                  ))}
              </div>
              <div id="Details">
                  <div id="Title">{project.title}</div>
                  <div id="Date">{project.date}</div>
                  <div id="Description">{project.description}</div>
              </div>
          </Button>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <Button onClick={() => setOpenModal({state: true})} id="Card">
              <img id="Image" src={project.image}/>
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
    );
}

export default Projects;