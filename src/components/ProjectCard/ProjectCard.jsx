import "./ProjectCard.css";

/**
 * Props we'll need:
 *  - title
 *  - description
 *  - imgSrc
 *    - default value: /assets/project_placeholder.svg
 */

export function ProjectCard({
  title,
  description,
  link = "#",
  imgSrc = "/assets/project_placeholder.svg"
}) {
  return (
    <>
      {/* 
        We'll leverage our props to dictate the content of this component.
        One really cool thing we can do is make props conditional. We can 
        provide a default value so that whoever is using this component 
        only needs to provide the prop if they need to override the default.
        This allows us to abstract functionality, but also avoid duplication 
        where needed.
      */}
      <a class="projectLink" href={link} rel="noreferrer">
        <div className="cardContainer">
          <h3>{title}</h3>
          <p>{description}</p>
          <img src={imgSrc} alt={title} />
        </div>
      </a>
    </>
  );
}
