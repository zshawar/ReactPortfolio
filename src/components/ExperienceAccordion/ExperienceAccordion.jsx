import { useState } from "react";
import "./ExperienceAccordion.css";

export function ExperienceAccordion({ title, content }) {
  /**
   * Let's get stateful! Understanding state in React is essential
   * to building highly performant, highly interactive web-apps.
   *
   * We're going to use the useState hook that React provides to help
   * manage the open/closed state of our accordions.
   */
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/*
        We can then use that state directly inside of our JSX! We can 
        provide conditional statements for whatever we need. Here we'll 
        use our state for accessibility and toggling CSS classes to handle 
        the opening and closing of the accordions.
      */}
      <div className={`accordion ${expanded ? "expanded" : ""}`}>
        <h3>
          <button onClick={() => setExpanded(!expanded)}>
            <img
              src="/assets/caret.svg"
              alt="Arrow indication collapse/expand"
            />
            {title}
          </button>
        </h3>
        <div className="accordion-content">
          <p className={`${expanded ? "" : "pHide"}`}>{content}</p>
        </div>
      </div>
    </>
  );
}
