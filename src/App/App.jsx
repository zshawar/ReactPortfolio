import { Appbar } from "../components/Appbar";
import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";
import { ExperienceAccordion } from "../components/ExperienceAccordion";
import "./App.css";

/**
 * This file is going to act as our main component for content.
 * We'll leverage other components to help flesh out our app.
 */

export function App() {
  return (
    <>
      We need content!
      <Appbar />
      <main id="Home">
        <section id="landing">
          <h1 className="headline">
            My name is <span>Zaina</span>, and I build apps to improve the lives
            of others.
          </h1>
          <img
            alt="Software engineer illustration"
            src="/assets/software_engineer.svg"
            width="90%"
          />
          <article className="about-me">
            {/*
              We need a section heading! We'll need a few of them to use 
              throughout the page and we want them all to look the same 
              besides the text content. Sounds like a good candidate for 
              a component!
            */}
            <Heading id="Home">About Me</Heading>
            <p>
              Ambitious computer science student with an inquiring mind that
              values perseverance and empathy. I love participating in
              hackathons and learning new technology. My current interests are
              cyber security, machine learning, artificial intelligence, and
              UI/UX!
            </p>
          </article>
        </section>

        <section className="projects-section">
          <div className="yellow-box" aria-hidden="true" />
          {/* We'll need one of our Headings for the new section! */}
          <Heading id="Projects" className="otherH2">
            Projects
          </Heading>
          <div className="project-cards">
            {/* 
                Here's where we want to put our project cards. They're 
                going to look very similar besides the content so making 
                it a component makes sense. Though, I'd like to avoid 
                duplicating the URL to the image for each component.
              */}
            <ProjectCard
              title="Blossom"
              description="TechTogether Atlanta - Won best business hack by NCR."
              link="https://devpost.com/software/blossom-txj2g5"
              imgSrc="/assets/blossomLogo.png"
            />
            <ProjectCard
              title="RSVME"
              description="Flask app created on a team in my software engineering class."
              link="https://youtu.be/g4AnRXj1hUU"
              imgSrc="/assets/logo.png"
            />
            <ProjectCard
              title="SafeEscape"
              description="Pearl Hacks - Won Amazon's Most Customer Obsessed"
              link="https://devpost.com/software/safe-escape"
              imgSrc="/assets/safeEscape.png"
            />
          </div>
        </section>

        <section>
          {/* We'll need one of our Headings for the new section! */}
          <Heading id="Experience">Experience</Heading>
          <div className="experience-accordions">
            {/* 
              Here's where we want to put our accordions that describe 
              our experience. Again, look and feel should be consistent, 
              only content will change. Another great candidate for a 
              component! But how do we make it expand and collapse???
            */}
            <ExperienceAccordion
              title="Software Engineering"
              content="Learning python and flask"
            />
            <ExperienceAccordion
              title="Web Development"
              content="Learning HTML, CSS, and JavaScript"
            />
            <ExperienceAccordion
              title="Hackathons"
              content="Participated in hackathons and developed projects in a team"
            />
            <ExperienceAccordion
              title="React Workshop 🚀"
              content="Participated in learning more about react by creating this project using props and state."
            />
          </div>
        </section>
      </main>
    </>
  );
}
